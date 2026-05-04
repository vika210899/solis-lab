import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CATEGORY_LIST } from '../../category-list';
import { type NewProduct } from '../../products/product-details/product.module';
import { FormsModule } from '@angular/forms';

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

  categories = CATEGORY_LIST;

  onAddItem() {
    // this.isOpenAddingForm = true;
    console.log('Added new item');
    // this.newInStock = productsToAddInStock;
    // console.log(this.newId, '=', this.newCategoryTypeId, this.selectedCategoryProducts.length + 1);
    //   this.products.push {
    //     id = this.newId;
    // name = this.newName;
    // picture = this.newPicture;
    // categoryTypeId = this.newCategoryTypeId;
    // inStock = this.newInStock;
    // isNew = this.newIsNew;
    //   }
    console.log(
      'name: ',
      this.newName,
      ', picture: ',
      this.newPicture,
      ', categoryTypeId: ',
      this.newCategoryTypeId,
      ', inStock: ',
      this.newInStock,
      ', isNew: ',
      this.newIsNew,
    );
    this.addItem.emit({
      name: this.newName,
      picture: this.newPicture,
      categoryTypeId: this.newCategoryTypeId,
      inStock: this.newInStock,
      isNew: this.newIsNew,
    });
  }

  onCancelAddItem() {
    this.cancel.emit();
  }
}
