import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-outra',
  templateUrl: 'outra.html'
})
export class OutraPage {
  entry:any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.entry = navParams.get('selectedEntry');
  }

  ionViewDidLoad() {
    console.log('Hello OutraPage Page');
  }

}
