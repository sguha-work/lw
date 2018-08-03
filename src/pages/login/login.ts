import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import {UserService} from './../../services/user.service';
import {ValidationService} from './../../services/validation.service';
import {ErrorService} from './../../services/error.service';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public model: any;
  
  constructor(public navCtrl: NavController, private user: UserService, private toaster: ToastController, private validate: ValidationService, private errorService: ErrorService) {
    this.model = {};
    this.model.email = "";
    this.model.password = "";
  }

  public login() {
    if(!this.validate.isValidEmail(this.model.email)) {
      this.errorService.showError("Invalid email", "error");
      return false;
    }
  }
  
}
