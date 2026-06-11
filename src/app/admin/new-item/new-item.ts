import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewProduct } from '../../products/product.model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../products/products.service';
import { CategoriesService } from '../../categories/categories.service';

@Component({
  selector: 'app-new-item',
  imports: [FormsModule],
  templateUrl: './new-item.html',
  styleUrl: './new-item.scss',
})
export class NewItem {
  @Input({ required: true }) isOpen!: boolean;
  @Output() cancel = new EventEmitter<void>();
  private productsService = inject(ProductsService);
  private categoriesService = inject(CategoriesService);
  categories = this.categoriesService.getAllCategories();
  newId = '';
  newName = '';
  newPicture = '';
  newPrice = '';
  newCategoryTypeId = '';
  newInStock = true;
  newIsNew = true;

  onAddItem() {
    this.productsService.addProduct({
      name: this.newName,
      picture: this.newPicture,
      price: +this.newPrice,
      categoryTypeId: this.newCategoryTypeId,
      inStock: this.newInStock,
      isNew: this.newIsNew,
    });
    this.cancel.emit();
  }

  onCancelAddItem() {
    this.cancel.emit();
  }
}
