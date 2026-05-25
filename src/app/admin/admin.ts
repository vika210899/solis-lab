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
  public categoriesService = inject(CategoriesService);
  selectedCategoryId = 'n';
  categories = this.categoriesService.getAllCategories();
  selected!: boolean;

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
    this.categoriesService.saveAsSelectedCategory(id);
  }
}
