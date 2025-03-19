import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: SignupComponent },
  { path: "signup", component: SignupComponent },


  {
    path: "home", component: HomeComponent, children: [

      { path: "category", component: CategoryComponent },
      { path: "product", component: ProductComponent },
      { path: "AddCategory", component: AddCategoryComponent },
      { path: "AddProduct", component: AddProductComponent },

      { path: "", pathMatch: "full", component: CategoryComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
