import { Injectable } from '@angular/core';

import {DatabaseService} from './database.service';

@Injectable()
export class UserService {

  constructor(private db: DatabaseService) {
  }

  public isLoggedIn() {
      if(typeof localStorage["user"] === "undefined" || localStorage["user"] === null) {
          return false;
      } else {
          return true;
      }
  }

  public isExists(email: string):Promise<any> {
    let p = new Promise((resolve, reject) => {
        this.db.get(email).then((data) => {
            resolve(true);
        }).catch((error) => {
            reject(error);
        });
    });
    return p;
  }
  
}
