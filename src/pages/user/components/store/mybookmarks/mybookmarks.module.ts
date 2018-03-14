import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyBookMarksPage } from './mybookmarks';

import { RecentlyPage } from './bookmarks-recently/recently';
import { CollectionsPage } from './bookmarks-collections/collections';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyBookMarksPage,
    RecentlyPage,
    CollectionsPage,

  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyBookMarksPage,
    RecentlyPage,
    CollectionsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class MyBookMarksModule { }
