import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../authentication/auth.service";
import {Subscription} from "rxjs";
import {UserModel} from "../../../../pages/authentication/model/user.model";

@Component({
  selector: 'app-nav-bar-merchant',
  templateUrl: './nav-bar-merchant.component.html'
})
export class NavBarMerchantComponent implements OnInit, OnDestroy {
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

  private currentUserInfoSubs: Subscription | undefined;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  ngOnDestroy() {
    if(this.currentUserInfoSubs) this.currentUserInfoSubs.unsubscribe();
  }

  private getUserInfo(): void {
    this.currentUserInfoSubs = this._userService.currentUserInfo().subscribe((userInfo: UserModel) => {
      this.userDetails = userInfo;
    })
  }

  public onLogout() {
    localStorage.removeItem('token');
    this._authService.logUserStatus(false);
    this._router.navigate(['account/login']);
  }

}
