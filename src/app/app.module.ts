import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageModule } from "./home-page/home-page.module";
import { HeaderComponent } from "./Core/header/header.component";
import { FooterComponent } from "./Core/footer/footer.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './Utilities/HttpAddTokenInterceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler } from './Utilities/ErrorHandler';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HomePageModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true},
   {provide: HTTP_INTERCEPTORS, useClass: ErrorHandler, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
