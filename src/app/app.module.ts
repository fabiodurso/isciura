import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

/*
* PAGE
*/
import { LoginControllerPage } from '../pages/login-controller/login-controller';

import { MainPage } from  '../pages/main/main';
import { LoginPage } from '../pages/login/login';

import { MenuPage } from  '../pages/menu/menu';
import { UserPage } from  '../pages/user/user';
import { HomePage } from  '../pages/home/home';
import { TabsPage } from  '../pages/tabs/tabs';

/*
* PROVIDER
*/

import { AuthService } from '../providers/auth-service';
import { AngularFireModule } from 'angularfire2'; //Firebase


// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCRMXmxqiV0MXIGqN5MzPzLN7xKAxpQh5Y",
  authDomain: "ishura-4e54f.firebaseapp.com",
  databaseURL: "https://ishura-4e54f.firebaseio.com",
  storageBucket: "ishura-4e54f.appspot.com",
  messagingSenderId: "380727677323"
};

@NgModule({
  declarations: [
    MyApp,

    LoginControllerPage,
    MainPage,
    LoginPage,

    MenuPage,
    HomePage,
    TabsPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    LoginControllerPage,
    MainPage,
    LoginPage,

    MenuPage,
    HomePage,
    TabsPage,
    UserPage
  ],
  providers: [AuthService]
})
export class AppModule {}
