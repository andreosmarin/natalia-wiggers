import { Component } from '@angular/core';

import { Testimonial } from './testimonials-section.interface';

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Karina',
      description: $localize`I loved the service, I was surprised by how a color changes my image.`,
      occupation: $localize`Businesswoman`,
    },
    {
      name: 'Daniela',
      description: $localize`Natália helped me reconnect with myself, I feel the difference at home and at work.`,
      occupation: $localize`Commercial Manager`,
    },
    {
      name: 'Lígia',
      description: $localize`As a professional, my image is important, and we managed to elevate my level to another level, I am fulfilled.`,
      occupation: $localize`Executive`,
    },
  ];
}
