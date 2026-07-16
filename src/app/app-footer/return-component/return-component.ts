import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonArrow } from '../../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-return-component',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './return-component.html',
  styleUrl: './return-component.scss',
})
export class ReturnComponent {}
