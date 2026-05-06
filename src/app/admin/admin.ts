import { Component, inject } from '@angular/core';
import { ProductsAdmin } from './products-admin/products-admin';
import { CategoriesService } from '../categories/categories.service';

@Component({
  selector: 'app-admin',
  imports: [ProductsAdmin],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  private categoriesService = inject(CategoriesService);
  selectedCategoryId = 'n';
  categories = this.categoriesService.getAllCategories;
  selected!: boolean;

  get selectedCategory() {
    return this.categoriesService.getSelectedCategory(this.selectedCategoryId);
  }

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
  }
}
