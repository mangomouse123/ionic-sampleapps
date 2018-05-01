import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData: any;
  userData = {"username":"", "password":"", "email":"", "name":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public authSerive: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

signup(){
  this.authSerive.postData(this.userData, "signup").then((result) =>{
  //this.responseData = result;
  //console.log(this.responseData);
  this.navCtrl.push(TabsPage);
  //localStorage.setItem('userData', JSON.stringify(this.responseData))
}, (err) =>{
  //some alert
  this.navCtrl.push(TabsPage);
});
}
//}

login(){
  this.navCtrl.push(LoginPage);
}
}
