import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public authService: AuthService ) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  loginFacebook(){
    this.authService.loginFacebook()
  }

}
