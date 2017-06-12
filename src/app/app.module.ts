import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MyPage } from '../pages/my/my';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NewPage } from '../pages/new/new';
import { EditPage } from '../pages/edit/edit';
import { SharePage } from '../pages/share/share';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig }       from './app.config';
import { FirebaseService } from '../providers/firebase-service/firebase-service';
import { Geolocation } from '@ionic-native/geolocation';
import { SessionService } from '../providers/session-service/session-service';


@NgModule({
  declarations: [
    MyApp,
    MyPage,
    ChatPage,
    HomePage,
    TabsPage,
    NewPage,
    EditPage,
    SharePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPage,
    ChatPage,
    HomePage,
    TabsPage,
    NewPage,
    EditPage,
    SharePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    FirebaseService,
    Geolocation,
    SessionService
  ]
})
export class AppModule { }
