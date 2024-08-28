import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenusComponent } from './menus/menus.component';
import { Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '/menus', component: MenusComponent }, // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    MenusComponent,
    CardsComponent,
    FormComponent,
    AdminLoginComponent,
    FoodItemComponent,
    HomeComponent,
    SignupComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ,ReactiveFormsModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
