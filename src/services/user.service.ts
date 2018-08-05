import { Injectable } from '@angular/core';

import {User} from './../interfaces/user.interface';

import {DatabaseService} from './database.service';
import {CryptoService} from './crypto.service';

@Injectable()
export class UserService {

  constructor(private db: DatabaseService, private crypto: CryptoService) {
  }

  public isLoggedIn() {
      if(typeof localStorage["user"] === "undefined" || localStorage["user"] === null) {
          return false;
      } else {
          return true;
      }
  }

  public isExists(email: string):Promise<any> {alert(this.crypto.encode(email));
    let p = new Promise((resolve, reject) => {
        this.db.get(this.crypto.encode(email)).then((data) => {console.log("data", data);
            resolve(true);
        }).catch((error) => {console.log("error", error);
            reject(error);
        });
    });
    return p;
  }

  public signup(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.set("lw/user/"+user.email, user).then((data) => {
            console.log(data);
            resolve();
        }).catch((error) => {
            console.log(error);
            reject();
        });
    });
  }
  
}
