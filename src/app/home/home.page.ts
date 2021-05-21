import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User;

  constructor(private route: ActivatedRoute) {
    this.user = route.snapshot.data.user;
  }
}
