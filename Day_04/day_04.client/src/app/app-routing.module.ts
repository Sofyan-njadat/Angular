import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProfileComponent } from './profile/profile.component';
import { VoucherComponent } from './voucher/voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { EdieVoucherComponent } from './edie-voucher/edie-voucher.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: SignupComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "home", component: HomeComponent, children: [
      { path: "category", component: CategoryComponent },
      { path: "product", component: ProductComponent },
      { path: "AddCategory", component: AddCategoryComponent },
      { path: "AddProduct", component: AddProductComponent },
      { path: "Edit-Category/:id", component: EditCategoryComponent },
      { path: "EditProduct/:id", component: EditProductComponent },
      { path: "profile", component: ProfileComponent },
      { path: "voucher", component: VoucherComponent },
      { path: "AddVoucher", component: AddVoucherComponent },
      { path: "editVoucher", component: EdieVoucherComponent },
      { path: "", pathMatch: "full", component: CategoryComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
