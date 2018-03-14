import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mybookmarks',
  templateUrl: 'mybookmarks.html'
})
export class MyBookMarksPage {

  bookmarks_child = "recently";
  constructor(public navCtrl: NavController) {

  }

}
