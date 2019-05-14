import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthPagesComponent } from "./auth-pages.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    component: AuthPagesComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPagesRoutingModule {}
