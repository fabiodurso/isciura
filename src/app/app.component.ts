import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, LoadingController, Loading } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AuthService } from '../providers/auth-service';

import { LoginPage } from '../pages/login/login';

import { UserPage } from  '../pages/user/user';
import { HomePage } from  '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage = null;
  pages: Array<{icon: string, title: string, component: any}>;

  loader: Loading;
  userProfile = null;

  constructor(public platform: Platform, public loadingCtrl: LoadingController, private authService: AuthService, public menuCtrl: MenuController) {

    this.presentLoading();
    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'restaurant', title: 'Il menù di oggi', component: UserPage },
      { icon: 'basket', title: 'Menù completo', component: HomePage }
    ];

    this.authService.auth.subscribe( auth => {
      this.userProfile = this.authService.getUserProfile();
      this.initializeApp();

      if (auth) {
        this.userProfile = authService.getUserProfile();
        this.showMainPage();
      }else{
        this.showLoginPage();
      }
    });
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.setRootPage(page.component, false);
  }

  private showMainPage(){
    this.menuCtrl.enable(true)
    this.setRootPage(UserPage, true);
  }

  private showLoginPage(){
    this.menuCtrl.enable(false);
    this.setRootPage(LoginPage, true);
  }

  private setRootPage(pageOrViewController: any, animate: boolean){
    this.loader.dismiss();
    this.rootPage = pageOrViewController;
    this.nav.setRoot(pageOrViewController, null, {animate:animate});
  }

  logout(){
    this.authService.logout();
  }

}
