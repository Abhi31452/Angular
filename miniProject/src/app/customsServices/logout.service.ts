import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor( public user:UsersService ,public router:Router) { }
flag=false;

  logout(user:any){
   if( this.user.usname!="" ){
    if(window.confirm("Wanna Logout")){
      this.user.usname="";
    this.user.password=""; 
    this.flag=true;
    user.loginflag=false;
    }
   }

  if(this.flag){
    console.log(this.flag);
    
    this.router.navigate(['../home'])}
    else{
      window.alert("something  went wrong")
    }
  }
}
