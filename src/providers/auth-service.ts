import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Platform } from 'ionic-angular';
import {Facebook} from 'ionic-native';
import { defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods } from 'angularfire2';

declare let firebase: any; // <== THERE IS AN ERROR IN THE .d.ts file

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  private userProfile: any = null;
  public auth: any = null;

  constructor(public http: Http, public af: AngularFire, public platform: Platform) {
    console.log('Hello AuthService Provider');
    this.auth = af.auth;
    this.auth.subscribe( auth => {
        if(auth){
          console.log("User auth:" + auth.facebook);
          this.userProfile = auth.facebook;
        }
    });
  }

  public loginFacebook() {
    console.log(this.platform);
    if (this.platform.is('mobileweb')){
      this.loginFacebookWeb();
    }else{
      this.loginFacebookCordova();
    }
  }

  private loginFacebookWeb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

  private loginFacebookCordova(){
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

  public logout(){
    this.auth.logout();
    this.userProfile = null;
  }

  public getUserProfile(){
    return this.userProfile;
  }

}
