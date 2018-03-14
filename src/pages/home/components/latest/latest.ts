import { AfterViewInit, Component, OnInit } from '@angular/core'
import { AlertController, LoadingController, NavController } from 'ionic-angular'

import { PostService } from '../../../../providers/services/post-mock.service'
import { IPost } from '../../../../providers/models/post'
import { Observable } from 'rxjs/Observable'
import { AppState } from '../../../../app/interface'
import { Store } from '@ngrx/store'

import * as PostActions from '../../../camera/actions/post.actions'
import * as fromPosts from '../../../camera/reducers/post.state'

@Component({
	selector: 'page-latest',
	templateUrl: 'latest.html',
})
export class LatestPage implements OnInit {

	latestPosts: Array<IPost>
	loader: any
	posts: IPost[]

	constructor(public navCtrl: NavController,
	            public postService: PostService,
	            public alertCtrl: AlertController,
	            public loadingCtrl: LoadingController,
	            private store: Store<AppState>,) {
		this.presentLoading()
		this.getError()
		this.getPosts()
	}

	ngOnInit() {
		this.store.dispatch(new PostActions.FindPosts({}))
	}

	getPosts() {
		this.store.select(fromPosts.getPosts).subscribe(
			payload => {
				if (payload) {
					this.posts = (payload as any).toJSON()
					console.log('%c payload', 'background: red; color: white', this.posts)
					this.loader.dismiss()
				}
			},
		)
	}

	getError() {
		this.store.select(fromPosts.getError).subscribe(
			error => {
				if (error) {
					this.loader.dismiss()
					this.presentAlert(`Something went wrong. Please try again`)
				}
			},
		)
	}

	presentAlert(message) {
		const alert = this.alertCtrl.create({
			title: 'Error',
			subTitle: message,
			buttons: ['Dismiss'],
		})
		alert.present()
	}

	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...',
		})
		this.loader.present()
	}

}
