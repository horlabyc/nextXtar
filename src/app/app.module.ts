import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageModule } from "./home-page/home-page.module";
import { HeaderComponent } from "./Core/header/header.component";
import { FooterComponent } from "./Core/footer/footer.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    HomePageModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
