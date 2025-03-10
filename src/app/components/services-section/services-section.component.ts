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
      description: $localize`Discover the colors that best harmonize with your features. Colors can say a lot about you!`,
      image: 'service-personal-coloring.jpeg',
      active: true,
      height: 1066,
      width: 1600,
    },
    {
      title: $localize`Closet Detox`,
      description: $localize`Make dressing easier by strategically removing pieces from your wardrobe that go against your desired image.`,
      image: 'service-closet-detox.png',
      active: false,
      height: 2612,
      width: 3911,
    },
    {
      title: $localize`Personal Shopper`,
      description: $localize`Enjoy a personalized shopping experience with choices that reflect your style, needs, and goals.`,
      image: 'service-personal-shopper.jpg',
      active: false,
      height: 3457,
      width: 5185,
    },
    {
      title: $localize`Outfit Assembly`,
      description: $localize`Maximize your clothing and create versatile, stylish looks with the pieces you already have in your wardrobe!`,
      image: 'service-outfit-assembly.jpg',
      active: false,
      height: 2304,
      width: 4096,
    },
    {
      title: $localize`Smart Suitcase`,
      description: $localize`Pack smart and travel light! Learn to choose key pieces, create looks, and stay organized with ease.`,
      image: 'service-smart-suitcase.jpg',
      active: false,
      height: 3464,
      width: 5189,
    },
  ];
}
