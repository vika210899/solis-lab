import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, RouterLink, FormsModule],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss',
})
export class AppHeader {
  isOpen: boolean = false;
  newName = '';

  onStartAuth(event: Event) {
    console.log('start');
    event.stopPropagation();
    this.isOpen = true;
  }

  onAuth() {
    console.log('AUTH!', this.newName);
    this.newName = '';
    this.isOpen = false;
  }

  onCancel() {
    this.isOpen = false;
  }
}
