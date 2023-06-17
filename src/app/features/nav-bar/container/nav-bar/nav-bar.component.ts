import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../authentication/auth.service";
import {filter, Subscription} from "rxjs";
import {UserModel} from "../../../../pages/authentication/model/user.model";
import {animateSideMenu} from "../../../../animations/animations";
import {NavBarService} from "../services/nav-bar.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  animations: [animateSideMenu]
})
export class NavBarComponent implements OnInit, OnDestroy {
  public isUserLoggedIn = false;
  public sideBarState = false;
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
    private _authService: AuthService,
    private _navBarService: NavBarService
  ) {

  }

  ngOnInit(): void {
    this.verifyUserStatus();
    this.getUserInfo();
    this.getSideBarState();
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

  public onLogout() {
    localStorage.removeItem('token');
    this._authService.logUserStatus(false);
    this._router.navigate(['account/login']);
  }

  private getSideBarState() {
    this._navBarService.sideBarState$
      .subscribe((response) => {
      this.sideBarState = response;
    })
  }

  public closeMenu() {
    this._navBarService.sideBarState = false;
  }

}
