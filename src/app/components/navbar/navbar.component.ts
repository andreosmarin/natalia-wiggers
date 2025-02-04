import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { DeviceDetectorService } from '@shared/device-detector/device-detector.service';
import { ScrollService } from '@shared/scroll/scroll.service';
import { Language } from '@shared/system/language.interface';
import { Languages } from '@shared/system/languages';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgOptimizedImage,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items = [
    { label: 'About Me', link: '', fragment: 'about' },
    { label: 'Services', link: '', fragment: 'services' },
    { label: 'Testimonials', link: '', fragment: 'testimonials' },
    { label: 'Contact', link: '', fragment: 'contact' },
  ];

  languages = Languages;
  languageSystem = signal<string | null>(null);

  isMobile = false;

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private plataformId: object,
  ) {
    if (isPlatformBrowser(this.plataformId)) {
      const langFromPath = window.location.pathname.split('/')[1];
      const validLang = this.languages.find((lang) => lang.id === langFromPath);
      this.languageSystem.set(
        localStorage.getItem('languageSystem') || validLang?.label || 'EN',
      );
    }
  }

  ngOnInit(): void {
    this.deviceDetectorService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  changeLanguage(language: Language) {
    this.languageSystem.set(language.label);

    if (isPlatformBrowser(this.plataformId)) {
      localStorage.setItem('languageSystem', language.label);
    }
  }

  onNavigateToFragment(fragment: string): void {
    this.scrollService.navigateToFragment(fragment);
  }
}
