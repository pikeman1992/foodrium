import { Component, OnInit } from '@angular/core'
import { AlertController, Loading, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'

import * as PostActions from '../../actions/post.actions'
import { AppState } from '../../../../app/interface'
import * as fromPost from '../../reducers/post.state'


@Component({
	selector: 'page-write-post',
	templateUrl: 'write-post.html',
})
export class WritePostPage implements OnInit {
	selectedImage: any
	postForm: FormGroup
	loader: Loading

	constructor(public navCtrl: NavController,
	            public navParams: NavParams,
	            public viewCtrl: ViewController,
	            private fb: FormBuilder,
	            private store: Store<AppState>,
	            private alertCtrl: AlertController,
	            private loadingCtrl: LoadingController) {
		// this.getPayload()

		this.selectedImage = this.navParams.get('selectedImage')
	}

	ngOnInit() {
		this.postForm = this.fb.group({
			description: ['Bánh Mì Sài Gòn', Validators.required],
			location: ['123 đương 50', Validators.required],
		})
	}

	onSubmit() {
		if (this.postForm.invalid)
			return false

		this.presentLoading()
		const formModel = this.postForm.value
		
		this.store.dispatch(new PostActions.CreatePost({
			file: this.selectedImage,
			...formModel
		}))
	}

	onBack() {
		this.viewCtrl.dismiss()
	}

	ionViewCanLeave() {
		this.loader.dismiss()
	}

	dismissLoaderPost(){
		this.store.select(fromPost.getPending).subscribe(
			pending => {
				if(!pending){
					this.loader.dismiss();
				}
			}
		)
	}

	getPayload() {
		this.store.select(fromPost.getPayload).subscribe(
			payload => {
				console.log('%c payload.size', 'background: red; color: white', payload.size)
				if (payload.length > 0) {
					this.loader.dismiss()
					this.presentAlert(`Create new post successfully.`)
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
