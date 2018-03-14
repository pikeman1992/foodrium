import { Action } from '@ngrx/store'
import { IUser } from '../../../providers/models/user'

export const UPDATE_USER = '[Profile] Update User'
export const UPDATE_USER_SUCCESS = '[Profile] Update User Success'
export const UPDATE_USER_FAILURE = '[Profile] Update User Failure'

export const GET_USER_INFO = '[Profile] Get User Info'
export const GET_USER_INFO_SUCCESS = '[Profile] Get User Info Success'
export const GET_USER_INFO_FAILURE = '[Profile] Get User Info Failure'

export const GET_USER_ID = '[Profile] Get User Id'
export const GET_USER_ID_SUCCESS = '[Profile] Get User Id Success'
export const GET_USER_ID_FAILURE = '[Profile] Get User Id Failure'

/**
 * Update User
 */
export class UpdateUser implements Action {
  readonly type = UPDATE_USER

  constructor(public payload: any) {
  }
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS

  constructor(public payload: IUser) {

  }
}

export class UpdateUserFailure implements Action {
  readonly type = UPDATE_USER_FAILURE

  constructor(public payload: any) {

  }
}

/**
 * Get User Info
 */
export class GetUserInfo implements Action {
  readonly type = GET_USER_INFO

  constructor(public payload: string) {

  }
}

export class GetUserInfoSuccess implements Action {
  readonly type = GET_USER_INFO_SUCCESS

  constructor(public payload: IUser) {

  }
}

export class GetUserInfoFailure implements Action {
  readonly type = GET_USER_INFO_FAILURE

  constructor(public payload: any) {

  }
}

/**
 * Get User Id
 */
export class GetUserId implements Action {
  readonly type = GET_USER_ID

}

export class GetUserIdSuccess implements Action {
  readonly type = GET_USER_ID_SUCCESS

  constructor(public payload: IUser) {

  }
}

export class GetUserIdFailure implements Action {
  readonly type = GET_USER_ID_FAILURE

  constructor(public payload: any) {

  }
}

export type Actions =
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFailure

  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoFailure

  | GetUserId
  | GetUserIdSuccess
  | GetUserIdFailure