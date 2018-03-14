import { Component, Input, OnInit } from '@angular/core'
import { NavController } from 'ionic-angular'

import { CommentDetailPage } from '../comment-detail/comment-detail'
import { IPost } from '../../../../providers/models/post'
import { IUser } from '../../../../providers/models/user'

import { env } from '../../../../environments/env'

@Component({
	selector: 'page-post',
	templateUrl: 'post.html',
})
export class PostPage implements OnInit {

	@Input() post: IPost
	userInfo: IUser
	commentPage = CommentDetailPage
	isLoaded = true
	cdnURL = env.CDN_URL

	constructor(public navCtrl: NavController) {
	}

	// getUserId() {
	//   return this.postSer.getUserByPostId(this.post.userId)
	//     .then(data => {
	//       this.userInfo = data;
	//     });
	// }

	ngOnInit() {
		// this.getUserId().then(() =>
		//   this.isLoaded = true);
	}

}
