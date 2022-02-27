import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './product-card/product-details';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  products: ProductDetails[] = [];
  ngOnInit(): void {
    this.productService.getDetails().subscribe((products) => {
      this.products = products;
    });
  }
}
