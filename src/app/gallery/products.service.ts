import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProductDetails } from './product-card/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  getDetails() {
    const products: ProductDetails[] = [
      {
        imgSrc: 'assets/showcase/images/gallery/galleria1.jpg',
        alt: 'Description for Image 1',
        name: 'Product1',
        description: ' Description will come here',
      },
      {
        imgSrc: 'assets/showcase/images/gallery/galleria2.jpg',
        alt: 'Description for Image 1',
        name: 'Product2',
        description: ' Description will come here',
      },
      {
        imgSrc: 'assets/showcase/images/gallery/galleria3.jpg',
        alt: 'Description for Image 1',
        name: 'Product3',
        description: ' Description will come here',
      },
      {
        imgSrc: 'assets/showcase/images/gallery/galleria1.jpg',
        alt: 'Description for Image 1',
        name: 'Product4',
        description: ' Description will come here',
      },
      {
        imgSrc: 'assets/showcase/images/gallery/galleria2.jpg',
        alt: 'Description for Image 1',
        name: 'Product5',
        description: ' Description will come here',
      },
      {
        imgSrc: 'assets/showcase/images/gallery/galleria1.jpg',
        alt: 'Description for Image 1',
        name: 'Product6',
        description: ' Description will come here',
      },
      {
        imgSrc: 'assets/showcase/images/gallery/galleria1.jpg',
        alt: 'Description for Image 1',
        name: 'Product',
        description: ' Description will come here',
      },
    ];
    return of(products);
  }
}
