import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './customclasses/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  deptCodes = ['LD', 'JS', 'PHP', 'HR', 'JAVA'];

  employeeForm:FormGroup;

  constructor( public activeRoute:ActivatedRoute){
    const routeparameter =this.activeRoute.snapshot.params['empd']

    this.employeeForm=new FormGroup({
      empId:new FormControl( routeparameter,[Validators.required]),
      empName:new FormControl( "",[Validators.required , Validators.pattern("[A-Za-z]") , Validators.min(2)]),
      basicsal:new FormControl( "",[Validators.required ,Validators.pattern("[0-9]*")]),
      deptCode:new FormControl( "JS",[Validators.required]),
      joiningDate:new FormControl( "",[Validators.required]),
      experience:new FormControl( "",[Validators.required , Validators.min(0), Validators.max(99)] ),
      secretCode : new FormControl("123", [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      confirmCode : new FormControl()  ,

    });

  }


  get eid(){
    return this.employeeForm.get("empId");
}
get ename(){
    return this.employeeForm.get("empName");
}
get salary(){
  return this.employeeForm.get("basicSalary");
}
get dcode(){
  return this.employeeForm.get("deptCode");
}
get joining(){
  return this.employeeForm.get("joiningDate");
}
get exp(){
  return this.employeeForm.get("experience");
}
get email(){
  return this.employeeForm.get("emailId");
}

get scode(){
  return this.employeeForm.get("secretCode");
}

  collectData(){
    console.log(this.employeeForm);
  }
}
