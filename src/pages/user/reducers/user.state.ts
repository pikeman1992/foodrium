import { createSelector } from '@ngrx/store'
import { UserState } from './user.reducers'
import { AppState } from '../../../app/interface'


export const selectUser = (state: AppState): UserState => state.user


export const getData = createSelector(
  selectUser,
  (state: UserState) => state.data,
)

export const getPayload = createSelector(
  selectUser,
  (state: UserState) => state.payload,
)

export const getPending = createSelector(
  selectUser,
  (state: UserState) => state.pending,
)

export const getError = createSelector(
  selectUser,
  (state: UserState) => state.error,
)