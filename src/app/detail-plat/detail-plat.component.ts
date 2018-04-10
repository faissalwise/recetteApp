import { Component, OnInit } from '@angular/core';
import { Plat } from '../shared/plat';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from '../services/plat.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.component.html',
  styleUrls: ['./detail-plat.component.css']
})
export class DetailPlatComponent implements OnInit {

  plat: Plat;

  constructor(private platService: PlatService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.platService.getPlat(id).subscribe(plat => this.plat = plat);
  }

  goBack(): void {
    this.location.back();
  }

}
