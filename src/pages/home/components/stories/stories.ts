import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeTabsService } from '../hometabs.service';

@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html'
})
export class StoriesPage {

  latestList = [];
  constructor(public navCtrl: NavController,
    private homeTabSV: HomeTabsService, ) {

      homeTabSV.getListItem();
      this.latestList = homeTabSV.listitem;
      
  }

}
