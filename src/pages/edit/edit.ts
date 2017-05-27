import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { Tool } from '../../models/tool';

/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  private tool: Tool;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.tool = navParams.get("tool");
  }

  save() {
    this.viewCtrl.dismiss(this.tool);
  }
}
