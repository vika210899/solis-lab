import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRODUCT_LIST } from '../../product-list';
import { ProductCard } from '../../products/product-card/product-card';
import { type Product, NewProduct } from '../../products/product-details/product.module';
import { ProductCardAdmin } from '../product-card-admin/product-card-admin';
import { CATEGORY_LIST } from '../../category-list';
import { NewItem } from '../new-item/new-item';

@Component({
  selector: 'app-products-admin',
  imports: [ProductCardAdmin, NewItem],
  templateUrl: './products-admin.html',
  styleUrl: './products-admin.scss',
})
export class ProductsAdmin {
  products = PRODUCT_LIST;
  selectedProductId?: string;
  isOpenAddingForm = false;
  newId = '';

  @Input() categoryId?: string;

  get selectedProduct() {
    return this.products.find((product: Product) => product.id === this.selectedProductId);
  }

  get selectedCategoryProducts() {
    return this.products.filter((product: Product) => product.categoryTypeId === this.categoryId);
  }

  get inStockProducts() {
    return this.products.filter((product: Product) => product.inStock === true);
  }

  get inArchiveProducts() {
    return this.products.filter((product: Product) => product.inStock === false);
  }

  get newProducts() {
    return this.products.filter((product: Product) => product.isNew === true);
  }

  get allProducts() {
    return this.products;
  }

  onSelectProduct(id: string) {
    this.selectedProductId = id;
  }

  onStartAddItem() {
    this.isOpenAddingForm = true;
    console.log(this.selectedProductId);
  }

  onAddItem(newItemData: NewProduct) {
    this.newId = newItemData.categoryTypeId + Number(this.selectedCategoryProducts.length + 1);
    this.products.push({
      id: this.newId,
      name: newItemData.name,
      picture: newItemData.picture,
      categoryTypeId: newItemData.categoryTypeId,
      inStock: newItemData.inStock,
      isNew: newItemData.isNew,
    });
    this.isOpenAddingForm = false;
  }

  onCancelAddItem() {
    this.isOpenAddingForm = false;
  }

  // onArchiveItem(id: string) {
  //   for (let product of this.products) {
  //     if (product.id === id) {
  //       product.inStock = false;
  //     }
  //   }
  // }

  // onUnarchiveItem(id: string) {
  //   for (let product of this.products) {
  //     if (product.id === id) {
  //       product.inStock = true;
  //     }
  //   }
  // }

  onDeleteItem(id: string) {
    console.log(id);
    this.products = this.products.filter((product) => product.id !== id);
  }
}
