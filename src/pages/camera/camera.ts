import { Component, OnInit } from '@angular/core'
import { NavController } from 'ionic-angular'

import { PhotoLibrary } from '@ionic-native/photo-library'

@Component({
	selector: 'page-camera',
	templateUrl: 'camera.html',
})
export class CameraPage implements OnInit {
	cam_child: string = 'camera'
	photos: any[]

	constructor(public navCtrl: NavController,
	            private photoLib: PhotoLibrary,) {

	}

	ngOnInit() {
		this.getPhotosFromGallery()
	}

	getPhotosFromGallery() {
		this.photoLib.requestAuthorization()
			.then(() => {
				this.photoLib.getLibrary()
					.subscribe(
						library => {
							this.photos = library
							console.log(this.photos)
						},
						err => {
							console.log('could not get photos')
						},
						() => {
							console.log('done getting photos')
						},
					)
			})
			.catch(err => console.log('permissions weren\'t granted'))
	}
}
