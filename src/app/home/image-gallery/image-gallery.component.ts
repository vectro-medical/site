import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ImageInfo } from './image-info';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  images: ImageInfo[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getImages().subscribe((images) => {
      this.images = images;
    });
  }
}
