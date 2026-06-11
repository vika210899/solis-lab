import { Component, inject } from '@angular/core';
import { ProductsAdmin } from './products-admin/products-admin';
import { CategoriesService } from '../categories/categories.service';
import { NewItem } from './new-item/new-item';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MenuSide } from '../shared/menu-side/menu-side';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-admin',
  imports: [ProductsAdmin, NewItem, MatProgressSpinnerModule, MenuSide, Button],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  public categoriesService = inject(CategoriesService);

  selectedCategoryId = 'n';
  categories = this.categoriesService.getAllCategories();
  selected!: boolean;
  isOpenAddingForm = false;

  onSelectCategory(id: string) {
    this.selectedCategoryId = id;
    this.categoriesService.saveAsSelectedCategory(id);
  }

  onStartAddItem() {
    this.isOpenAddingForm = !this.isOpenAddingForm;
  }

  onCancelAddItem() {
    this.isOpenAddingForm = !this.isOpenAddingForm;
  }
}
