import * as PostActions from '../actions/post.actions'
import { List, Map, Record } from 'immutable'
import { IPost } from '../../../providers/models/post'

export interface PostState extends Map<string, any> {
	data: any
	posts: List<IPost>
	payload: any
	error: any
	pending: boolean
}

export const PostStateRecord = Record({
	data: null,
	posts: List([]),
	payload: null,
	error: null,
	pending: false,
})

export const initialPostState: PostState = new PostStateRecord() as PostState

export function postReducer(state = initialPostState, action: PostActions.Actions): PostState {
	switch (action.type) {
		/**
		 * find post
		 */
		case PostActions.FIND_POSTS: {
			return state.merge({data: action.payload, error: null, pending: true}) as PostState
		}

		case PostActions.FIND_POSTS_SUCCESS: {
			return state.merge({
				payload: action.payload,
				posts: action.payload,
				pending: false,
			}) as PostState
		}

		case PostActions.FIND_POSTS_FAILURE: {
			return state.merge({error: action.payload, pending: false}) as PostState
		}

		/**
		 * create post
		 */
		case PostActions.CREATE_POST: {
			return state.merge({data: action.payload, error: null, pending: true}) as PostState
		}

		case PostActions.CREATE_POST_SUCCESS: {
			return state.merge({
				payload: action.payload,
				posts: state.posts.unshift(action.payload),
				pending: false,
			}) as PostState
		}

		case PostActions.CREATE_POST_FAILURE: {
			return state.merge({error: action.payload, pending: false}) as PostState
		}

		default: {
			return state
		}
	}
}