import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service';
import {UserResolver} from './resolvers/user.resolver';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UserResolver
  ]
})
export class SharedModule { }
