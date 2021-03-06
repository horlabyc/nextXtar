import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomePageRoutingModule } from "./home-page-routing.module";
import { VideoIntroComponent } from "./video-intro/video-intro.component";
import { PartnersComponent } from "./partners/partners.component";
import { HomePageComponent } from "./home-page.component";
import { ShowCaseComponent } from './show-case/show-case.component';
import { ShowCase1Component } from './show-case1/show-case1.component';
import { ShowCase2Component } from './show-case2/show-case2.component';
import { FooterComponent } from './footer/footer.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [HomePageComponent, VideoIntroComponent, PartnersComponent, ShowCaseComponent, ShowCase1Component, ShowCase2Component, FooterComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule, NgsRevealModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [VideoIntroComponent, PartnersComponent]
})
export class HomePageModule {}
