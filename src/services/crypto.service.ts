import {Injectable} from '@angular/core';

@Injectable()
export class CryptoService {
    
    constructor() {
        
    }

   public encode(text: string): string {
    return btoa(text);
   }
   
   public decode(text: string): string {
    return atob(text);
   }
    
}