import { Injectable } from '@angular/core';
import { Plat } from '../shared/plat';
import { PLATS } from '../shared/plats';

@Injectable()
export class PlatService {

  constructor() { }

  getPlats(): Plat[] {
    return PLATS;
  }
}