import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {User} from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
private login:string="http://localhost:3000/login";
  constructor(private _http:HttpClient) {


  }
  getLogin(item:User){
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.login,body,{headers:head1});
  }
}
