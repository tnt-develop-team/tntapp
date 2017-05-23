import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the NewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  private id: string;
  private name: string;
  private image: string;
  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  ok() {
    let data = {
      id: this.id,
      name: this.name,
      image: this.image
    };
    console.log(this.id);
    this.viewCtrl.dismiss(data);
  }
}
