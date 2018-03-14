import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UserPage } from './user';

import { EditAcountPage } from './components/editacount/editacount';


import { MyPicPage } from './components/store/mypic/mypic';
import { MyPostPage } from './components/store/mypost/mypost';
import { MyPicInPostPage } from './components/store/mypicinpost/mypicinpost';

import { MyBookMarksModule } from './components/store/mybookmarks/mybookmarks.module';

import { EffectsModule } from '@ngrx/effects'
import { UserEffects } from './effects/user.effects'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    UserPage,
    EditAcountPage,

    MyPicPage,
    MyPostPage,
    MyPicInPostPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    MyBookMarksModule,
    EffectsModule.forFeature([
      UserEffects
    ]),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UserPage,
    EditAcountPage,
    MyPicPage,
    MyPostPage,
    MyPicInPostPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class UserModule { }
