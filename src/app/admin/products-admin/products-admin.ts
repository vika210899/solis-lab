import { Component, inject } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { CategoriesService } from '../../categories/categories.service';
// import { ProductCardAdminTemplate } from '../../shared/product-card-admin-template/product-card-admin-template';

@Component({
  selector: 'app-products-admin',
  // imports: [ProductCardAdminTemplate],
  templateUrl: './products-admin.html',
  styleUrl: './products-admin.scss',
})
export class ProductsAdmin {
  private productsService = inject(ProductsService);
  public categoriesService = inject(CategoriesService);

  selectedProductId?: string;

  get selectedProduct() {
    return this.productsService.getSelectedProduct();
  }

  get selectedCategoryProducts() {
    return this.productsService.getSelectedCategoryProducts(
      this.categoriesService.getSelectedCategory()()!.id,
    );
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
}
