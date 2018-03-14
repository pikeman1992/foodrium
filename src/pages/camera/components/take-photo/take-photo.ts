import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

/*Camera plugin*/
import { Camera, CameraOptions } from '@ionic-native/camera';

/*Write Post page*/
import { WritePostPage } from '../write-post/write-post';

@Component({
  selector: 'page-take-photo',
  templateUrl: 'take-photo.html'
})
export class TakePhotoPage {

  public photos: any;
  public base64Image: string;
  public modal: any;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
	    console.log(imageData)
      // If it's base64:
      // this.base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.modal = this.modalCtrl.create(WritePostPage, { selectedImage: this.base64Image });
      // this.modal.present();

    }, (err) => {
      console.log("something happen", err);
    });

  }

}
