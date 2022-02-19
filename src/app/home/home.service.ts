import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ImageInfo } from './image-gallery/image-info';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getImages() {
    const images: ImageInfo[] = [
      {
        previewImageSrc: 'assets/showcase/images/gallery/galleria1.jpg',
        thumbnailImageSrc: 'assets/showcase/images/gallery/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        previewImageSrc: 'assets/showcase/images/gallery/galleria2.jpg',
        thumbnailImageSrc: 'assets/showcase/images/gallery/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc: 'assets/showcase/images/gallery/galleria3.jpg',
        thumbnailImageSrc: 'assets/showcase/images/gallery/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
    ];
    return of(images);
  }
}
