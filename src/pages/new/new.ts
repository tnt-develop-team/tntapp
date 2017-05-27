import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Tool } from '../../models/tool';

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
  private name: string;
  private image: string;
  private description: string;
  constructor(public viewCtrl: ViewController) {
  }

  ok() {
    let tool = new Tool (this.name, this.image, this.description);
    this.viewCtrl.dismiss(tool);
  }
}
