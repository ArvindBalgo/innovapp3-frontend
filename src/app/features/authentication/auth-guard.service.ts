import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  private _isUserLoggedIn = false;

  constructor (
    private _authService: AuthService,
    private _router: Router
  ) {
    this.checkUserLogin();
  }

  public canActivate(): boolean {
    if (!this._isUserLoggedIn) {
      this._router.navigate(['account/login']);
      return false;
    }
    return true;
  }

  private checkUserLogin() {
    this._authService.isUserLoggedIn().subscribe((isUserLoggedIn) => {
      this._isUserLoggedIn = isUserLoggedIn;
    });
  }

}
