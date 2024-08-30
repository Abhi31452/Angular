import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
// import { EmployeecardComponent } from './employeecard/employeecard.component';
import { DatePipe } from '@angular/common';
import { AgePipe } from './customPipe/age.pipe';
import { OrderbyPipe } from './CustomPIPES/orderby.pipe';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { HomeComponent } from './home/home.component';
import { NeosoftComponent } from './neosoft/neosoft.component';
import { WebworksComponent } from './webworks/webworks.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    NeoEmployeeComponent,
    AgePipe,
    OrderbyPipe,
    EmployeeFormComponent,
    ViewNotFoundComponent,
    HomeComponent,
    NeosoftComponent,
    WebworksComponent,
    AdminLoginComponent
    // EmployeecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [DatePipe, provideHttpClient(withFetch())],
  // providers: [
  //   provideClientHydration()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
