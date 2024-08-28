import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usname="";
  password="";
  constructor() { }
  loginflag=false;

  login(uname:string ,pass:string):boolean{
    this.usname=uname;
    this.password=pass;
    if(uname=="abhi" && pass =="abhi123")
      { 
        this.loginflag=true;
      }else if( uname=="admin" && pass=="admin123"){
        this.loginflag=true;
      }
     return this.loginflag;
  }

  
}
