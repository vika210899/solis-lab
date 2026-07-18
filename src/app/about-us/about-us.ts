import { Component } from '@angular/core';
import { ButtonArrow } from '../shared/button-arrow/button-arrow';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [ButtonArrow, RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {}
