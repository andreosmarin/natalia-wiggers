import { Component, input } from '@angular/core';

import { CarouselItem } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [],
  providers: [],
})
export class CarouselComponent {
  items = input.required<CarouselItem[]>();
}
