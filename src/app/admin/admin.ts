import { Component } from '@angular/core';
import { CATEGORY_LIST } from '../category-list';
import { ProductsAdmin } from './products-admin/products-admin';

@Component({
  selector: 'app-admin',
  imports: [ProductsAdmin],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  selectedCategoryId = 'n';
  categories = CATEGORY_LIST;
  selected!: boolean;

  get selectedCategory() {
    return this.categories.find((category) => category.id === this.selectedCategoryId);
  }

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
  }
}
