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

@Injectable()
export class PlatService {

  constructor(private http: Http,
    private processHttpmsgService: ProcessHttpmsgService) { }

  getPlats(): Observable<Plat[]> {
    return this.http.get(baseURL + 'plats')
                    .map(res => { return this.processHttpmsgService.extractData(res); })
                    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getPlat(id: number): Observable<Plat> {
    return  this.http.get(baseURL + 'plats/'+ id)
                    .map(res => { return this.processHttpmsgService.extractData(res); })
                    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getFeaturedPlat(): Observable<Plat> {
    return this.http.get(baseURL + 'plats?featured=true')
                    .map(res => { return this.processHttpmsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getPlatIds(): Observable<number[]> {
    return this.getPlats()
      .map(plats => { return plats.map(plat => plat.id) })
      .catch(error => { return Observable.of(error); });
      
  }


}