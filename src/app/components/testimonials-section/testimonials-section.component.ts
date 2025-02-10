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
      name: 'Raquel de Oliveira',
      description: $localize`I loved discovering my color palette. Now I know how to wear what flatters me.`,
      occupation: $localize`Autonomous`,
    },
  ];
}
