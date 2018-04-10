import { Injectable } from '@angular/core';
import { Plat } from '../shared/plat';
import { PLATS } from '../shared/plats';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PlatService {

  constructor() { }

  getPlats(): Observable<Plat[]> {
    return Observable.of(PLATS).delay(2000);
  }

  getPlat(id: number): Observable<Plat> {
    return Observable.of(PLATS.filter((plat) => (plat.id === id))[0]).delay(20)
  }

  getFeaturedPlat(): Observable<Plat> {
    return Observable.of(PLATS.filter((dish) => dish.featured)[0]).delay(20);
  }
}