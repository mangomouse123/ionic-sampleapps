import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];
  constructor(public navCtrl: NavController, public app: App) {

    this.items = [];
    //for(let i = 0; i < 1 ; i++){
      this.items.push({
        text: 'sandy'
      });
    //}
  }

  itemSelected(item){
  this.navCtrl.push(DetailPage, {
    item:item
  });
  }


  logout(){
    //Token API Logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
