import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../classes/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Users } from '../classes/users';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userCollection: AngularFirestoreCollection<User>;
   users: Observable<User[]>;
   userCollection1: AngularFirestoreCollection<User>;
   users1: Observable<User[]>;
  
   userDoc: AngularFirestoreDocument<any>;
  constructor(public afs: AngularFirestore,private _route:Router) { 
   // this.users=this.afs.collection('users').valueChanges();
   this.userCollection=this.afs.collection('users');
  this.users= this.userCollection.snapshotChanges().map(changes =>{
    return changes.map(a =>{
      const data=a.payload.doc.data() as User;
      data.id=a.payload.doc.id;   
      return data;
    });
  
  })

//console.log(this.users1.va)
  
  }
  // getItems(id)
  // {
  //   return this.users+id;
  // }
  getItems() {
    
   return this.users;

   }
  
  addItem(user:User)
  {

    this.userCollection.add(user);
  }
  logUserIn(email,password)
{
 

    this.userCollection = this.afs.collection('users', ref => ref.where('user_email', '==', email) ) && this.afs.collection('users', ref => ref.where('user_password', '==', password) )
    this.users = this.userCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as User;
        //const id = action.payload.doc.id;
        return { 
          id: action.payload.doc.id,
          user_email: data.user_email,
          user_password: data.user_password,
          user_name:data.user_name,
          user_gender:data.user_gender,
          user_birth:data.user_birth,
          user_phone:data.user_phone
        }
        
      });
      
      

    }); 
    this.users.subscribe(snapshot => {
      if(snapshot.length == 0) {  
        console.log('Email match NOT found')
        alert('Email match NOT found');
        //this.createUserInvite(value);
      } else {
        //console.log('Email match found for user' + snapshot[0].id )
        //alert('Email match found...');
        this._route.navigate(['/viewprofile']);
        localStorage.setItem('id',snapshot[0].id);
        //this.updateUserGym(snapshot[0].id)
      }
    })
   // alert('login succesfull');
    
    //this._route.navigate(['/signup']);

}
updateUser(user:User)
{

  console.log(user);
  //this.userCollection.valueChanges(user);
  this.userDoc=this.afs.doc(`users/${user.id}`);
  this.userDoc.update(user);
  alert('update succesfully..');
  this._route.navigate(['/viewprofile']);
}  
}
