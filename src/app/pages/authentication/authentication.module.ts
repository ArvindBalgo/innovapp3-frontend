import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./container/signup/signup.component";
import {AuthenticationComponent} from "./container/authentication/authentication.component";
import {LoginComponent} from "./container/login/login.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
})
export class AuthenticationModule {

}
