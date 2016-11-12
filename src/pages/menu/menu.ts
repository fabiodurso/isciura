import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  menuItems: MenuItem[] = [];

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.menuItems = [
      new MenuItem("matriciana", "pasta romana", "", 5),
      new MenuItem("carbonara", "pasta buonissima romana", "", 5)
    ]
  }

}

export class MenuItem {
  constructor(public title: String, public description: String, public imageURL: String, public rate: Number){
    this.imageURL = "https://source.unsplash.com/random/100x100";
  }
}
