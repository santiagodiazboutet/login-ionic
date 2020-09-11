import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth'; 

var firebaseConfig = {
  apiKey: "AIzaSyC7ZtNpk3Za5lvI2uXRvHlNw27V-LOE_k8",
  authDomain: "loginpps2020.firebaseapp.com",
  databaseURL: "https://loginpps2020.firebaseio.com",
  projectId: "loginpps2020",
  storageBucket: "loginpps2020.appspot.com",
  messagingSenderId: "504746876420",
  appId: "1:504746876420:web:6bbc44af841dc0dfa11f51",
  measurementId: "G-76CRJ35D22"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFirestoreModule, // firestore
            AngularFireAuthModule, // auth
            AngularFireStorageModule //storage
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
