import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [GalleryComponent, ProductCardComponent],
  imports: [CommonModule, GalleryRoutingModule],
})
export class GalleryModule {}
