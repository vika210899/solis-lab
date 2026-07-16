import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { App } from './app';
import { PrivacyComponent } from './app-footer/privacy-component/privacy-component';
import { DeliveryComponent } from './app-footer/delivery-component/delivery-component';
import { ReturnComponent } from './app-footer/return-component/return-component';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './app-footer/about-component/about-component';

export const routes: Routes = [
  { path: 'privacy', component: PrivacyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'return', component: ReturnComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
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
