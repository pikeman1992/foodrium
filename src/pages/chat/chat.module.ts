import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChatPage } from './chat';

import { MessagesPage } from './chat-messages/messages';
import { GroupChatPage } from './chat-groupchat/groupchat';

import { MessagesDetailPage } from './chat-messages/messages-detail/messages-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ChatPage,
    MessagesPage,
    GroupChatPage,
    MessagesDetailPage,

  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatPage,
    MessagesPage,
    GroupChatPage,
    MessagesDetailPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class ChatModule { }
