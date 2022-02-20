import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from './product-details';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  constructor() { }
  @Input() productDetail: ProductDetails = new ProductDetails();
  ngOnInit(): void {
  }

}
