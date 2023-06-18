import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../authentication/auth.service";
import {Subscription} from "rxjs";
import {UserModel} from "../../../../pages/authentication/model/user.model";
import {NavBarService} from "../services/nav-bar.service";
import {animateSideMenu} from "../../../../animations/animations";

@Component({
  selector: 'app-nav-bar-merchant',
  templateUrl: './nav-bar-merchant.component.html',
  animations: [animateSideMenu]
})
export class NavBarMerchantComponent implements OnInit, OnDestroy {
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

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService,
    private _navBarService: NavBarService
  ) {

  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getSideBarState();

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
