import { Component } from '@angular/core';
import { LogoTextDark } from '../shared/logo-text-dark/logo-text-dark';

@Component({
  selector: 'app-header',
  imports: [LogoTextDark],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {}
