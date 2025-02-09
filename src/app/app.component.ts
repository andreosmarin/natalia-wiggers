import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = $localize`Natália Wiggers | Image & Style Consulting`;
  description = $localize`Graduated in Fashion Design and specialized in Image & Style Consulting, I help women connect with their essence and express a unique style.`;

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.titleService.setTitle(this.title);
    this.meta.addTag({
      name: 'og:title',
      content: this.title,
    });
    this.meta.addTag({
      name: 'name',
      content: this.title,
    });
    this.meta.addTag({
      name: 'description',
      content: this.description,
    });
    this.meta.addTag({
      name: 'og:description',
      content: this.description,
    });
    this.meta.addTag({
      name: 'og:site_name',
      content: 'Natália Wiggers',
    });
    this.meta.addTag({
      name: 'og:image',
      content: 'public/image-logo-natalia-wiggers.png',
    });
  }
}
