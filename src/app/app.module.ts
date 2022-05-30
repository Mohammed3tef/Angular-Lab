import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StringSlicePipe } from './string-slice.pipe';
import { FavouriteProductComponent } from './product/favourite-product/favourite-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import {HttpClientModule} from '@angular/common/http';
import { AllImagesComponent } from './all-images/all-images.component';
import { UserDetailsComponent } from './user-details/user-details.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    HeaderContainerComponent,
    TodoListComponent,
    FavouriteProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    StringSlicePipe,
    ProductCardComponent,
    LoginComponent,
    AddProductComponent,
    AllImagesComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
