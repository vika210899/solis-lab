// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ProductDetails } from './product-details';

// const routes: Routes = [
//   // { path: 'products', component: ProductListComponent },
//   { path: 'products/:id', component: ProductDetails },
// ];

// @NgModule({
//   declarations: [/*ProductListComponent*/ ProductDetails],
//   imports: [/*CommonModule,*/ RouterModule.forChild(routes)],
//   //   providers: [ProductService],
//   exports: [/*ProductListComponent,*/ ProductDetails],
// })
// export class ProductModule {}

export type Product = {
  id: string;
  name: string;
  picture: string;
  categoryTypeId: string;
  inStock: boolean;
  isNew: boolean;

  // addNewItem() {
  //   //
  // }
};

export type NewProduct = {
  name: string;
  picture: string;
  categoryTypeId: string;
  inStock: boolean;
  isNew: boolean;

  // addNewItem() {
  //   //
  // }
};
