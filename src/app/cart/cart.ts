import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonArrow } from '../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-cart',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {}
