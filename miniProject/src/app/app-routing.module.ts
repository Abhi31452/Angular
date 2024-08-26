import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignupComponent } from './signup/signup.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "home",
    pathMatch :'full'
  },  
  {
    path:"home",
    component:HomeComponent 
  },
  {
    path:"menu",
    component:MenusComponent

  },
  // {
  //   path:"contact"
  //   component :
  // },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"login",
    component:AdminLoginComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
