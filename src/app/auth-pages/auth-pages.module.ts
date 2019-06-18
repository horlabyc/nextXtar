import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { AuthPagesComponent } from './auth-pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthPagesComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AuthPagesRoutingModule, NgsRevealModule],
  exports: [AuthPagesComponent]
})
export class AuthPagesModule {}
