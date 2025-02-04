import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  navigateToFragment(fragment: string) {
    this.router
      .navigate([], {
        relativeTo: this.activatedRoute,
        fragment,
      })
      .then(() => this.scrollToFragment(fragment));
  }

  private scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
