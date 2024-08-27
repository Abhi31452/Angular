import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    console.log(" ............in user service......");
  }
  public loginflag = false;

  login(uname: string, pass: string) {
    console.log(uname, pass);

    this.loginflag = false;
    if (uname == "admin" && pass == "admin123") {
      this.loginflag = true;
      console.log('valid');

    }
    return this.loginflag;
  }

}
