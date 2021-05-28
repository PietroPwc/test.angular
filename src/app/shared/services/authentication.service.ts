import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {Observable, of, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {setUser} from '../../store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users: User[];
  private user: Observable<User>;

  constructor(private store: Store) {
    this.users = AuthenticationService.initializeDB();
  }

  static initializeDB(): User[] {
    return [
      {
        email: 'michael@mail.com',
        name: 'Michael',
        password: 'Michael',
        lastname: 'Scott',
        avatar: 'https://theofficeanalytics.files.wordpress.com/2017/11/mochal.jpg?w=1200'
      },
      {
        email: 'dwight@mail.com',
        name: 'Dwight',
        password: 'Dwight',
        lastname: 'Schrute',
        avatar: 'https://img1.looper.com/img/gallery/the-untold-truth-of-dwight-schrute/intro-1562620300.jpg'
      },
      {
        email: 'angela@mail.com',
        name: 'Angela',
        lastname: 'Martin',
        password: 'Angela',
        avatar: 'https://www.datocms-assets.com/151/1471782480-angela.jpg?w=500&fm=jpg'
      }
    ];
  }

  login(email: string, password: string): Observable<User> {
    const source = timer(2000);
    return source.pipe(
      switchMap((value: number) => {
        if (!!this.users.find(element => element.email === email) && !!this.users.find(element => element.password === password)) {
          this.store.dispatch(setUser({ connectedUser: this.users.find(element => element.email === email) }));

          return of(this.users.find(element => element.email === email) && this.users.find(element => element.password === password));
        } else {
          throw new Error('utente non esistente');
        }
      })
    );
  }

}
