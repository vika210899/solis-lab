import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonArrow } from '../../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-privacy-component',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './privacy-component.html',
  styleUrl: './privacy-component.scss',
})
export class PrivacyComponent {}
