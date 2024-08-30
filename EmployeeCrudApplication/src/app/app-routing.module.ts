import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import path from 'path';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebworksComponent } from './webworks/webworks.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { authenticationcard } from './Guards/guard';

const routes: Routes = [

  {
    path: "",
    redirectTo : "home",
    pathMatch : 'full'
  },
  {
    path: "home",
    component: HomeComponent,
    children :[
      {
      path:'neosoft',
      component:NeosoftComponent
      },
      {
        path:'webworks',
        component:WebworksComponent
        },

      ]
  },
  {
    path :"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"editemployee/:empId",
    component: EmployeeFormComponent
  },
  {
    path: 'neoemployees',
    component: NeoEmployeeComponent
  },
  {
    path : 'addEmployee',
    component : EmployeeFormComponent,
    // canActivate:[authenticationcard]
  },
  {
    path:'**',
    component:ViewNotFoundComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

