import { Actions, Effect } from '@ngrx/effects'
import * as PostActions from '../actions/post.actions'
import { Observable } from 'rxjs/Observable'
import { Action } from '@ngrx/store'
import { of } from 'rxjs/observable/of'
import { Injectable } from '@angular/core'
import { App } from 'ionic-angular'
import { PostService } from '../../../providers/services/post.service'

import { LatestPage } from '../../home/components/latest/latest'

@Injectable()
export class PostEffects {
	constructor(private actions$: Actions,
		private postService: PostService,
		public app: App,) {

	}

	@Effect()
	FindPosts$: Observable<Action> = this.actions$
		.ofType(PostActions.FIND_POSTS)
		.map((action: PostActions.FindPosts) => action.payload)
		.exhaustMap(() => this.postService.findPosts())
		.map(res => new PostActions.FindPostsSuccess(res))
		.catch(error => of(new PostActions.FindPostsFailure(error)))

	@Effect()
	CreatePost$: Observable<Action> = this.actions$
		.ofType(PostActions.CREATE_POST)
		.debounceTime(1000)
		.map((action: PostActions.CreatePost) => action.payload)
		.exhaustMap(post => this.postService.createPost(post))
		.map(res => {
			if (!res || !res.response) return Observable.throw(new Error('Something went wrong.'))

			return JSON.parse(res.response)
		})
		.map(res => new PostActions.CreatePostSuccess(res))
		.catch(error => of(new PostActions.CreatePostFailure(error)))

	// @Effect({ dispatch: false })
	// CreatePostSuccess$: Observable<Action> = this.actions$
	// 	.ofType(PostActions.CREATE_POST_SUCCESS)
	// 	.do(() => this.navCtrl.parent.select())
}