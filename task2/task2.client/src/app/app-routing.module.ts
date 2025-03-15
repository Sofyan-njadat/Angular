import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

const routes: Routes = [

  { path: "category", component: CategoryComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "productDetails/:id", component: ProductsDetailsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
