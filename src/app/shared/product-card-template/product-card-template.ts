import { Component, inject, Input } from '@angular/core';
import { Product } from '../../products/product.model';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-product-card-template',
  imports: [],
  templateUrl: './product-card-template.html',
  styleUrl: './product-card-template.scss',
})
export class ProductCardTemplate {
  @Input({ required: true }) product!: Product;
  private productsService = inject(ProductsService);

  onSelectedProduct() {
    this.productsService.saveAsSelectedProduct(this.product.id);
  }
}
