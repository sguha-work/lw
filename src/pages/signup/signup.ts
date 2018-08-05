import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import {UserService} from './../../services/user.service';
import {CryptoService} from './../../services/crypto.service';
import {AlertService} from './../../services/alert.service';
import {ValidationService} from './../../services/validation.service'

import {User} from './../../interfaces/user.interface';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  private name: string;
  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, private userService: UserService, private crypto: CryptoService, private alert: AlertService, private validate: ValidationService) {
    this.name = "";
    this.email = "";
    this.password = "";
  }

  public join() {
    if(!this.validate.isValidEmail(this.email)) {
      this.alert.showAlert("Invalid Email", "error");
      return false;
    }
    if(!this.validate.isValidPassword(this.password)) {
      this.alert.showAlert("Invalid Password", "error");
      return false;
    }
    let userObject: User;
    userObject = {} as User;
    userObject.name = this.name;
    userObject.email = this.crypto.encode(this.email);
    userObject.password = this.crypto.encode(this.password);
    userObject.joinedon = Date.now().toString();
    userObject.isVerified = false;
    this.userService.signup(userObject).then(() => {
      this.alert.showAlert("Signup done, go to login page to login", "success");
    }).catch(() => {
      this.alert.showAlert("Error occured, try again latter", "error");
    });
  }
  
  public goToLogin(params){
    this.navCtrl.push(LoginPage);
  }
}
