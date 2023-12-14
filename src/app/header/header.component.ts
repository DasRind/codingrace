import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showShadow: boolean = false;

  onWindowScroll(event: Event) {
    this.showShadow = window.scrollY > 0;
  }
}
