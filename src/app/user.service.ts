import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }


  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser>{
    return this.db.object('/users/'+ uid);
  }
 
}
