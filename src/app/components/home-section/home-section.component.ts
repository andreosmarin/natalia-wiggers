import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@shared/scroll/scroll.service';

@Component({
  selector: 'app-home-section',
  imports: [NgOptimizedImage, MatGridListModule, RouterLink],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
})
export class HomeSectionComponent {
  constructor(private scrollService: ScrollService) {}

  onNavigateToFragment(fragment: string): void {
    this.scrollService.navigateToFragment(fragment);
  }
}
