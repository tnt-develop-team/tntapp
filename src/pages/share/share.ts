import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Tool } from '../../models/tool';
import { Share } from '../../models/share';
import { Geolocation } from '@ionic-native/geolocation';
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
  private email: String;
  private phone: String;
  private address1: String;
  private address2: String;
  private city: String;
  private state: String;
  private zip: String;
  @ViewChild('map') mapElement;
  map: any;

  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation) {
    this.tool = navParams.get("tool");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
    this.loadMap();
  }

  shareTool() {
    console.log(this.tool.$key);
    console.log('not impelemeted');
    this.viewCtrl.dismiss(null);
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => {
      console.log(err);
    });
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
