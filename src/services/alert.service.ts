import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AlertService {

    private toast: any;

    constructor(private toastCtrl: ToastController) {
        this.toast = this.toastCtrl.create({
            message: '',
            duration: 3000,
            position: ''
        });
    }

    public showAlert(messege: string, type: string, position?: string) {
        if(typeof position === "undefined") {
            position = "middle";
        }
        let cssClass: string;
        if(type === "error") {
            cssClass = "toasterError";
        } else if(type === "success") {
            cssClass = "toasterSuccess";
        } else {
            cssClass = "";
        }
        this.toast = this.toastCtrl.create({
            message: messege,
            duration: 1000,
            position: position,
            cssClass: cssClass
        });
        this.toast.present();
    }



}