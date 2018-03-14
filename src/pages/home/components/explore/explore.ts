import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {

  latestList = [];

  constructor(public navCtrl: NavController) {
    this.latestList.length = 2;
  }

}
