import { Component } from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-best-seller',
  imports: [Products],
  templateUrl: './best-seller.html',
  styleUrl: './best-seller.scss',
})
export class BestSeller {}
