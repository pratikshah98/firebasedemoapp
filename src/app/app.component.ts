import { Component } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   
  /*students;
  constructor(){
    this.students=Array(100).fill(1).map(_=>{
      return{
        name:faker.name.findName(),
        email:faker.internet.email()
      };
});
  }*/
}
