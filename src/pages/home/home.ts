import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NewPage } from '../new/new';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tools: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, 
    private db: AngularFireDatabase, 
    private modalCtrl: ModalController) {
    this.tools = db.list('/tools');
  }

  newTool() {
    let modal = this.modalCtrl.create(NewPage);
    modal.onDidDismiss(data=> {
        console.log(data);
        this.tools.push(data);
      });
    modal.present();
  }

  deleteTool(tool) {
    this.tools.remove(tool);
    console.log(tool);
  }
}
