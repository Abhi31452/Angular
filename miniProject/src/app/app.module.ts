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
import { ReactiveFormsModule } from '@angular/forms';

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
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
