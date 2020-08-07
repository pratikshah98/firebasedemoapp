import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SignupComponent } from './signup/signup.component';
import{EditprofileComponent}from './editprofile/editprofile.component';
import { VirtuascorlingComponent } from './virtuascorling/virtuascorling.component';
const routes: Routes = [
  {path:'',component:LoginformComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'signup',component:SignupComponent},
  {path:'editprofile/:id',component:EditprofileComponent},
  {path:'virtual',component:VirtuascorlingComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
