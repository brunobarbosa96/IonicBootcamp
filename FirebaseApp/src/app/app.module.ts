import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDq-kUrrdhH30s29yVpuOsEY4t8k_kg-zg",
  authDomain: "fir-app-28682.firebaseapp.com",
  databaseURL: "https://fir-app-28682.firebaseio.com",
  storageBucket: "fir-app-28682.appspot.com",
  messagingSenderId: "807919728175"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
