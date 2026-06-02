import { Component, computed, inject } from '@angular/core';
import { Products } from '../products/products';
import { MenuSide } from '../shared/menu-side/menu-side';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  imports: [Products, MenuSide],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  public categoriesService = inject(CategoriesService);

  selectedCategoryId?: string;
  selected!: boolean;
  categories = this.categoriesService.getAllCategories();
  selectedCategory = this.categoriesService.getSelectedCategory();

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
    this.categoriesService.saveAsSelectedCategory(this.selectedCategoryId!);
  }
}
