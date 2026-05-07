import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { ProductCard } from '../../products/product-card/product-card';
// import { type Product, NewProduct } from '../../products/product-details/product.module';
import { ProductCardAdmin } from '../product-card-admin/product-card-admin';
import { NewItem } from '../new-item/new-item';
import { ProductsService } from '../../products/products.service';
// import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-products-admin',
  imports: [ProductCardAdmin, NewItem],
  templateUrl: './products-admin.html',
  styleUrl: './products-admin.scss',
})
export class ProductsAdmin {
  @Input({ required: true }) categoryId!: string;
  private productsService = inject(ProductsService);

  selectedProductId?: string;
  isOpenAddingForm = false;

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
  }

  onCancelAddItem() {
    this.isOpenAddingForm = false;
  }
}
