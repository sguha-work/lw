import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {
  }

  public isLoggedIn() {
      if(typeof localStorage["user"] === "undefined" || localStorage["user"] === null) {
          return false;
      } else {
          return true;
      }
  }
  
}
