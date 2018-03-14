import { Component, ViewChild } from '@angular/core'

import { SearchPage } from '../search/search';
import { CameraPage } from '../camera/camera';
import { HomePage } from '../home/home';
//import { ChatPage } from '../chat/chat';
import { UserPage } from '../user/user';
import { NotificationPage } from '../notification/notification';

import * as fromAuth from '../start/reducers/auth.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/interface';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
	@ViewChild('tabs') tabs

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CameraPage;
  //tab4Root = ChatPage;
  tab4Root = NotificationPage;
  tab5Root = UserPage;

  constructor(
    private store: Store<AppState>,
  ) {
    
  }
}
