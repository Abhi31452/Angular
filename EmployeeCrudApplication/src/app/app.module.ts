import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { NeoEmployeeComponent } from './neo-employee/neo-employee.component';
// import { EmployeecardComponent } from './employeecard/employeecard.component';
import { DatePipe } from '@angular/common';
import { AgePipe } from './customPipe/age.pipe';
import { OrderbyPipe } from './CustomPIPES/orderby.pipe';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    EmployeeComponent,
    NeoEmployeeComponent,
    AgePipe,
    OrderbyPipe,
    EmployeeFormComponent
    // EmployeecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [DatePipe],  
  // providers: [
  //   provideClientHydration()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
