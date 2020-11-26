import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { ProductsComponent } from './products/products.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
 
  {path:'',component:HomeComponent},
  
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddProductModelComponent},
  {path:'productsdetails/:id',component:ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
