import { Component } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';
import { ItemCarousel } from '../carousel/carousel.interface';

@Component({
  selector: 'app-services-section',
  imports: [CarouselComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  services: ItemCarousel[] = [
    {
      title: 'CLOSET DETOX',
      description: 'Limpe o seu closet com o que combina com você',
      image: '/service-closet-detox.png',
      link: '#home',
    },
    {
      title: 'COLORAÇÃO PESSOAL',
      description:
        'Descubra as cores que combinam com você e que irão te valorizar.',
      image: '/service-coloracao-pessoal.png',
      link: '#home',
    },
    {
      title: 'CONSULTORIA DE IMAGEM',
      description:
        'Conte com uma consultoria completa, que irá analisar todas as etapas que você precisa.',
      image: '/service-consultoria-de-imagem.png',
      link: '#home',
    },
  ];
}
