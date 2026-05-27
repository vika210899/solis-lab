import { Injectable, signal } from '@angular/core';
import { CATEGORY_LIST, type Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private categories = CATEGORY_LIST;
  private selectedCategory = signal<Category | undefined>(undefined);

  getAllCategories() {
    return this.categories;
  }

  saveAsSelectedCategory(selectedCategoryId: string) {
    this.selectedCategory.set(
      this.categories.find((category) => category.id === selectedCategoryId),
    );
    return this.selectedCategory;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }
}
