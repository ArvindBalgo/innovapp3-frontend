import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class AuthService {

  private _isLoggedIn = false;
  private _isLoggedIn$: BehaviorSubject<boolean>;

  constructor (
  ) {
    this._isLoggedIn$ = new BehaviorSubject<boolean>(this._isLoggedIn);
  }

  public isUserLoggedIn(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  public logUserStatus(userStatus: boolean): void {
    this._isLoggedIn = userStatus;
    this._isLoggedIn$.next(this._isLoggedIn);
  }

}
