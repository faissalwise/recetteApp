import { Component, OnInit,Input } from '@angular/core';
import { Plat } from '../shared/plat';


@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.component.html',
  styleUrls: ['./detail-plat.component.css']
})
export class DetailPlatComponent implements OnInit {

  @Input()
  plat: Plat;

  constructor() { }

  ngOnInit() {
  }

}
