import { Component } from '@angular/core';
import {AuthService} from "./features/authentication/auth.service";
import {UserService} from "./shared/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'innovapp3-frontend';

  constructor(
    private _authService: AuthService,
    private _userService: UserService
  ) {}


  ngOnInit(): void {
    this.checkUserLoginStatus();
  }

  private checkUserLoginStatus(): void {
    const getUserToken = localStorage.getItem('token');
    if (getUserToken) {
      this._authService.logUserStatus(true);
      this._userService.setCurrentUserInfo(parseInt(getUserToken))
    }
  }

}


