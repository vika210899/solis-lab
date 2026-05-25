import { Component, inject, Input } from '@angular/core';
import { Product } from '../../products/product.module';
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
  private productsService = inject(ProductsService);
  isOpenToArchieveForm = false;
  isOpenInStockForm = false;
  isOpenDeleteForm = false;

  onSelectedProduct() {
    this.productsService.saveAsSelectedProduct(this.product.id);
  }

  // ---Archive---

  onStartArchiveItem() {
    this.isOpenToArchieveForm = true;
  }

  onArchiveItem() {
    // this.product.inStock = false;
    this.productsService.archiveProduct(this.product.id);
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
    // this.product.inStock = true;
    this.productsService.unarchiveProduct(this.product.id);
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
    this.productsService.deleteProduct(this.product.id);
    this.isOpenDeleteForm = false;
  }

  onCancelToDelete() {
    this.isOpenDeleteForm = false;
  }
}
