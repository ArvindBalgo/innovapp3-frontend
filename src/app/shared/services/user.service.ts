import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {UserModel} from "../../pages/authentication/model/user.model";

@Injectable()
export class UserService {
  private _loggedUserData: any;
  private _loggedUserData$: BehaviorSubject<UserModel>;

  constructor(
    private _httpClient: HttpClient
  ) {
    this._loggedUserData$ = new BehaviorSubject<UserModel>(this._loggedUserData);
  }

  public setCurrentUserInfo(userInfo: any): void {
    console.log(userInfo, '--------------')
    this._loggedUserData$.next(userInfo);
  }

  public currentUserInfo(): Observable<any> {
    return this._loggedUserData$.asObservable();
  }

}
