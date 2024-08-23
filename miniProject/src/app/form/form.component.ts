import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  UserForm : FormGroup;

  constructor(){
    this.UserForm = new FormGroup({
    firstName : new FormControl( "" , [Validators.required ,Validators.pattern("[A-Za-z]*"),Validators.min(2)]),
    lastName : new FormControl( "" , [Validators.required, Validators.min(3)]),
    age : new FormControl( " ", [Validators.required, Validators.min(2)]),
    phno : new FormControl( " " , [Validators.required , Validators.pattern("[0-9]*"),Validators.min(10)]),
    email :  new FormControl( "", [Validators.required ,Validators.email]),
    password : new FormControl(" " , [Validators.required,Validators.pattern("[A-Za-z]*")])
    });
  }

  get firstName (){
    return this.UserForm.get("firstName");
  }
  get lastName (){
    return this.UserForm.get("lastName");
  }
  get age (){
    return this.UserForm.get("age");
  }
  get phno (){
    return this.UserForm.get("phno");
  }
  get email (){
    return this.UserForm.get("email");
  }
  get password (){
    return this.UserForm.get("password");
  }
 
 
 
  collectData(){
    console.log(this.UserForm);
  }
}
