import * as UserActions from '../actions/user.actions'
import { Map, Record } from 'immutable'
import { IUser } from '../../../providers/models/user'

export interface UserState extends Map<string, any> {
  data: IUser | null
  payload: any
  error: any
  pending: boolean
}

export const UserStateRecord = Record({
  data: null,
  payload: null,
  error: null,
  pending: false,
})

export const initialUserState: UserState = new UserStateRecord() as UserState

export function userReducer(state = initialUserState, action: UserActions.Actions): UserState {
  switch (action.type) {

    case UserActions.UPDATE_USER: {
      return state.merge({ payload: action.payload, error: null, pending: true }) as UserState
    }

    case UserActions.UPDATE_USER_SUCCESS: {
      return state.merge({ data: action.payload, pending: false }) as UserState
    }

    case UserActions.UPDATE_USER_FAILURE: {
      return state.merge({ error: action.payload, pending: false }) as UserState
    }

    /**
     * Get User Info
     */
    case UserActions.GET_USER_INFO: {
      return state.merge({ payload: action.payload, error: null, pending: true }) as UserState
    }

    case UserActions.GET_USER_INFO_SUCCESS: {
      return state.merge({ data: action.payload, pending: false }) as UserState
    }

    case UserActions.GET_USER_INFO_FAILURE: {
      return state.merge({ error: action.payload, pending: false }) as UserState
    }

    /**
     * Get User Id
     */
    case UserActions.GET_USER_ID: {
      return state.merge({ error: null, pending: true }) as UserState
    }

    case UserActions.GET_USER_ID_SUCCESS: {
      return state.merge({ data: action.payload, pending: false }) as UserState
    }

    case UserActions.GET_USER_ID_FAILURE: {
      return state.merge({ error: action.payload, pending: false }) as UserState
    }

    default: {
      return state
    }

  }
}