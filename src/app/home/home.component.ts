import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';
import { PlatService } from '../services/plat.service';
import { Plat } from '../shared/plat';
import { Promotion } from '../shared/promotion';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promotion: Promotion;
  plat:Plat;

  constructor(private platService: PlatService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
   this.platService.getFeaturedPlat().subscribe(plat => this.plat = plat);
   this.promotion = this.promotionservice.getFeaturedPromotion();

  }

}
