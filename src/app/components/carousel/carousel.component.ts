import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { CarouselItem } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [NgOptimizedImage],
  providers: [],
})
export class CarouselComponent {
  items = input.required<CarouselItem[]>();
}
