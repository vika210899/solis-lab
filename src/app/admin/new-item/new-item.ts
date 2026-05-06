import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CATEGORY_LIST } from '../../category-list';
import { type NewProduct } from '../../products/product-details/product.module';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-new-item',
  imports: [FormsModule],
  templateUrl: './new-item.html',
  styleUrl: './new-item.scss',
})
export class NewItem {
  newId = '';
  newName = '';
  newPicture = '';
  newCategoryTypeId = '';
  newInStock = true;
  newIsNew = true;
  @Output() cancel = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<NewProduct>();
  private productsService = inject(ProductsService);

  categories = CATEGORY_LIST;

  onAddItem() {
    this.productsService.addProduct({
      name: this.newName,
      picture: this.newPicture,
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
