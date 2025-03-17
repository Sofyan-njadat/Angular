import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: RegesterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regester', component: RegesterComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
