import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from './account';
import { AuthenticationService } from 'src/app/Utilities/authentication.service';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  account: Account;
  emailPattern: string;
  isdestroyed: boolean;
  isRegistered: boolean;
  isRegistering: boolean;
  isPasswordError: boolean;
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {
    this.isdestroyed = false;
    this.isRegistering = false;
    this.isPasswordError = false;
  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      email: [null, Validators.compose([Validators.required, Validators.email]) ],
      userPhone: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      tAndC: [null, Validators.required]
    });
  }

  register(formValue) {
    this.isRegistering = true;
    this.isPasswordError = false;
    const { username, email, userPhone, password } = formValue;
    const user: Account = new Account( username, email, userPhone, password);
    this.auth.signUp(user).pipe( takeWhile( () => this.isdestroyed )).subscribe(res => {
      if (res.RespCode === 200) {
        this.isRegistered = true;
        this.isRegistering = false;
      }
    }, err => {
      if ( err.error.RespCode === 400 ) {
        this.isPasswordError = true;
      }
      this.isRegistered = false;
      this.isRegistering = false;
    })
  }

  ngOnInit() {
    this.createRegisterForm();
  }

  ngOnDestroy() {
    this.isdestroyed = true;
  }
}
