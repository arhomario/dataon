import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public datas = [];
  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.datas.push({
        align : (i % 2 == 0) ? 'left' : 'right',
        date : "17 Nov",
        name : "Adrien Stone",
        avatar : "avatar.jpg",
        image : "image.jpg",
        body : "If you're offered a seat on a rocket ship, don't ask what seat! Just get on."
      });      
    }
  }
}
