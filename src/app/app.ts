import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './app-header/app-header';
import { Categories } from './categories/categories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, Categories],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('solis-lab-project');
}
