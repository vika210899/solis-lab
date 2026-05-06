import { Component, Inject, Input, inject } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  selectedProductId?: string;
  @Input() categoryId?: string;
  private productsService = inject(ProductsService);

  get selectedProduct() {
    return this.productsService.getSelectedProduct(this.selectedProductId!);
  }

  get selectedCategoryProducts() {
    return this.productsService.getSelectedCategoryProducts(this.categoryId!);
  }

  get allProducts() {
    return this.productsService.getAllProducts();
  }

  onSelectProduct(id: string) {
    this.selectedProductId = id;
  }
}
