import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/auth.state';
import {getUser} from '../../store/auth.selectors';
import {take} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.store.select(getUser).pipe(
      take(1)
    );
  }
}
