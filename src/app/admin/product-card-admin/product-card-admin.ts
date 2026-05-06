import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../products/product-details/product.module';
import { FormsModule } from '@angular/forms';
import { ProductCardTemplate } from '../../shared/product-card-template/product-card-template';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-product-card-admin',
  imports: [FormsModule, ProductCardTemplate],
  templateUrl: './product-card-admin.html',
  styleUrl: './product-card-admin.scss',
})
export class ProductCardAdmin {
  @Input({ required: true }) product!: Product;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter<string>();
  private productsService = inject(ProductsService);

  isOpenToArchieveForm = false;
  isOpenInStockForm = false;
  isOpenDeleteForm = false;

  onSelectedProduct() {
    this.select.emit(this.product.id);
  }

  // ---Archive---

  onStartArchiveItem() {
    this.isOpenToArchieveForm = true;
  }

  onArchiveItem() {
    this.product.inStock = false;
    this.isOpenToArchieveForm = false;
  }

  onCancelToArchive() {
    this.isOpenToArchieveForm = false;
  }

  // ---Unarchive---

  onStartUnarchiveItem() {
    this.isOpenInStockForm = true;
  }

  onUnarchiveItem() {
    this.product.inStock = true;
    this.isOpenInStockForm = false;
  }

  onCancelToInStock() {
    this.isOpenInStockForm = false;
  }

  // ---Delete---

  onStartDeleteItem() {
    this.isOpenDeleteForm = true;
  }

  onDeleteItem() {
    console.log(this.product.id);
    this.productsService.deleteProduct(this.product.id);
    this.isOpenDeleteForm = false;
  }

  onCancelToDelete() {
    this.isOpenDeleteForm = false;
  }
}
