import { Component, Input } from '@angular/core'
import { ModalController, NavController } from 'ionic-angular'
/*Plugin take photo from device*/
//import { PhotoLibrary } from '@ionic-native/photo-library';
/*Write Post page*/
import { WritePostPage } from '../write-post/write-post'
import { PhotoLibrary } from '@ionic-native/photo-library'


@Component({
	selector: 'page-gallery',
	templateUrl: 'gallery.html',
})
export class GalleryPage {

	@Input() photos: any[]
	modal: any

	constructor(public navCtrl: NavController,
	            public modalCtrl: ModalController,
	            private photoLib: PhotoLibrary,) {

	}

	writePost(selectedImage) {
		console.log('%c selectedImage', 'background: red; color: white', selectedImage)
		this.modal = this.modalCtrl.create(WritePostPage, {selectedImage})
		this.modal.present()
	}
}