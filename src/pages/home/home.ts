import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WriterPage } from '../writer/writer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToWriter(params){
    if (!params) params = {};
    this.navCtrl.push(WriterPage);
  }
}
