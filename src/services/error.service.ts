import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ErrorService {

    private toast: any;

    constructor(private toastCtrl: ToastController) {
        this.toast = this.toastCtrl.create({
            message: '',
            duration: 3000,
            position: ''
        });
    }

    public showError(messege: string, type: string, position?: string) {
        if(typeof position === "undefined") {
            position = "middle";
        }
        this.toast = this.toastCtrl.create({
            message: messege,
            duration: 1000,
            position: position
        });
        this.toast.present();
    }



}