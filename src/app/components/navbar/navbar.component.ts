import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { DeviceDetectorService } from '@shared/device-detector/device-detector.service';
import { ScrollService } from '@shared/scroll/scroll.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items = [
    { label: 'SOBRE MIM', link: '', fragment: 'about' },
    { label: 'SERVIÇOS', link: '', fragment: 'services' },
    { label: 'DEPOIMENTOS', link: '', fragment: 'testimonials' },
    { label: 'CONTATO', link: '', fragment: 'contact' },
  ];

  languages = ['PT', 'EN'];
  languageSystem = 'PT';

  isMobile = false;

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private scrollService: ScrollService,
  ) {}

  ngOnInit(): void {
    this.deviceDetectorService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

  changeLanguage(language: string) {
    this.languageSystem = language;
  }

  onNavigateToFragment(fragment: string): void {
    this.scrollService.navigateToFragment(fragment);
  }
}
