import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
//   private signup:string="http://localhost:3000/signup/";
//   private viewprofile:string="http://localhost:3000/viewprofile/";
//   private editprofile:string="http://localhost:3000/editprofile/";


//   constructor(private _http:HttpClient) { }
//   addUser(item){
//     let body=JSON.stringify(item);
//     let head1=new HttpHeaders().set('Content-Type','application/json');
//     return this._http.post(this.signup,body,{headers:head1});
// }
// getuserById(emailid:string){
//   console.log(emailid);
//   return this._http.get(this.viewprofile+emailid);
//     }

//     updateUser(item:User){
//       let body=JSON.stringify(item);
//       let head1=new HttpHeaders().set('Content-Type','application/json');
//       return this._http.put(this.editprofile+item.emailid,body,{headers:head1});
//   }


}
