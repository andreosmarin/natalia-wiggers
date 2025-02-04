import { Component } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';
import { CarouselItem } from '../carousel/carousel.interface';

@Component({
  selector: 'app-services-section',
  imports: [CarouselComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  services: CarouselItem[] = [
    {
      title: $localize`Personal Coloring`,
      description: $localize`Discover the colors that enhance your natural beauty and elevate your image.`,
      image: 'service-personal-coloring.jpg',
      active: true,
    },
    {
      title: $localize`Closet Detox`,
      description: $localize`Refresh your wardrobe by removing pieces that don't match your style and highlighting those that truly make sense for you.`,
      image: 'service-closet-detox.jpg',
      active: false,
    },
    {
      title: $localize`Personal Shopper`,
      description: $localize`Enjoy a personalized shopping experience with choices that reflect your style, needs, and goals.`,
      image: 'service-personal-shopper.jpg',
      active: false,
    },
  ];
}
