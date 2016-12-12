import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssService } from '../../providers/rss-service';
import { OutraPage } from '../outra/outra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  entries:any;

  constructor(public rssService: RssService, public navCtrl: NavController) {
    this.rssService = rssService;
    this.navCtrl = navCtrl
    this.entries = [];

    this.rssService.load().subscribe(data =>{
      this.entries = data;
    });
  }

  openPage(entry) {
    this.navCtrl.push(OutraPage, { selectedEntry: entry })
  }
}
