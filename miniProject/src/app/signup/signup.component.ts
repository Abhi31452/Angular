import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signup :FormGroup;

  constructor(){
    this.signup = new FormGroup({
      fname:new FormControl('', [Validators.required]),
      lname: new FormControl ('',[Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(1)]),
      phno:  new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl( '', [Validators.required]),
      confirmPass: new FormControl('', [Validators.required])
     });
  }

collectdata(form: FormGroup): void {
  if (form.valid) {
    console.log('Form Data: ', form.value);
  } else {
    console.error('Form is invalid');
  }
}

// Custom validator to check if passwords match
passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
  return form.get('pass')?.value === form.get('confirmPass')?.value ? null : { mismatch: true };
}
}
