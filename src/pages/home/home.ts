import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NewPage } from '../new/new';
import { EditPage } from '../edit/edit';
import { SharePage } from '../share/share';
import { FirebaseService } from '../../providers/firebase-service/firebase-service'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tools: FirebaseListObservable<any[]>;
  shares: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  requests: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
    public firebaseService: FirebaseService,
    private db: AngularFireDatabase,
    private modalCtrl: ModalController,
    public afAuth: AngularFireAuth) {
    this.tools = firebaseService.getTools();
    this.shares = db.list('/shares');
    this.requests = db.list('/requests');
    this.user = afAuth.authState;
  }


  newTool() {
    let modal = this.modalCtrl.create(NewPage);
    modal.onDidDismiss(tool => {
      this.firebaseService.addTool(tool);
    });
    modal.present();
  }

  deleteTool(tool) {
    this.tools.remove(tool);
    console.log(tool);
  }

  editTool(tool) {
    let modal = this.modalCtrl.create(EditPage, { "tool": tool });
    modal.onDidDismiss(data => {
      if (data != null) {
        this.firebaseService.updateTool(data.$key, data);
      } else {
        console.log('edit cancelled');
      }
    });
    modal.present();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  shareTool(tool) {
    let modal = this.modalCtrl.create(SharePage, { "tool": tool });
    // modal.onDidDismiss(
    //   data => {
    //     console.log('not implemented')
    //   });
    modal.present();
    // this.user.subscribe((data) => {
    //   this.shares.push({
    //     tool: tool.$key,
    //     user: data.uid
    //   });
    // });
  }

  requestTool(tool) {
    this.user.subscribe((data) => {
      this.requests.push({
        tool: tool.$key,
        user: data.uid
      });
    });
  }
}
