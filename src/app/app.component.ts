import { Component } from '@angular/core';
import {AuthService} from "./features/authentication/auth.service";
import {UserService} from "./shared/services/user.service";
import {UserModel} from "./pages/authentication/model/user.model";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'innovapp3-frontend';

  public isUserLoggedIn = false;
  public userDetails: UserModel = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: '',
    phone: '',
    id: 0,
    userType: '',
  };

  constructor(
    private _authService: AuthService,
    private _userService: UserService
  ) {}


  ngOnInit(): void {
    this.checkUserLoginStatus();
    this.getUserInfo();
    this.verifyUserStatus();
  }

  private checkUserLoginStatus(): void {
    const getUserToken = localStorage.getItem('token');
    if (getUserToken) {
      this._authService.logUserStatus(true);
      // this._userService.setCurrentUserInfo(parseInt(getUserToken))
    }
  }

  private getUserInfo(): void {
    this._userService.currentUserInfo()
      .subscribe((userInfo: any) => {
        console.log('userInfo', userInfo);
      this.userDetails = userInfo;
    })
  }

  private verifyUserStatus(): void {
    this._authService.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

}


