import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { SignupService } from '../service/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Users } from '../classes/users';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  emailid:string="";
  password:string="";
  name:string="";
  birthdate:Date;
  gender_arr:string[]=["Male","Female"];
  gender:string="Male";
 phoneno:string="";
  user_arr:User[]=[];
emailid1:string="";
//id:string="pratik";
upuser_arr:Users[]=[];
users:User={
  id:'',
  user_email:'',
  user_password:'',
  user_name:'',
  user_gender:'',
  user_birth:new Date(),
  user_phone:''
}
  constructor(private _getuser:LoginService,private _route:Router,private _acroute:ActivatedRoute) { }

  ngOnInit() {
    // this.emailid1=localStorage.getItem('emailid');
    // console.log(this.emailid1);
    // //this.emailid1=this._acroute.snapshot.params['emailid'];
    // this._getuser.getuserById(this.emailid1).subscribe(
    //   (data:User[])=>{
    //     console.log(data);
    //     //console.log('this.is');
    //     this.emailid=data[0].emailid;
    //     this.password=data[0].password;
    //     this.name=data[0].name;
    //     this.gender=data[0].gender;
    //     //this.birthdate=data[0].birthdate;
    // this.birthdate=data[0].birthdate;
    //     this.phoneno=data[0].phoneno;

    //       //console.log(data[0].password);
      //}

    //);
    this._getuser.getItems().subscribe(items=>{
      console.log(items);
      this.users.id=items[0].id;
      this.users.user_email=items[0].user_email;
      this.users.user_phone=items[0].user_phone;
      this.users.user_name=items[0].user_name;
      this.users.user_birth=items[0].user_birth;
      this.users.user_gender=items[0].user_gender;
      this.users.user_password=items[0].user_password;
  console.log(this.users.user_email +items[0].user_email + this.users.id + items[0].user_birth);
    })
    

  }
  onUpdate(){
//     console.log(this.name);
//     console.log(this.phoneno);
//     console.log(this.gender);
//     console.log(this.password);
//     console.log(this.birthdate);

//   this._getuser.updateUser(new User(this.emailid,this.password,this.name,this.birthdate,this.gender,this.phoneno)).subscribe(
//     (data:any)=>{
//         this.upuser_arr.push(new User(this.emailid,this.password,this.name,this.birthdate,this.gender,this.phoneno));
//         console.log(data);
//         alert("record updated succesfully");
//         this._route.navigate(['/viewprofile']);

//   }
// );

console.log(this.users.user_birth);
this._getuser.updateUser(this.users);
}
  addform(f){}

}
