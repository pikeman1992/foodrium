import { createSelector } from '@ngrx/store';
import { PostState } from './post.reducer';
import { AppState } from '../../../app/interface';

export const selectPost = (state: AppState): PostState => state.post

export const getPosts = createSelector(
	selectPost,
	(state: PostState) => state.posts,
)

export const getPayload = createSelector(
  selectPost,
  (state: PostState) => state.payload,
)

export const getError = createSelector(
  selectPost,
  (state: PostState) => state.error,
)

export const getPending = createSelector(
  selectPost,
  (state: PostState) => state.pending,
)