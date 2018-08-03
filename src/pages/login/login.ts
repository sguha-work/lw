import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {UserService} from './../../services/user.service';
import {ValidationService} from './../../services/validation.service';
import {AlertService} from './../../services/alert.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public model: any;
  
  constructor(public navCtrl: NavController, private user: UserService, private toaster: ToastController, private validate: ValidationService, private alertService: AlertService) {
    this.model = {};
    this.model.email = "";
    this.model.password = "";
  }

  public login() {
    if(!this.validate.isValidEmail(this.model.email)) {
      this.alertService.showAlert("Invalid email", "error");
      return false;
    }
    if(!this.validate.isValidPassword(this.model.password)) {
      this.alertService.showAlert("Invalid password", "error");
      return false;
    }
    this.user.isExists(this.model.email).then(() => {
      // check password
    }).catch(() => {
      this.alertService.showAlert("User doesn't exists", "error");
    });
  }
  
}
