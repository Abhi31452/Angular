import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../customService/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

password: any;
username: any;
message:string="";
flag=false;

constructor( public router: Router ,public userservice : UserService){}
collectData(loginForm:NgForm){
  console.log(loginForm.value);
   this.flag=this.userservice.login(loginForm.value.uname,loginForm.value.pass);
   if(this.flag)
     this.router.navigate(['../home'])
   else
     this.message="Incorrect username or password"
 }
  
}
