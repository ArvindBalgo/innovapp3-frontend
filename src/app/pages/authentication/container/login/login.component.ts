import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../features/authentication/auth.service";
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted = false;
  public noProfileFound = false;
  private URL_BACKEND = 'https://mauriquotes-backend.herokuapp.com/api';

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _userService: UserService,
  ) {
    this.loginForm = this._fb.group({});
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  public onLogin(): void {
    this.isSubmitted = true;

    if(this.loginForm.valid) {
      const fm = new FormData();

      fm.append('email', this.loginForm.value.userName);
      fm.append('password', this.loginForm.value.password);

      this._authService.logUserStatus(true);

      if (this.loginForm.value.userName.includes('merchant')) {
        this._httpClient.post(`${this.URL_BACKEND}/auth/merchant` , fm ).subscribe((response: any) => {
          this._router.navigate(['projects']);


          const userInfo = {
            id: response.data.id,
            firstName: response.data.name,
            lastName: response.data.lastName,
            userType: 'Merchant'
          }
          this._userService.setCurrentUserInfo(userInfo);

          this.initiateEvent(response.data.id, userInfo);
        });
      } else {
        this._httpClient.post(`${this.URL_BACKEND}/auth/customer` , fm ).subscribe((response: any) => {
          const userInfo = {
            id: response.data.id,
            firstName: response.data.name,
            lastName: response.data.lastName,
            userType: 'Client'
          }
          this._router.navigate(['merchants']);
          this._userService.setCurrentUserInfo(userInfo);
          this.initiateEvent(response.data.id, userInfo);
        });
      }
    }
      // if(this.loginForm.valid) {
    //   this._httpClient.get('/api/signupUsers').subscribe((response: any) => {
    //     const userExist = response.find((user: UserModel) => {
    //       return user.userName === this.loginForm.value.userName && user.password === this.loginForm.value.password;
    //     });
    //     if (userExist) {
    //       this.loginForm.reset();
    //       if (userExist.userType === USER_TYPES.ROLE_CLIENT) {
    //         this._router.navigate(['projects']);
    //       } else {
    //         this._router.navigate(['merchants']);
    //       }
    //       this._authService.logUserStatus(true);
    //       this._userService.setCurrentUserInfo(userExist.id)
    //       this.initiateEvent(userExist.id);
    //     } else {
    //       this.noProfileFound = true;
    //     }
    //   })
    // }

  }

  private initiateEvent(id: number, userInfo: any): void {
    localStorage.setItem('token', id.toString());
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  private setUpLoginForm(): void {
    this.loginForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

}
