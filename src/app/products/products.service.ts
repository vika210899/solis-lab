import { Injectable, signal } from '@angular/core';
import { PRODUCT_LIST, type NewProduct, type Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products = PRODUCT_LIST;
  private selectedProduct = signal<Product | undefined>(undefined);

  constructor() {
    if (typeof window !== 'undefined') {
      const products = localStorage.getItem('products');

      if (products) {
        this.products = JSON.parse(products);
      }
    }
  }

  getAllProducts() {
    return this.products;
  }

  getSelectedCategoryProducts(categoryId: string) {
    return this.products.filter((product: Product) => product.categoryTypeId === categoryId);
  }

  saveAsSelectedProduct(productId: string) {
    this.selectedProduct.set(this.products.find((product: Product) => product.id === productId));
    return this.selectedProduct;
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

  getInStockProducts() {
    return this.products.filter((product: Product) => product.inStock === true);
  }

  getInArchiveProducts() {
    return this.products.filter((product: Product) => product.inStock === false);
  }

  getNewProducts() {
    return this.products.filter((product: Product) => product.isNew === true);
  }

  addProduct(newProductData: NewProduct) {
    let newId =
      newProductData.categoryTypeId +
      Number(this.getSelectedCategoryProducts(newProductData.categoryTypeId).length + 1);
    this.products.push({
      id: newId,
      name: newProductData.name,
      picture: newProductData.picture,
      price: newProductData.price,
      categoryTypeId: newProductData.categoryTypeId,
      inStock: newProductData.inStock,
      isNew: newProductData.isNew,
    });
    this.saveProducts();
  }

  deleteProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
    this.saveProducts();
  }

  archiveProduct(id: string) {
    for (let product of this.products) {
      if (product.id === id) {
        product.inStock = false;
      }
    }
    this.saveProducts();
  }

  unarchiveProduct(id: string) {
    for (let product of this.products) {
      if (product.id === id) {
        product.inStock = true;
      }
    }
    this.saveProducts();
  }

  private saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
