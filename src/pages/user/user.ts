import { Component, OnInit } from '@angular/core'
import { ModalController, NavController, LoadingController, Loading } from 'ionic-angular'
import { Observable } from 'rxjs'

import { EditAcountPage } from './components/editacount/editacount'
import { MyBookMarksPage } from './components/store/mybookmarks/mybookmarks'
import { AppState } from '../../app/interface'
import { Store } from '@ngrx/store'

import * as Actions from '../start/actions/auth.actions'
import * as fromUser from './reducers/user.state'
import * as UserActions from './actions/user.actions'

import { AuthService } from '../../providers/services/auth.service'
import { env } from '../../environments/env'
@Component({
	selector: 'page-user',
	templateUrl: 'user.html',
})
export class UserPage implements OnInit {

	profileId: any;
	modal: any;
	profile_child = 'pic'
	bookmarkspage = MyBookMarksPage
	cdnURL = env.CDN_URL
	loader: Loading

	constructor(
		private store: Store<AppState>,
		public navCtrl: NavController,
		public modalCtrl: ModalController,
		public authService: AuthService,
		public loadingCtrl: LoadingController, ) {
			this.presentLoading();
	}

	ngOnInit() {
		
	}

	ionViewDidLoad() {
		this.store.dispatch(new UserActions.GetUserId());
		this.getUserId();
	}

	getUserId() {
		this.store.select(fromUser.getData).subscribe(
			data => {
				if (data) {
					this.profileId = (data as any).toJSON()._id;
					console.log('User ID', this.profileId);
					this.loader.dismiss();
				}
			}
		)
	}

	//Loading control
	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...',
		})
		this.loader.present()
	}

	// getUserInfo() {
	// 	Observable.fromPromise(this.authService.getUser()).subscribe(
	// 		data => {
	// 			this.profileInfo = data;
	// 			console.log('data', this.profileInfo);
	// 		}
	// 	)
	// }

	openEditUser() {
		this.modal = this.modalCtrl.create(EditAcountPage, { data: this.profileId });
		this.modal.present();
	}

	logout() {
		this.store.dispatch(new Actions.Logout())
	}

}
