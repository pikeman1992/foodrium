import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-comment-detail',
  templateUrl: 'comment-detail.html'
})
export class CommentDetailPage {

  public list = [];
  constructor(public navCtrl: NavController) {
    this.list.length = 10;
  }

}
