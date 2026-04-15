import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';
import { Product } from '../product-details/product.module';

@Component({
  selector: 'app-product-card',
  imports: [ProductDetails],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Output() select = new EventEmitter();

  onSelectedProduct() {
    this.select.emit(this.product.id);
  }
}
