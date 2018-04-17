import { Component, OnInit ,Inject} from '@angular/core';
import { Plat } from '../shared/plat';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from '../services/plat.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Params } from '@angular/router';



@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.component.html',
  styleUrls: ['./detail-plat.component.css']
})
export class DetailPlatComponent implements OnInit {

  plat: Plat;
  platIds: number[];
  prev: number;
  next: number;
  platCopy = null;

  constructor(private platService: PlatService,
    private route: ActivatedRoute,
    private location: Location,@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.platService.getPlatIds().subscribe(platIds => this.platIds = platIds);
    this.route.params
      .switchMap((params: Params) => this.platService.getPlat(+params['id']))
      .subscribe(plat => { this.plat = plat; this.platCopy = plat; this.setPrevNext(plat.id); });
  }

  setPrevNext(platId: number) {
    let index = this.platIds.indexOf(platId);
    this.prev = this.platIds[(this.platIds.length + index - 1)%this.platIds.length];
    this.next = this.platIds[(this.platIds.length + index + 1)%this.platIds.length];
  }

  goBack(): void {
    this.location.back();
  }



}
