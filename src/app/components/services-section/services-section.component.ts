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
      image: 'service-personal-coloring.jpg',
      active: true,
    },
    {
      title: $localize`Closet Detox`,
      description: $localize`Make dressing easier by strategically removing pieces from your wardrobe that go against your desired image.`,
      image: 'service-closet-detox.jpg',
      active: false,
    },
    {
      title: $localize`Personal Shopper`,
      description: $localize`Enjoy a personalized shopping experience with choices that reflect your style, needs, and goals.`,
      image: 'service-personal-shopper.jpg',
      active: false,
    },
    {
      title: $localize`Outfit Assembly`,
      description: $localize`Create authentic and versatile outfit combinations that reflect your personality and style!`,
      image: 'service-outfit-assembly.png',
      active: false,
    },
    {
      title: $localize`Smart Suitcase`,
      description: $localize`Pack smart and travel light! Learn to choose key pieces, create stylish outfits, and stay organized with ease.`,
      image: 'service-smart-suitcase.jpg',
      active: false,
    },
  ];
}
