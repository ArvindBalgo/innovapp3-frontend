import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, Observable} from 'rxjs';

@Injectable()
export class NavBarService {
  private _isSideBarOpen = false;
  private _isSideBarOpen$: BehaviorSubject<boolean>;

  constructor() {
    this._isSideBarOpen$ = new BehaviorSubject<boolean>(this._isSideBarOpen);
  }

  get sideBarState$(): Observable<boolean> {
    return this._isSideBarOpen$
      .asObservable()
      .pipe(filter((isOpen) => !!isOpen));
  }

  set sideBarState(flag: boolean) {
    this._isSideBarOpen = flag;
    this._isSideBarOpen$.next(this._isSideBarOpen);
  }
}
