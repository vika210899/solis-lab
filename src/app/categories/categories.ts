import { Component } from '@angular/core';
import { CATEGORY_LIST } from '../category-list';
import { CategoryCard } from './category-card/category-card';
import { Products } from '../products/products';

@Component({
  selector: 'app-categories',
  imports: [CategoryCard, Products],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  categories = CATEGORY_LIST;
  selectedCategoryId?: string;

  get selectedCategory() {
    return this.categories.find((category) => category.id === this.selectedCategoryId);
  }

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
  }
}
