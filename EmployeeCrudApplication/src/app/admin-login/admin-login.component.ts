import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
onSubmit(_t9: NgForm) {
throw new Error('Method not implemented.');
}
password: any;
username: any;
message:string="";
constructor( public router: Router){

}
collectData(form:any){
  console.log(form.value);
  this.form(form.value.username ,form.value.password);
}
form(username :string,password :string){
 if(username=="admin" && password=="admin123"){
  this.router.navigate(['../home']);
 }else{
  this.message="Incorrect username & password"
 }
  
}

}
