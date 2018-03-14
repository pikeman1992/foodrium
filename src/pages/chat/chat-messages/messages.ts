import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessagesDetailPage } from './messages-detail/messages-detail';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  detailMess = MessagesDetailPage;
  constructor(public navCtrl: NavController) {

  }

}
