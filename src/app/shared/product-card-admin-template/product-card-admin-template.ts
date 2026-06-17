import { Component, HostListener, inject, Input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../products/product.model';
import { ProductsService } from '../../products/products.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card-admin-template',
  imports: [CurrencyPipe, MatMenuModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './product-card-admin-template.html',
  styleUrl: './product-card-admin-template.scss',
})
export class ProductCardAdminTemplate {
  @Input({ required: true }) product!: Product;
  private productsService = inject(ProductsService);
  isMenuOpen = signal<boolean>(false);
  isOpenDeleteForm = signal<boolean>(false);

  onSelectedProduct() {
    this.productsService.saveAsSelectedProduct(this.product.id);
    console.log(this.product.price);
  }

  // ---Dropdown Menu---
  onToggleMenu(event: Event): void {
    event.stopPropagation();
    this.isMenuOpen.update((value) => !value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
    if (this.isOpenDeleteForm()) {
      this.isOpenDeleteForm.set(false);
    }
  }

  closeDropdown(): void {
    this.isMenuOpen.set(false);
  }

  // ---Archive---

  onArchiveItem(): void {
    this.productsService.archiveProduct(this.product.id);
    this.closeDropdown();
  }

  // ---Unarchive---

  onUnarchiveItem(): void {
    this.productsService.unarchiveProduct(this.product.id);
    this.closeDropdown();
  }

  // ---Delete---

  onStartDeleteItem(event: Event): void {
    event.stopPropagation();
    this.isOpenDeleteForm.set(true);
    this.closeDropdown();
  }

  onConfirmDeleteItem(): void {
    this.productsService.deleteProduct(this.product.id);
    this.onCancelToDelete();
  }

  onCancelToDelete(): void {
    this.isOpenDeleteForm.set(false);
  }
}
