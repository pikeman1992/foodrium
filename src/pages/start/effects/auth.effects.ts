import { Actions, Effect } from '@ngrx/effects'
import { AuthService } from '../../../providers/services/auth.service'
import * as AuthActions from '../actions/auth.actions'
import { Observable } from 'rxjs/Observable'
import { Action } from '@ngrx/store'
import { of } from 'rxjs/observable/of'
import { Injectable } from '@angular/core'
import { App, NavController } from 'ionic-angular'
import { TabsPage } from '../../tabs/tabs'
import { LoginPage } from '../components/login/login'

@Injectable()
export class AuthEffects {
	constructor(private actions$: Actions,
		private authService: AuthService,
		public app: App) {
	}

	//Login effect
	@Effect()
	Login$: Observable<Action> = this.actions$
		.ofType(AuthActions.LOGIN)
		.map((action: AuthActions.Login) => action.payload)
		.exhaustMap(auth => this.authService.login(auth))
		.flatMap((res: any) => Observable.forkJoin([
			Promise.resolve(res),
			this.authService.setToken(res.token),
			this.authService.setUser(res.user),
		]))
		.map(res => new AuthActions.LoginSuccess(res[0]))
		.catch(error => of(new AuthActions.LoginFailure(error)))

	@Effect({ dispatch: false })
	LoginSuccess$: Observable<Action> = this.actions$
		.ofType(AuthActions.LOGIN_SUCCESS)
		.do(() => this.app.getRootNav().setRoot(TabsPage))


	//Logout effect
	@Effect()
	Logout$: Observable<Action> = this.actions$
		.ofType(AuthActions.LOGOUT)
		.exhaustMap(val => this.authService.logout())
		.flatMap(val => this.authService.clearStorage())
		.map((val) => new AuthActions.LogoutSuccess())
		.catch(error => of(new AuthActions.LogoutFailure(error)))

	@Effect({ dispatch: false })
	LogoutSuccess$: Observable<Action> = this.actions$
		.ofType(AuthActions.LOGOUT_SUCCESS)
		.do(() => this.app.getRootNav().setRoot(LoginPage))

	//Sign Up effect
	@Effect()
	signUp$: Observable<Action> = this.actions$
		.ofType(AuthActions.SIGNUP)
		.map((action: AuthActions.SignUp) => action.payload)
		.exhaustMap(auth => this.authService.signup(auth))
		.flatMap((res: any) => Observable.forkJoin([
			Promise.resolve(res),
			this.authService.setToken(res.token),
			this.authService.setUser(res.user),
		]))
		.map(res => new AuthActions.SignUpSuccess(res[0]))
		.catch(error => of(new AuthActions.SignUpFailure(error)))

	@Effect({ dispatch: false })
	SignUpSuccess$: Observable<Action> = this.actions$
		.ofType(AuthActions.SIGNUP_SUCCESS)
		.do(() => this.app.getActiveNav().setRoot(TabsPage))


	//Forgot Password Effect
	@Effect()
	ForgotPassword$: Observable<Action> = this.actions$
		.ofType(AuthActions.FORGOT_PASSWORD)
		.map((action: AuthActions.ForgotPassword) => action.payload)
		.exhaustMap((auth) => this.authService.forgotPassword(auth))
		.map((res) => new AuthActions.ForgotPasswordSuccess(res))
		.catch(error => of(new AuthActions.ForgotPasswordSuccess(error)))
}