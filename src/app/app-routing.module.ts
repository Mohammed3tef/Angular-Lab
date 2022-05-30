import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AllImagesComponent } from './all-images/all-images.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'product-list', component:ProductListComponent  },
  { path: 'prod-details/:id', component: ProductDetailsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'all-photos', component: AllImagesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'product-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
