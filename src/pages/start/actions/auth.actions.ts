import { Action } from '@ngrx/store'
import { Authenticate, IUser } from '../../../providers/models/user'

export const LOGIN = '[Start] Login'
export const LOGIN_SUCCESS = '[Start] Login Success'
export const LOGIN_FAILURE = '[Start] Login Failure'

export const LOGOUT = '[Start] Logout'
export const LOGOUT_SUCCESS = '[Start] Logout Success'
export const LOGOUT_FAILURE = '[Start] Logout Failure'

export const SIGNUP = '[Start] Sign Up'
export const SIGNUP_SUCCESS = '[Start] Sign Up Success'
export const SIGNUP_FAILURE = '[Start] Sign Up Failure'

export const FORGOT_PASSWORD = '[Start] Forgot Password'
export const FORGOT_PASSWORD_SUCCESS = '[Start] Forgot Password Success'
export const FORGOT_PASSWORD_FAILURE = '[Start] Forgot Password Failure'

/**
 * Login
 */
export class Login implements Action {
	readonly type = LOGIN

	constructor(public payload: Authenticate) {
	}
}

export class LoginSuccess implements Action {
	readonly type = LOGIN_SUCCESS

	constructor(public payload: { token: string, user: IUser }) {
	}
}

export class LoginFailure implements Action {
	readonly type = LOGIN_FAILURE

	constructor(public payload: any) {
	}
}

/**
 * Logout
 */

export class Logout implements Action {
	readonly type = LOGOUT
}

export class LogoutSuccess implements Action {
	readonly type = LOGOUT_SUCCESS
}

export class LogoutFailure implements Action {
	readonly type = LOGOUT_FAILURE

	constructor(public payload: any) {
	}
}

/**
 * Sign up
 */

export class SignUp implements Action {
	readonly type = SIGNUP

	constructor(public payload: Authenticate) {
	}
}

export class SignUpSuccess implements Action {
	readonly type = SIGNUP_SUCCESS

	constructor(public payload: { token: string, user: IUser }) {
	}
}

export class SignUpFailure implements Action {
	readonly type = SIGNUP_FAILURE

	constructor(public payload: any) {
	}
}


/**
 * Forgot password
 */

export class ForgotPassword implements Action {
	readonly type = FORGOT_PASSWORD

	constructor(public payload: { email: string }) {

	}
}

export class ForgotPasswordSuccess implements Action {
	readonly type = FORGOT_PASSWORD_SUCCESS

	constructor(public payload: any) {

	}
}

export class ForgotPasswordFailure implements Action {
	readonly type = FORGOT_PASSWORD_FAILURE

	constructor(public payload: any) {

	}
}

export type Actions =
	| Login
	| LoginSuccess
	| LoginFailure

	| Logout
	| LogoutSuccess
	| LogoutFailure

	| SignUp
	| SignUpSuccess
	| SignUpFailure

	| ForgotPassword
	| ForgotPasswordSuccess
	| ForgotPasswordFailure