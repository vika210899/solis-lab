import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.scss',
})
export class AppFooter {
  private router = inject(Router);

  openHomePage() {
    this.router.navigate(['']);
  }

  openAdminPage() {
    this.router.navigate(['/admin-page']);
  }
}
