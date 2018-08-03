import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { CloudTabDefaultPagePage } from '../cloud-tab-default-page/cloud-tab-default-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = SettingsPage;
  tab3Root: any = CloudTabDefaultPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
