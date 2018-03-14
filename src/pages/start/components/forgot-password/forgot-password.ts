import { Component, OnInit } from '@angular/core'
import { AlertController, App, Loading, LoadingController, NavController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

import * as AuthActions from '../../actions/auth.actions'
import { AppState } from '../../../../app/interface'
import * as fromAuth from '../../reducers/auth.state'
import { EmailValidator } from '../../../../providers/validators/email.validator'

@Component({
	selector: 'page-forgot-password',
	templateUrl: 'forgot-password.html',
})

export class ForgotPasswordPage implements OnInit {
	loader: Loading

	forgetPassForm: FormGroup

	constructor(public navCtrl: NavController,
	            public viewCtrl: ViewController,
	            public alertCtrl: AlertController,
	            public loadingCtrl: LoadingController,
	            private fb: FormBuilder,
	            private store: Store<AppState>,) {
		this.handleAlertSuccess()
	}

	ngOnInit() {
		this.forgetPassForm = this.fb.group({
			email: ['linrium@gmail.com', [Validators.required, EmailValidator]],
		})
	}

	onSubmit() {
		if (this.forgetPassForm.invalid)
			return false

		this.presentLoading()
		const formModel = this.forgetPassForm.value
		this.store.dispatch(new AuthActions.ForgotPassword(formModel))
	}

	handleAlertSuccess() {
		this.store.select(fromAuth.getPayload).subscribe(
			error => {
				if (error) {
					this.loader.dismiss()
					this.presentAlert(`Send mail successfully. Please check you email. If you don't see mail in the inbox. Please check in your spam inbox.`)
				}
			},
		)
	}

	presentAlert(message) {
		const alert = this.alertCtrl.create({
			title: 'Success',
			subTitle: message,
			buttons: ['Dismiss'],
		})
		alert.present()
	}

	presentLoading() {
		this.loader = this.loadingCtrl.create({
			content: 'Please wait...',
		})
		this.loader.present()
	}
}