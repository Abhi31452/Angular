import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  admin = {
    username: '',
    password: '',
  };

  onSubmit(form: any) {
    if (form.valid) {
      
      if(this.admin.username == "admin" && this.admin.password =="admin123")
      {  
        alert('Form Submitted!');
                console.log('Form Submitted!', this.admin);
      }else{
               alert('username or password is incorrect ');
             console.log(" username or password is incorrect ");
      }
    }
  }
  
 
}

