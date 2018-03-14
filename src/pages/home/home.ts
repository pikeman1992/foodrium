import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home_child: string = "latest";
  constructor(public navCtrl: NavController) {

  }

}
