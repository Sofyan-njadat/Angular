import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'SignUp', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'Products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
