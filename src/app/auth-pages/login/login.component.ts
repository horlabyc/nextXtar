import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../Utilities/authentication.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  destroyed: boolean;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {
    this.destroyed = false;
    this.isLoggedIn = false;
    this.isLoggingIn = false;
  }

  createSignInForm() {
    this.signInForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });
  }

  signIn(formValue) {
    this.isLoggingIn = true;
    const userInfo = {...formValue};
    userInfo['ApiName'] =  'NextXtar_admin';
    console.log(userInfo);
    this.auth.signIn(userInfo).pipe( takeWhile( () => this.destroyed)).subscribe(res =>{
      console.log(res);
      this.isLoggingIn = false;
      this.isLoggedIn = true;
    }, err => {
      console.log(err);
      this.isLoggedIn = false;
      this.isLoggingIn = false;
    })
  }
  ngOnInit() {
    this.createSignInForm()
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

}
