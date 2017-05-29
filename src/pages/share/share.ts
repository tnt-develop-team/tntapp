import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Tool } from '../../models/tool';

/**
 * Generated class for the SharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  private tool: Tool;
  @ViewChild('map') mapElement;
  map: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.tool = navParams.get("tool");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
    this.loadMap();
  }

  shareTool() {
    console.log ('not impelemeted');
    this.viewCtrl.dismiss(null);
  }

   loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
}
