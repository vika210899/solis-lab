import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonArrow } from '../../shared/button-arrow/button-arrow';

@Component({
  selector: 'app-about-component',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {}
