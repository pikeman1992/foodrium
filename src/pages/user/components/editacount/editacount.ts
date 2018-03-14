import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController, Loading, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';
import { env } from '../../../../environments/env'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { UserService } from '../../../../providers/services/user.service'

import * as fromUser from '../../reducers/user.state'
import * as UserActions from '../../actions/user.actions'

import { AppState } from '../../../../app/interface'
import { Store } from '@ngrx/store'
import { Alert } from 'ionic-angular/components/alert/alert';


@Component({
  selector: 'page-editacount',
  templateUrl: 'editacount.html'
})
export class EditAcountPage implements OnInit, AfterViewInit {

  gender = "female";
  userId: string;
  userData: any = null;
  cdnURL = env.CDN_URL;
  userForm: FormGroup = null;
  loader: Loading;
  alertDialog: Alert;

  constructor(public navCtrl: NavController,
    private store: Store<AppState>,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    private fb: FormBuilder,
    public userService: UserService,
    public alertCtrl: AlertController) {

    this.presentLoading()
    this.userId = this.navParams.get('data');
    console.log('edit', this.userId);
    this.store.dispatch(new UserActions.GetUserInfo(this.userId));
    this.getUserInfo();
  }

  onBack() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  getUserInfo() {

    this.store.select(fromUser.getData).subscribe(
      data => {
        if (data) {
          console.log('from server', (data as any).toJSON());
          this.userData = (data as any).toJSON();
          this.userForm = this.fb.group({
            fullName: [this.userData.fullName],
            userName: [this.userData.username, Validators.required],
            website: [this.userData.website],
            bio: [this.userData.bio],
            phoneNumber: [this.userData.phoneNumber],
            gender: [this.userData.gender],
          })
        }
        this.loader.dismiss();
      }
    )
  }

  onSubmit() {
    if (this.userForm.invalid)
      return false


    const formModel = this.userForm.value;
    const userId = this.userId;
    this.presentLoading();
    this.store.dispatch(new UserActions.UpdateUser({
      ...formModel, userId
    }))
  }

  showSuccessAlert() {
    this.alertDialog = this.alertCtrl.create({
      title: 'Edit Success!',
      buttons: ['OK']
    });
    this.alertDialog.present();
  }

  getSuccessSave() {
    this.store.select(fromUser.getPending).subscribe(
      pending => {
        if (!pending) {
          this.store.select(fromUser.getError).subscribe(
            error =>{
              if(error == null){
                this.loader.dismiss();
              }
            }
          )
        }
      },
    )
  }

  //Loading control
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
    })
    this.loader.present()
  }

}
