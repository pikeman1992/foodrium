import { AfterViewInit, Component, OnInit } from '@angular/core'
import { AlertController, App, Loading, LoadingController, NavController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

import * as AuthActions from '../../actions/auth.actions'
import { AppState } from '../../../../app/interface'
import * as fromAuth from '../../reducers/auth.state'
import { EmailValidator } from '../../../../providers/validators/email.validator'
import { SignupPage } from '../signup/signup'
import { ForgotPasswordPage } from '../forgot-password/forgot-password'
//model
import { IUser } from '../../../../providers/models/user'

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage implements OnInit, AfterViewInit {
	loginForm: FormGroup
	loader: Loading
	user: IUser

	signUpPage = SignupPage
	forgotPasswordPage = ForgotPasswordPage

	constructor(public navCtrl: NavController,
	            private fb: FormBuilder,
	            private store: Store<AppState>,
	            public loadingCtrl: LoadingController,
	            public alertCtrl: AlertController,
	            public app: App) {

		this.presentLoading()
		this.getErrorFromLogin()
	}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ['linh@gmail.com', [Validators.required, EmailValidator]],
			password: ['123', Validators.required],
		})
	}

	ngAfterViewInit() {
		this.loader.dismiss()
	}

	ionViewCanLeave() {
		this.loader.dismiss()
	}

	onSubmit() {
		if (this.loginForm.invalid)
			return false

		const formModel = this.loginForm.value
		this.presentLoading()
		this.store.dispatch(new AuthActions.Login({
			...formModel,
		}))
	}

	getErrorFromLogin() {
		this.store.select(fromAuth.getError).subscribe(
			error => {
				if (error) {
					this.loader.dismiss()
					this.presentAlert(error.get('message'))
				}
			},
		)
	}

	presentAlert(message) {
		const alert = this.alertCtrl.create({
			title: 'Error',
			subTitle: message,
			buttons: ['Dismiss'],
		})
		alert.present()
	}

	//Loading control
	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...',
		})
		this.loader.present()
	}
}
