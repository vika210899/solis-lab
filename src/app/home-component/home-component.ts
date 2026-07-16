import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

import { Categories } from '../categories/categories';
import { Admin } from '../admin/admin';
import { AboutUs } from '../about-us/about-us';
import { RunningLine } from '../shared/running-line/running-line';
import { SliderComponent } from '../shared/slider/slider';
import { BestSeller } from '../best-seller/best-seller';
import { Collections } from '../collections/collections';

import { MAIN_SLIDES_LIST } from '../shared/slider/slider-item.model';

@Component({
  selector: 'app-home-component',
  imports: [Categories, Admin, AboutUs, RunningLine, SliderComponent, BestSeller, Collections],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  slides = MAIN_SLIDES_LIST;
}
