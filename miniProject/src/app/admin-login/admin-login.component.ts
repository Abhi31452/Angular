import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../customsServices/adminservice.service';
import {  NgForm } from '@angular/forms';
import { UsersService } from '../customsServices/users.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  admin = {
    user: '',
    pass: '',
  };

  flag=false;
message="";
  constructor( public router : Router,public user:UsersService, public adminservice: AdminserviceService){  }
  
 onSubmit(loginForm:NgForm){
  // console.log(loginForm.value);
  // this.flag = this.adminservice.login(loginForm.value.user,loginForm.value.pass)
  // this.flag = this.adminservice.login(this.admin.user,this.admin.pass)
  // console.log(this.flag);


    this.flag=this.user.login(loginForm.value.user ,loginForm.value.pass);
      // console.log(loginForm.value.user ,loginForm.value.pass);
    if(this.flag){
      console.log(this.flag);
      
      this.router.navigate(['../home'])}
      else{
        this.message ="Incorrect Login";
      }
  }
}

