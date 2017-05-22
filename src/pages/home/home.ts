import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tools = [{
        "id": "1",
        "name": "Cub Cadet XT1 Enduro Series LT 42 in. 18 HP Kohler Hydrostatic Gas Front-Engine Riding Mower" ,
        "image": "http://www.homedepot.com/catalog/productImages/400_compressed/73/7378ee12-b915-4972-ad44-7dd7d6fef7b4_400_compressed.jpg"
        },
        {
        "id": "2",
        "name": "Ryobi ONE+ 18-Volt Lithium-Ion Ultimate Combo Kit (6-Tool)" ,
        "image": "http://www.homedepot.com/catalog/productImages/400_compressed/59/5967d2f1-ac37-4f96-b7a4-79f93b92e193_400_compressed.jpg"
        },
        {
        "id": "3",
        "name": "Ryobi 40-Volt 16 in. Lithium-Ion Cordless Walk Behind Battery Push Mower with 4.0 Ah Battery" ,
        "image": "http://www.homedepot.com/catalog/productImages/400_compressed/7e/7e14da71-bf1b-487e-abf7-d957bb786fbb_400_compressed.jpg"
        },
        {
        "id": "4",
        "name": "EGO 110 mph 530 CFM Variable-Speed Turbo 56-Volt Lithium-ion Cordless Electric Blower" ,
        "image": "http://www.homedepot.com/catalog/productImages/400_compressed/4e/4e0b1d79-25e6-4457-8dde-93229f2720cd_400_compressed.jpg"
        },
        {
        "id": "5",
        "name": "Nexgrill 4-Burner Propane Gas Grill in Stainless Steel with Side Burner" ,
        "image": "http://www.homedepot.com/catalog/productImages/400_compressed/c5/c51ae7dc-ecae-41d5-bf33-af434624833d_400_compressed.jpg"
        }
    ]
  constructor(public navCtrl: NavController) {

  }

}
