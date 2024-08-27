import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor() {
    console.log("service called");
   }

  loginFlag = false;
  login(uname:string , pass:string){
    this.loginFlag=false;
    if(uname=='admin' && pass=='admin123'){
      // console.log(uname,pass);      
      this.loginFlag=true;
    }
    return this.loginFlag;
  }
}
