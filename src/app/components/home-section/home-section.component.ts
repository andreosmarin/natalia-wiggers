import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-section',
  imports: [NgOptimizedImage, MatGridListModule, MatButton, RouterLink],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
})
export class HomeSectionComponent {}
