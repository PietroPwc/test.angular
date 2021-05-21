import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {User} from '../models/user';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: boolean;
  error: string;
  form: FormGroup;

  constructor(private route: Router,
              private auth: AuthService) {
    this.form = this.initializeForm();
  }

  ngOnInit() {
  }

  redirectToHome() {
    this.loading = true;
    this.error = null;

    this.auth.login(this.form.get('email').value, this.form.get('password').value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: User) => {
      if (!!res) {
        this.route.navigate(['home']);
      }
    }, error => {
      this.error = error;
    });
  }

  private initializeForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }
}
