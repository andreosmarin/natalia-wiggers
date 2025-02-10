import { Component } from '@angular/core';

import { AboutSectionComponent } from '../about-section/about-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
