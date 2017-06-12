import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NewPage } from '../new/new';
import { EditPage } from '../edit/edit';
import { SharePage } from '../share/share';
import { User } from '../../models/user';
import { FirebaseService } from '../../providers/firebase-service/firebase-service';
import { SessionService } from '../../providers/session-service/session-service';



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
    public sessionService: SessionService) {
    this.tools = firebaseService.getTools();
    this.shares = db.list('/shares');
    this.requests = db.list('/requests');
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
    this.sessionService.login();
  }

  logout() {
    this.sessionService.logout();
  }

  shareTool(tool) {
    let modal = this.modalCtrl.create(SharePage, { "tool": tool });
     modal.onDidDismiss(share => {
      this.firebaseService.addShare(share);
    });
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
