import { Component, inject, Input } from '@angular/core';
import { Product } from '../product.module';
import { ProductCardTemplate } from '../../shared/product-card-template/product-card-template';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  imports: [ProductCardTemplate],
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  private productsService = inject(ProductsService);

  onSelectedProduct() {
    this.productsService.saveAsSelectedProduct(this.product.id);
  }
}
