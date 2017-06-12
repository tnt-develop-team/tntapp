import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { User } from '../../models/user';

/*
  Generated class for the SessionServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SessionService {
  public user: User;
  public firebaseUser: Observable<firebase.User>; 
  constructor(public fireAuth: AngularFireAuth) {
    this.firebaseUser  = this.fireAuth.authState;
    this.firebaseUser.subscribe(
     (value) => {
        console.log(value);
      }, 
      error => console.log(error)
    );
    console.log('Hello SessionServiceProvider Provider');
  }

  login() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((state) => {
        this.user = new User(state.user.uid,
          state.user.displayName,
          state.user.email,
          state.user.emailVerified,
          state.user.phoneNumber,
          state.user.photoURL);
      })
      .catch((error) => console.log(error));
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
}
