import { Action } from '@ngrx/store'
import { IPost } from '../../../providers/models/post'

export const CREATE_POST = '[Post] Create Post'
export const CREATE_POST_SUCCESS = '[Post] Create Post Success'
export const CREATE_POST_FAILURE = '[Post] Create Post Failure'

export const FIND_POSTS = '[Post] Find Posts'
export const FIND_POSTS_SUCCESS = '[Post] Find Posts Success'
export const FIND_POSTS_FAILURE = '[Post] Find Posts Failure'

/**
 * find all posts
 */
export class FindPosts implements Action {
	readonly type = FIND_POSTS

	constructor(public payload: any) {
	}
}

export class FindPostsSuccess implements Action {
	readonly type = FIND_POSTS_SUCCESS

	constructor(public payload: IPost[]) {
	}
}

export class FindPostsFailure implements Action {
	readonly type = FIND_POSTS_FAILURE

	constructor(public payload: any) {

	}
}


/**
 * create post
 */
export class CreatePost implements Action {
	readonly type = CREATE_POST

	constructor(public payload: IPost ) {
	}
}

export class CreatePostSuccess implements Action {
	readonly type = CREATE_POST_SUCCESS

	constructor(public payload: IPost) {
	}
}

export class CreatePostFailure implements Action {
	readonly type = CREATE_POST_FAILURE

	constructor(public payload: any) {

	}
}


export type Actions =
	| FindPosts
	| FindPostsSuccess
	| FindPostsFailure

	| CreatePost
	| CreatePostSuccess
	| CreatePostFailure