import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductCard } from '../../products/product-card/product-card';
import { type Product, NewProduct } from '../../products/product-details/product.module';
import { ProductCardAdmin } from '../product-card-admin/product-card-admin';
import { CATEGORY_LIST } from '../../category-list';
import { NewItem } from '../new-item/new-item';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-products-admin',
  imports: [ProductCardAdmin, NewItem],
  templateUrl: './products-admin.html',
  styleUrl: './products-admin.scss',
})
export class ProductsAdmin {
  selectedProductId?: string;
  isOpenAddingForm = false;
  private productsService = inject(ProductsService);

  @Input({ required: true }) categoryId!: string;

  get selectedProduct() {
    return this.productsService.getSelectedProduct(this.selectedProductId!);
  }

  get selectedCategoryProducts() {
    return this.productsService.getSelectedCategoryProducts(this.categoryId);
  }

  get inStockProducts() {
    return this.productsService.getInStockProducts();
  }

  get inArchiveProducts() {
    return this.productsService.getInArchiveProducts();
  }

  get newProducts() {
    return this.productsService.getNewProducts();
  }

  get allProducts() {
    return this.productsService.getAllProducts();
  }

  onSelectProduct(id: string) {
    this.selectedProductId = id;
  }

  onStartAddItem() {
    this.isOpenAddingForm = true;
    console.log(this.selectedProductId);
  }

  onCancelAddItem() {
    this.isOpenAddingForm = false;
  }

  // onArchiveItem(id: string) {
  //   for (let product of this.products) {
  //     if (product.id === id) {
  //       product.inStock = false;
  //     }
  //   }
  // }

  // onUnarchiveItem(id: string) {
  //   for (let product of this.products) {
  //     if (product.id === id) {
  //       product.inStock = true;
  //     }
  //   }
  // }
}
