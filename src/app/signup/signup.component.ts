import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Users } from '../classes/users';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailid:string;
  password:string;
  name:string="";
  birthdate:Date;
  gender_arr:string[]=["Male","Female"];
  gender:string="Male";
 phoneno:string;
  user_arr:User[]=[];
users:User={
  user_email:'',
  user_password:'',
  user_name:'',
  user_gender:"Male",
  user_birth:new Date(),
  user_phone:''
}
  constructor(private _userService:LoginService,private _route:Router,private _auth:AuthService,private _authService:AuthService) { }

  ngOnInit() {
    window.scroll(0,0);

  }
  // onaddUser()
  // {
  //   this._signup.addUser(new User(this.emailid,this.password,this.name,this.birthdate,this.gender,this.phoneno)).subscribe(
  //     (data:any)=>{
  //       this.user_arr.push(new User(this.emailid,this.password,this.name,this.birthdate,this.gender,this.phoneno));
  //       console.log(data);
  //       alert('record addee succesfully');
  //       this._route.navigate(['']);
  //     }
  //   );

            onaddUser()
            {
             console.log(this.users.user_gender) 
              this._userService.addItem(this.users); 
              alert('Record Addded Succesfully..');
              this._route.navigate(['/']);
            }
           addform(f){}
    }

    
     /*oncancel(){
       this._route.navigate(['menu/manageuser']);
     }*/
     



