import { Component } from '@angular/core';
import { App, NavController, MenuController } from 'ionic-angular';

//import { UserPage } from '../user/user';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public app: App, public menuCtrl: MenuController, public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'User Page', component: HomePage },
      { title: 'Home Page', component: HomePage }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.app.getRootNav().setRoot(page.component);
  }
}