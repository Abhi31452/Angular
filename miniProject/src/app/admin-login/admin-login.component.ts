import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../customsServices/adminservice.service';
import { NgForm } from '@angular/forms';

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

  // onSubmit(form: any) {
  //   if (form.valid) {
      
  //     if(this.admin.username == "admin" && this.admin.password =="admin123")
  //     {  
  //       alert('Form Submitted!');
  //               console.log('Form Submitted!', this.admin);
  //     }else{
  //              alert('username or password is incorrect ');
  //            console.log(" username or password is incorrect ");
  //     }
  //   }
  // }
   flag=false;
message="";
  constructor( public router : Router, public adminservice: AdminserviceService){  }
  
 onSubmit(loginForm:NgForm){
  console.log(loginForm.value);
  // this.flag = this.adminservice.login(loginForm.value.user,loginForm.value.pass)
  this.flag = this.adminservice.login(this.admin.user,this.admin.pass)
  console.log(this.flag);
  if(this.flag){
    this.router.navigate(['../home'])}
    else{
      this.message ="Incorrect Login";
    }
 }
}

