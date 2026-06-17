import { Component } from '@angular/core';
import { LogoTextDark } from '../shared/logo-text-dark/logo-text-dark';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [LogoTextDark, MatButtonModule, MatIconModule],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {}
