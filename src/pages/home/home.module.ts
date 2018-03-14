import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HomePage } from './home';

import { StoriesPage } from './components/stories/stories';
import { PostPage } from './components/post/post';
import { CommentDetailPage } from './components/comment-detail/comment-detail';

import { LatestPage } from './components/latest/latest';
import { ExplorePage } from './components/explore/explore';
import { AroundPage } from './components/around/around';

import { HomeTabsService } from './components/hometabs.service';
import { PostService } from '../../providers/services/post-mock.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    HomePage,
    LatestPage,
    ExplorePage,
    AroundPage,

    StoriesPage,
    PostPage,
    CommentDetailPage,

  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    LatestPage,
    ExplorePage,
    AroundPage,

    StoriesPage,
    PostPage,
    CommentDetailPage,

  ],
  providers: [
    HomeTabsService,
    PostService,

    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class HomeModule { }
