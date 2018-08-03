import {Injectable} from '@angular/core';
//import { AngularFireDatabase } from 'angularfire2/database';
import { Events } from 'ionic-angular';

declare var firebase;
//firebase.database()
@Injectable()
export class DatabaseService {
    private db: any;
    constructor(private events: Events) {
        this.db = firebase.database();
    }

    public set(key: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.ref('/'+key).set(data).then(() => {
                resolve();
            }).catch((error) => {
                reject();
            });
       });
    }

    public update(key: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.ref('/'+key).update(data).then(() => {
                resolve();
            }).catch((error) => {
                reject();
            });
       });
    }

    public get(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.ref('/'+key).once('value').then((data) => {
                resolve(data.val());
            }).catch((error) => {
                reject(error);
            });
        });
    }
}