import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadContentRoutingModule } from './upload-content-routing.module';
import { UploadContentComponent } from './upload-content.component';
import { MusicUploadComponent } from './music-upload/music-upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [UploadContentComponent, MusicUploadComponent],
  imports: [
    CommonModule,
    NgxFileDropModule,
    UploadContentRoutingModule
  ]
})
export class UploadContentModule { }
