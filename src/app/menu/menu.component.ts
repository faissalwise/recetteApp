import { Component, OnInit } from '@angular/core';
import { Plat } from '../shared/plat';
import { PLATS } from '../shared/plats';
import { PlatService } from '../services/plat.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  plats = PLATS;

  selectedPlat: Plat;



  onSelect(plat: Plat) {
    this.selectedPlat = plat;
  }


  constructor(private platService: PlatService) { }

  ngOnInit() {
    this.platService.getPlats().subscribe(plats => this.plats = plats);
  }

}
