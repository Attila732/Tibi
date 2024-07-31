import { Component } from '@angular/core';

@Component({
  selector: 'app-navigacio',
  templateUrl: './navigacio.component.html',
  styleUrls: ['./navigacio.component.css']
})
export class NavigacioComponent {
  isNavbarCollapsed = true;

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  onNavItemClick(): void {
    if (!this.isNavbarCollapsed) {
      this.toggleNavbar(); // Collapse the navbar when a nav item is clicked
    }
  }
}
