import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
      content: 'https://nataliawiggers.com/en/brand-logo.png',
    });
    this.meta.addTag({
      name: 'og:image:width',
      content: '1080',
    });
    this.meta.addTag({
      name: 'og:image:height',
      content: '600',
    });
  }
}
