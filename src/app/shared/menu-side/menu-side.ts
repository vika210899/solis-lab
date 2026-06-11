import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-menu-side',
  imports: [],
  templateUrl: './menu-side.html',
  styleUrl: './menu-side.scss',
})
export class MenuSide {
  private categoriesService = inject(CategoriesService);

  selectedCategoryId?: string;
  // selected!: boolean;
  categories = this.categoriesService.getAllCategories();
  selectedCategory = this.categoriesService.getSelectedCategory();

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
    this.categoriesService.saveAsSelectedCategory(this.selectedCategoryId!);
  }
}
