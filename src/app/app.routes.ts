import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { App } from './app';
export const routes: Routes = [
  //   { path: '', component: App },
  //   { path: 'admin-page', component: Admin },
];

//   {
//     path: 'products',
//     loadChildren: () =>
//       import('../app/products/product-details/product.module').then((m) => m.ProductModule),
//   },
//   //   { path: '', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
