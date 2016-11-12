import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { AngularFire } from 'angularfire2';

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

  userProfile: any = null;

  constructor(public navCtrl: NavController, public af: AngularFire, public platform: Platform) {
      //console.log(af.auth.getAuth().facebook.displayName)
      this.af.auth.subscribe( auth => {
        if(auth){
          console.log("User auth:" + auth.facebook);
          this.userProfile = auth.facebook;
        }
      });
  }

  ionViewDidLoad() {
    console.log('Hello UserPage Page');
  }

  logout(){
    this.af.auth.logout();
    //this.navCtrl.popToRoot();
  }

}