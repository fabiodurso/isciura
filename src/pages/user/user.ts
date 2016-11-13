import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  userProfile: any = this.authService.getUserProfile();

  constructor(public navCtrl: NavController, private authService: AuthService) {}

  ionViewDidLoad() {
    console.log('Hello UserPage Page');
    //this.userProfile = this.authService.getUserProfile();
  }

  logout(){
    this.authService.logout();
  }

}