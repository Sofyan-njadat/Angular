import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfilComponent } from './edit-profile/edit-profil.component';
import { VoucherComponent } from './voucher/voucher.component';
import { EdieVoucherComponent } from './edie-voucher/edie-voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    AddProductComponent,
    CategoryComponent,
    HomeComponent,
    ProductComponent,
    SignupComponent,
    EditCategoryComponent,
    EditProductComponent,
    ProfileComponent,
    EditProfilComponent,
    VoucherComponent,
    EdieVoucherComponent,
    AddVoucherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
