import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NEWLMS';
  isDarkMode = false;

  constructor(private router: Router) {}

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  navigateToBooks(): void {
    this.router.navigate(['/books']);
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']);
  }
}
