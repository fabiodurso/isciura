import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, Loading } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { MainPage } from '../main/main';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-login-controller',
  templateUrl: 'login-controller.html'
})
export class LoginControllerPage {

  loader: Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private authService: AuthService ) {}

  ngOnInit() {
    this.presentLoading();
    this.authService.auth.subscribe( auth => {
      if (auth) {
        console.log(auth);
        console.log("autenticate");
        this.showMainPage();
      }else{
        console.log("not autenticate");
        this.showLoginPage();
      }
    });
    //this.showLoginPage();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  showMainPage(){
    this.setRootPage(MainPage);
  }

  showLoginPage(){
    this.setRootPage(LoginPage);
  }

  setRootPage(pageOrViewController: any){
    this.loader.dismiss();
    this.navCtrl.setRoot(pageOrViewController, null, {animate:true});
  }
}
