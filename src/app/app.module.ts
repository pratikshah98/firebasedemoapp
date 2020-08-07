import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcartComponent } from './addcart/addcart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule, MatFormFieldControl ,MatIconModule,MatRadioModule,MatOptionModule,MatSelectModule} from '@angular/material';
import { ValidateformComponent } from './validateform/validateform.component';
import { VirtuascorlingComponent } from './virtuascorling/virtuascorling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LocationStrategy, PathLocationStrategy} from '@angular/common';
import {environment} from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import '@firebase/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AddcartComponent,
    ValidateformComponent,
    VirtuascorlingComponent,
    LoginformComponent,
    ViewprofileComponent,
    SignupComponent,
    EditprofileComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatOptionModule,
MatSelectModule,
AngularFireModule.initializeApp(environment.firebase, 'newproject'),
AngularFirestoreModule,
AngularFireAuthModule

  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
