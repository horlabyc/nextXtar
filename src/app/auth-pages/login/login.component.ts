import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../Utilities/authentication.service';
import { takeWhile } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import { EncDecrService } from './../../Utilities/enc-decr.service';

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


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private crypt: EncDecrService) {
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
    const Secret = this.crypt.encrypt('$sUlAiChUnNiGeRiA@aPpDeV7%!83*#(2019)u1G', userInfo.password);
    localStorage.setItem('Secret', JSON.stringify(Secret));
    userInfo['ApiName'] =  'NextXtar_admin';
    this.auth.signIn(userInfo).subscribe(res => {
      console.log(res);
      this.isLoggingIn = false;
      this.isLoggedIn = true;
    });
  }
  ngOnInit() {
    this.createSignInForm()
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

}
