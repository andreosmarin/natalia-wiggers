import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeSectionComponent } from './components/home-section/home-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
