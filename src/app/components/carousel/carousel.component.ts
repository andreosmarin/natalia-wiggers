import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ItemCarousel } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, MatCardModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() itemsCarousel: ItemCarousel[] = [];
}
