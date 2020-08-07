import { Component, OnInit } from '@angular/core';
import {User} from '../classes/user';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';
import { AuthService } from '../auth/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  user_email:string="";
  user_password:string="";

  constructor(private _route:Router,private _user:UserserviceService,private _loginService:LoginService) { }
  onSubmit()
  {
    //alert('hello');
    //alert(this.user_email + ' ' + this.user_password);
        this._loginService.logUserIn(this.user_email,this.user_password);

  //   this._user.getLogin(new User(this.emailid,this.password)).subscribe((data: any) => {
  //     console.log(data);

  //     if (data==null) {
  //       console.log(this.emailid);
  //       console.log(this.password);
  //       alert("The Email_Id Or the Password is wrong");

  //     }
  //       else{
  //        //this.emailid=data[0].emailid;
  //       // this.password=data[0].password;
  //       localStorage.setItem("emailid",this.emailid);

  //       this._route.navigate(["/viewprofile"]);

  //     }
  //   }

  // );

  }

  addform(f){}

  ngOnInit() {
 
  }

}
