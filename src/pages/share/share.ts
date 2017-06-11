import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Tool } from '../../models/tool';
import { Share } from '../../models/share';
import { Geolocation } from '@ionic-native/geolocation';

//need this line on windows.
declare var google;

@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  private tool: Tool;
  private email: string;
  private phone: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private state: string;
  private zip: string;
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
    console.log(this.email);
    console.log('not impelemeted');
    let share = new Share(this.tool.$key, 
      "someone", 
      this.email, 
      this.phone, 
      this.addressLine1, 
      this.addressLine2, 
      this.city, 
      this.state, 
      this.zip);
    this.viewCtrl.dismiss(share);
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
