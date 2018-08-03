import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WriterPage } from '../pages/writer/writer';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {DatabaseService} from './../services/database.service';
import {UserService} from './../services/user.service';
import {ErrorService} from './../services/error.service';
import {ValidationService} from './../services/validation.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    WriterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    WriterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseService,
    UserService,
    ErrorService,
    ValidationService
  ]
})
export class AppModule {}