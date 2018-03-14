import { createSelector } from '@ngrx/store'
import { AuthState } from './auth.reducer'
import { AppState } from '../../../app/interface'

export const selectAuth = (state: AppState): AuthState => state.auth


export const getToken = createSelector(
	selectAuth,
	(state: AuthState) => state.token,
)

export const getUser = createSelector(
	selectAuth,
	(state: AuthState) => state.user,
)

export const getError = createSelector(
	selectAuth,
	(state: AuthState) => state.error,
)

export const getPayload = createSelector(
	selectAuth,
	(state: AuthState) => state.payload,
)

export const getPending = createSelector(
	selectAuth,
	(state: AuthState) => state.pending,
)
