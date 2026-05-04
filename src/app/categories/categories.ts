import { Component } from '@angular/core';
import { CATEGORY_LIST } from '../category-list';
import { CategoryCard } from './category-card/category-card';
import { Products } from '../products/products';
import { Entry } from '../entry/entry';
import { MenuSide } from '../shared/menu-side/menu-side';

@Component({
  selector: 'app-categories',
  imports: [CategoryCard, Products, Entry, MenuSide],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  categories = CATEGORY_LIST;
  selectedCategoryId?: string;
  selected!: boolean;

  get selectedCategory() {
    return this.categories.find((category) => category.id === this.selectedCategoryId);
  }

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
  }
}
