import { Component, inject } from '@angular/core';
import { CategoryCard } from './category-card/category-card';
import { Products } from '../products/products';
import { Entry } from '../entry/entry';
import { MenuSide } from '../shared/menu-side/menu-side';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  imports: [CategoryCard, Products, Entry, MenuSide],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  private categoriesService = inject(CategoriesService);

  selectedCategoryId?: string;
  selected!: boolean;
  categories = this.categoriesService.getAllCategories();

  get selectedCategory() {
    return this.categoriesService.getSelectedCategory(this.selectedCategoryId!);
  }

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
  }
}
