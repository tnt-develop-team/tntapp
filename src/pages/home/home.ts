import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NewPage } from '../new/new';
import { EditPage } from '../edit/edit';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tools: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(public navCtrl: NavController, 
    private db: AngularFireDatabase, 
    private modalCtrl: ModalController,
    public afAuth: AngularFireAuth) {
    this.tools = db.list('/tools');
    this.user = afAuth.authState;
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

  editTool(tool) {
    let modal = this.modalCtrl.create(EditPage, {"tool": tool});
    modal.onDidDismiss(data=> {
        console.log(data);
        this.tools.update(data.$key, {description: data.description});
      });
    modal.present();
  }

   login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
