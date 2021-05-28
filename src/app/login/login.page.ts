import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/services/authentication.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  message: string;
  loading: boolean;

  constructor(private router: Router,
              private auth: AuthenticationService) {
    this.form = this.initializeForm();
  }

  ngOnInit() {
  }

  redirectToLogin(value: boolean) {
    this.message = null;
    this.loading = true;

    this.auth.login(this.form.get('email').value, this.form.get('password').value).subscribe((user: User) => {
      this.router.navigate(['home']);
    }, error => {
      this.message = error;
    }, () => {
      this.loading = false;
    });
  }

  private initializeForm(): FormGroup {
    return new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required])
      });
  }
}
