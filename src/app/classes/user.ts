import { Timestamp } from 'rxjs';

export class User{
  constructor(
    public id?:string,
    public user_email?:string,
    public user_password?:string,
    public user_name?:string,
    public user_gender?:string,
    public user_birth?:Date,
    public user_phone?:string,
   ){}
}
