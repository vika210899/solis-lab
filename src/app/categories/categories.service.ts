import { Injectable } from '@angular/core';
import { CATEGORY_LIST } from '../category-list';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private categories = CATEGORY_LIST;

  getAllCategories() {
    return this.categories;
  }

  getSelectedCategory(selectedCategoryId: string) {
    return this.categories.find((category) => category.id === selectedCategoryId);
  }
}
