import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OutraPage } from '../pages/outra/outra';
import { RssService } from '../providers/rss-service';

import { SanitizeHTML } from '../pipes/sanitize-html'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OutraPage,
    SanitizeHTML
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OutraPage
  ],
  providers: [RssService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
