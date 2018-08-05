import {Injectable} from '@angular/core';
import { NavController } from 'ionic-angular';

import {HomePage} from './../pages/home/home';
import {LoginPage} from './../pages/login/login';
import {SettingsPage} from './../pages/settings/settings';
import {SignupPage} from './../pages/signup/signup';
import {WriterPage} from './../pages/writer/writer';
@Injectable()
export class CommonService {
    
    constructor(private navCtrl: NavController) {
        
    }
    
    public goToPage(pageName: string) {
        switch (pageName) {
            case 'login':
                this.navCtrl.push(LoginPage);
            break;
            case 'signup':
                this.navCtrl.push(SignupPage);
            break;
            case 'home':
                this.navCtrl.push(HomePage);
            break;
            case 'settings':
                this.navCtrl.push(SettingsPage);
            break;
            case 'writer':
                this.navCtrl.push(WriterPage);
            break;
        }
    }
}