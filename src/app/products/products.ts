import { Component, Input } from '@angular/core';
import { PRODUCT_LIST } from '../product-list';
import { ProductCard } from './product-card/product-card';
import { Product } from './product-details/product.module';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products = PRODUCT_LIST;
  selectedProductId?: string;
  @Input() categoryId?: string;

  get selectedProduct() {
    return this.products.find((product: Product) => product.id === this.selectedProductId);
  }

  get selectedCategoryProducts() {
    return this.products.filter((product: Product) => product.categoryTypeId === this.categoryId);
  }

  get allProducts() {
    return this.products;
  }

  onSelectProduct(id: string) {
    this.selectedProductId = id;
  }
}
