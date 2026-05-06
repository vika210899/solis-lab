import { Injectable } from '@angular/core';
import { PRODUCT_LIST } from '../product-list';
import { type NewProduct, type Product } from './product-details/product.module';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products = PRODUCT_LIST;

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

  getSelectedProduct(productId: string) {
    return this.products.find((product: Product) => product.id === productId);
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

  private saveProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
