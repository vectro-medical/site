import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PrimengSharedModule } from '../primeng-shared/primeng-shared.module';

@NgModule({
  declarations: [HomeComponent, ImageGalleryComponent],
  imports: [HttpClientModule, CommonModule, HomeRoutingModule, PrimengSharedModule],
})
export class HomeModule {}
