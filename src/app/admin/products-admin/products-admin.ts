import { Component, inject } from '@angular/core';
import { ProductCardAdmin } from '../product-card-admin/product-card-admin';
import { NewItem } from '../new-item/new-item';
import { ProductsService } from '../../products/products.service';
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-products-admin',
  imports: [ProductCardAdmin, NewItem],
  templateUrl: './products-admin.html',
  styleUrl: './products-admin.scss',
})
export class ProductsAdmin {
  private productsService = inject(ProductsService);
  private categoriesService = inject(CategoriesService);

  selectedProductId?: string;
  isOpenAddingForm = false;
  categoryId = this.categoriesService.getSelectedCategory()()?.id;

  get selectedProduct() {
    return this.productsService.getSelectedProduct();
  }

  get selectedCategoryProducts() {
    return this.productsService.getSelectedCategoryProducts(this.categoryId!);
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

  onStartAddItem() {
    this.isOpenAddingForm = true;
  }

  onCancelAddItem() {
    this.isOpenAddingForm = false;
  }
}
