import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LogoTextLight } from '../shared/logo-text-light/logo-text-light';
import { ButtonArrow } from '../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-footer',
  imports: [LogoTextLight, ButtonArrow],
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
