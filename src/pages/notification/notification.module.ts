import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NotificationPage } from './notification';

import { NotifyYouPage } from './notify-you/notify-you';
import { NotifyFollowingPage } from './notify-following/notify-following';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    NotificationPage,
    NotifyYouPage,
    NotifyFollowingPage,

  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NotificationPage,
    NotifyYouPage,
    NotifyFollowingPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class NotificationModule { }
