import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, Loading } from 'ionic-angular';
import { UserPage } from '../user/user';
import { LoginPage } from '../login/login';

import { AngularFire } from 'angularfire2';


@Component({
  selector: 'page-login-controller',
  templateUrl: 'login-controller.html'
})
export class LoginControllerPage {

  loader: Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public af: AngularFire) {
    //this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {
    this.presentLoading();
    this.af.auth.subscribe( auth => {
      if (auth) {
        console.log(auth);
        console.log("autenticate");
        this.showUserPage();
      }else{
        console.log("not autenticate");
        this.showLoginPage();
      }
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  showUserPage(){
    this.setRootPage(UserPage);
  }

  showLoginPage(){
    this.setRootPage(LoginPage);
  }

  setRootPage(pageOrViewController: any){
    this.loader.dismiss();
    this.navCtrl.setRoot(pageOrViewController, null, {animate:true});
  }
}
