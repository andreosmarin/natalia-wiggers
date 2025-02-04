import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@shared/scroll/scroll.service';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, MatToolbarModule, RouterLink, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  onNavigateToFragment(fragment: string): void {
    this.scrollService.navigateToFragment(fragment);
  }
}
