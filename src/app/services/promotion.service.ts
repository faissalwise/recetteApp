import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion';



@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }
 
  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }
 
  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }

}
