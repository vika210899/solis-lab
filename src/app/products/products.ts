import { Component, inject } from '@angular/core';
import { ProductCard } from './product-card/product-card';
import { ProductsService } from './products.service';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private productsService = inject(ProductsService);
  public categoriesService = inject(CategoriesService);

  get allProducts() {
    return this.productsService.getAllProducts();
  }

  get selectedCategoryProducts() {
    return this.productsService.getSelectedCategoryProducts(
      this.categoriesService.getSelectedCategory()()!.id,
    );
  }
}
