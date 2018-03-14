import { Component, OnInit } from '@angular/core'
import { App, Loading, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

import { EmailValidator } from '../../../../providers/validators/email.validator'
import * as AuthActions from '../../actions/auth.actions'
import { AppState } from '../../../../app/interface'
import { MatchPassword } from '../../../../providers/validators/password.validator'

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

	signUpForm: FormGroup
	loader: Loading

	constructor(public navCtrl: NavController,
	            public viewCtrl: ViewController,
	            private fb: FormBuilder,
	            private store: Store<AppState>,
	            public loadingCtrl: LoadingController,
	            public app: App) {

	}

	ngOnInit() {
		this.signUpForm = this.fb.group({
			username: ['harry_nguyen', Validators.required],
			email: ['harry@gmail.com', [Validators.required, EmailValidator]],
			password: ['123', Validators.required],
			confirmPassword: ['123', Validators.required],
		}, {
			validator: MatchPassword,
		})
	}

	onSubmit() {
		if (this.signUpForm.invalid) return false
		this.presentLoading()
		const formModel = this.signUpForm.value
		this.store.dispatch(new AuthActions.SignUp(formModel))
	}

	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...',
		})
		this.loader.present()
	}
}
