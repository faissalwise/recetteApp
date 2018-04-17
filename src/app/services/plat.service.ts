import { Injectable } from '@angular/core';
import { Plat } from '../shared/plat';
import { PLATS } from '../shared/plats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class PlatService {

  constructor(private restangular: Restangular,
    private processHttpmsgService: ProcessHttpmsgService) { }

  getPlats(): Observable<Plat[]> {
    return this.restangular.all('plats').getList();
  }

  getPlat(id: number): Observable<Plat> {
    return  this.restangular.one('plats',id).get();
  }

  getFeaturedPlat(): Observable<Plat> {
    return this.restangular.all('plats').getList({featured: true})
      .map(plats => plats[0]);
  }

  getPlatIds(): Observable<number[]> {
    return this.getPlats()
      .map(plats => { return plats.map(plat => plat.id) })
      .catch(error => { return Observable.of(error); });
      
  }


}