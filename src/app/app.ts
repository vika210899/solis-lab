import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './app-header/app-header';
import { Categories } from './categories/categories';
import { AppFooter } from './app-footer/app-footer';
import { Admin } from './admin/admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Categories, AppFooter, Admin],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('solis-lab-project');
}
