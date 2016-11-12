import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import {Facebook} from 'ionic-native';
import { defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';

declare let firebase: any; // <== THERE IS AN ERROR IN THE .d.ts file

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

  userProfile: any = null;

  constructor(public navCtrl: NavController, public af: AngularFire, public platform: Platform) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  loginFacebook() {
    console.log(this.platform);
    if (this.platform.is('mobileweb')){
      this.loginFacebookWeb();
    }else{
      this.loginFacebookCordova();
    }
  }

  loginFacebookWeb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

  loginFacebookCordova(){
    Facebook.login(['email'])
      .then((_response) => {
        console.log("Facebook success: " + JSON.stringify(_response));
        var provider = firebase.auth.FacebookAuthProvider.credential(_response.authResponse.accessToken);
        firebase.auth().signInWithCredential(provider)
          .then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            alert(JSON.stringify(success))
            this.userProfile = success;
          })
          .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
            alert(JSON.stringify(error))
          });
      })
      .catch((_error) => { console.log(_error) })
  }
}
