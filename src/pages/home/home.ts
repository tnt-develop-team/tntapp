import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tools: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.tools = db.list('/tools');
  }

}
