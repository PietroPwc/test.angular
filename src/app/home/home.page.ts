import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/auth.state';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {getUser} from '../store/auth.selectors';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  user: User;

  constructor(private route: ActivatedRoute) {
   this.user = this.route.snapshot.data.user;
  }

  ngOnInit(): void {
    // console.log(this.user$);
  }


}
