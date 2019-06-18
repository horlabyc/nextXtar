import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [VideosComponent, ShowcaseComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
