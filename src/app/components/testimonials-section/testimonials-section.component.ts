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
      name: 'KARINA',
      description:
        'Amei o atendimento, fiquei surpresa em como uma cor muda a minha imagem.',
      occupation: 'EMPRESÁRIA',
    },
    {
      name: 'DANIELA',
      description:
        'A Natália fez eu me reconectar comigo mesma, sinto diferença em casa e no trabalho.',
      occupation: 'GERENTE COMERCIAL',
    },
    {
      name: 'LÍGIA',
      description:
        'Como profissional, a minha imagem é importante, e conseguimos elevar o meu nível a outro patamar, estou realizada.',
      occupation: 'EXECUTIVA',
    },
  ];
}
