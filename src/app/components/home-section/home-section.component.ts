import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { DeviceDetectorService } from '@shared/device-detector/device-detector.service';

@Component({
  selector: 'app-home-section',
  imports: [NgOptimizedImage, MatGridListModule, MatButton, RouterLink],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
})
export class HomeSectionComponent implements OnInit {
  isMobile = false;

  constructor(private deviceDetectorService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.deviceDetectorService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }
}
