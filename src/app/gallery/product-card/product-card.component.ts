import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from './product-details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor() {}
  @Input() productDetail: ProductDetails = new ProductDetails();
  ngOnInit(): void {}
}
