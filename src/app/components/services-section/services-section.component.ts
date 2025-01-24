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
      title: 'COLORAÇÃO PESSOAL',
      description:
        'Descubra as cores que realçam sua beleza natural e valorizam sua imagem.',
      image: 'service-coloracao-pessoal.jpg',
      active: true,
    },
    {
      title: 'CLOSET DETOX',
      description:
        'Renove seu guarda-roupa eliminando peças que não combinam com seu estilo e valorizando as que realmente fazem sentido para você.',
      image: 'service-closet-detox.jpg',
      active: false,
    },
    {
      title: 'PERSONAL SHOPPER',
      description:
        'Tenha a experiência de compras personalizada, com escolhas que refletem seu estilo, necessidades e objetivos.',
      image: 'service-personal-shopper.jpg',
      active: false,
    },
  ];
}
