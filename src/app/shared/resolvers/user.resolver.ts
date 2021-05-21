import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectUser} from '../../store/auth.selectors';
import {take} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.store.pipe(
      select(selectUser),
      take(1)
    );
  }
}
