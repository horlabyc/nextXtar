import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';
import { AuthPagesComponent } from './auth-pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [AuthPagesComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthPagesRoutingModule, NgsRevealModule],
  exports: [AuthPagesComponent]
})
export class AuthPagesModule {}
