import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@shared/scroll/scroll.service';

@Component({
  selector: 'app-contact-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  constructor(private scrollService: ScrollService) {}

  onNavigateToFragment(fragment: string): void {
    this.scrollService.navigateToFragment(fragment);
  }
}
