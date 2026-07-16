import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonArrow } from '../../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-delivery-component',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './delivery-component.html',
  styleUrl: './delivery-component.scss',
})
export class DeliveryComponent {}
