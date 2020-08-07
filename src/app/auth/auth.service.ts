import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  public loggedIn = false;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
    
  }

  logUserIn(email, pass) {
    
  
}

}
