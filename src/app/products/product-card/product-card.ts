import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ProductDetails } from '../product-details/product-details';
import { Product } from '../product-details/product.module';
import { ProductCardTemplate } from '../../shared/product-card-template/product-card-template';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  // imports: [ProductDetails],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  imports: [ProductCardTemplate],
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Output() select = new EventEmitter();
  // constructor(private router: Router) {}
  onSelectedProduct() {
    this.select.emit(this.product.id);
    // this.goToPage();
  }

  // goToPage() {
  //   this.router.navigate(['../product-details/product-details']); // или navigateByUrl
  // }
}
