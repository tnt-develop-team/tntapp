import { Component  } from '@angular/core';
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
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.tool = navParams.get("tool");
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  shareTool() {
    console.log ('not impelemeted');
    this.viewCtrl.dismiss(null);
  }

}
