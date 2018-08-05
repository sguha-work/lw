import {Injectable} from '@angular/core';

@Injectable()
export class ValidationService {
    
    constructor() {
        
    }

    public isValidEmail(email: string): boolean {
        if(email.trim() == "") {
            return false;
        }
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return true;
    }

    public isValidPassword(password: string): boolean {
        if(password.trim() === "") {
            return false;
        }
        if(password.length<=4) {
            return false;
        }
        return true;
    }
    
}