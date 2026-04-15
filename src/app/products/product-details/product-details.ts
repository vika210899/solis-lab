import { Component, Input } from '@angular/core';
import { Product } from './product.module';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  @Input() product?: Product;
}
