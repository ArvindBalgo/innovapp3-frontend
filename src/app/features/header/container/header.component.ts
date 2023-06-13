import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from "../../../pages/authentication/model/user.model";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
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

  private currentUserInfoSubs: Subscription | undefined;
  private isUserLoggedInSubs: Subscription | undefined;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.verifyUserStatus();
    this.getUserInfo();
  }

  ngOnDestroy() {
    if(this.currentUserInfoSubs) this.currentUserInfoSubs.unsubscribe();
    if(this.isUserLoggedInSubs) this.isUserLoggedInSubs.unsubscribe();
  }

  private getUserInfo(): void {
    this.isUserLoggedInSubs = this._userService.currentUserInfo().subscribe((userInfo: UserModel) => {
      this.userDetails = userInfo;
    })
  }

  private verifyUserStatus(): void {
    this.currentUserInfoSubs = this._authService.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

}