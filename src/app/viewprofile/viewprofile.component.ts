import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { SignupService } from '../service/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Users } from '../classes/users';
import {firestore} from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  emailid:string="";
  password:string="";
  name:string="";
  birthdate:Date;
  gender_arr:string[]=["Male","Female"];
  gender:string="Male";
 phoneno:string="";
  user_arr:User[]=[];
  timestamp:Timestamp
emailid1:string="";
id:string="pratik";
users:User={
  user_email:'',
  user_password:'',
  user_name:'',
  user_gender:'',
  user_birth:new Date(),
  user_phone:''
}
user_email:string;
user:User[]=[];
  constructor(private _getuser:LoginService,private _route:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
     //this.emailid1=localStorage.getItem('id');
   //  alert(this.emailid1);
    // //this.emailid1=this._acroute.snapshot.params['emailid'];
    // this._getuser.getuserById(this.emailid1).subscribe(
    //   (data:User[])=>{
    //     console.log(data);
    //     //console.log('this.is');
    //     this.emailid=data[0].emailid;
    //     this.password=data[0].password;
    //     this.name=data[0].name;
    //     this.gender=data[0].gender;
    // this.birthdate=data[0].birthdate;
    //     //this.birthdate=data[0].birthdate;
    //     this.phoneno=data[0].phoneno;

    //       //console.log(data[0].password);
    //   }

    // );
    this._getuser.getItems().subscribe(items=>{
      console.log(items);
      
      this.users.user_email=items[0].user_email;
      this.users.user_phone=items[0].user_phone;
      this.users.user_name=items[0].user_name;
      this.users.user_birth=items[0].user_birth;
      this.users.user_gender=items[0].user_gender;
      this.users.user_password=items[0].user_password;
  console.log(this.users.user_email +items[0].user_email +this.users.user_birth);
    })
      

   
  }
//  addform(f){}
  onaddUser(){
    this._route.navigate(['/editprofile',this.emailid]);
  }

}
