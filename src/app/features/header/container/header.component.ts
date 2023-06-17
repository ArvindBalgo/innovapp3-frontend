import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from "../../../pages/authentication/model/user.model";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/auth.service";
import {filter, Subscription} from "rxjs";
import {NavBarService} from "../../nav-bar/container/services/nav-bar.service";

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
  public isSideBarOpen = false;

  private currentUserInfoSubs: Subscription | undefined;
  private isUserLoggedInSubs: Subscription | undefined;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService,
    private _navBarService: NavBarService,
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
    this.isUserLoggedInSubs = this._userService.currentUserInfo()
      .pipe(
        filter(response => !!response)
      )
      .subscribe((userInfo: UserModel) => {
      this.userDetails = userInfo;
    })
  }

  private verifyUserStatus(): void {
    this.currentUserInfoSubs = this._authService.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
  }

  public openSideMenu() {
    this.isSideBarOpen = !this.isSideBarOpen;
    this._navBarService.sideBarState = this.isSideBarOpen;
  }

}
