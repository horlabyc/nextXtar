import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: './home-page/home-page.module#HomePageModule' },
  {
    path: 'auth',
    loadChildren: './auth-pages/auth-pages.module#AuthPagesModule'
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosModule'
  },
  {
    path: 'file-upload',
    loadChildren: './upload-content/upload-content.module#UploadContentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
