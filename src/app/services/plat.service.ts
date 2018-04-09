import { Injectable } from '@angular/core';
import { Plat } from '../shared/plat';
import { PLATS } from '../shared/plats';

@Injectable()
export class PlatService {

  constructor() { }

  getPlats(): Plat[] {
    return PLATS;
  }

  getPlat(id: number): Plat {
    return PLATS.filter((plat) => (plat.id === id))[0];
  }

  getFeaturedPlat(): Plat {
    return PLATS.filter((plat) => plat.featured)[0];
  }
}