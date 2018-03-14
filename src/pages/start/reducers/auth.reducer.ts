import * as AuthActions from '../actions/auth.actions'
import { Authenticate, IUser } from '../../../providers/models/user'
import { Map, Record } from 'immutable'

export interface AuthState extends Map<string, any> {
	token: string
	data: Authenticate | any
	user: IUser | null
	payload: any
	error: any
	pending: boolean
}

export const AuthStateRecord = Record({
	token: '',
	data: null,
	user: Map({}),
	payload: null,
	error: null,
	pending: false,
})

export const initialAuthState: AuthState = new AuthStateRecord() as AuthState

export function authReducer(state = initialAuthState, action: AuthActions.Actions): AuthState {
	switch (action.type) {

		/**
		 * Login
		 */
		case AuthActions.LOGIN: {
			return state.merge({ data: action.payload, error: null, pending: true }) as AuthState
		}

		case AuthActions.LOGIN_SUCCESS: {
			return state.merge({ ...action.payload, pending: false }) as AuthState
		}

		case AuthActions.LOGIN_FAILURE: {
			return state.merge({ error: action.payload, pending: false }) as AuthState
		}

		case AuthActions.LOGOUT: {
			return initialAuthState
		}

		/**
		 * Sign Up
		 */

		case AuthActions.SIGNUP: {
			return state.merge({ data: action.payload, error: null, pending: true }) as AuthState
		}

		case AuthActions.SIGNUP_SUCCESS: {
			return state.merge({ ...action.payload, pending: false }) as AuthState
		}

		case AuthActions.SIGNUP_FAILURE: {
			return state.merge({ error: action.payload, pending: false }) as AuthState
		}

		/**
		 * Get Password
		 */

		case AuthActions.FORGOT_PASSWORD: {
			return state.merge({ data: action.payload, error: null, pending: true }) as AuthState
		}

		case AuthActions.FORGOT_PASSWORD_SUCCESS: {
			return state.merge({ payload: action.payload, pending: false }) as AuthState
		}

		case AuthActions.FORGOT_PASSWORD_FAILURE: {
			return state.merge({ payload: null, error: action.payload, pending: false }) as AuthState
		}

		default: {
			return state
		}
	}
}