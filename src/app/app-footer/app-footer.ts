import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonArrow } from '../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-footer',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.scss',
})
export class AppFooter {
  navigateToTelegram(): void {
    window.location.href = 'https://t.me/ViktoriaTereshchenko';
  }

  navigateToInstagram(): void {
    window.location.href = 'https://www.instagram.com/solis__lab/';
  }

  navigateToPinterest(): void {
    window.location.href =
      'https://ru.pinterest.com/ideas/%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D1%8B-%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B9-2026/936454345181/';
  }
}
