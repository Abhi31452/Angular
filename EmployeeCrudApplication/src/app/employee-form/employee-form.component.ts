import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './customclasses/custom-validator';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Employee } from '../customclasses/employee';
import { EmployeeCrudService } from '../customService/employee-crud.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  deptCodes = ['LD', 'JS', 'PHP', 'HR', 'JAVA'];
  updateMode: boolean = false;
  employeeForm: FormGroup;
  employee = new Employee
  currentRoute:string | undefined ="";

  constructor(public activeRoute: ActivatedRoute, public empcrud: EmployeeCrudService ,private router:Router) {
    // const routeparameter = this.activeRoute.snapshot.params['empid']

    // // const routerParameter=this.activeRoute.snapshot.paramMap.get('empId');
    // if(routeparameter!=null){
    //    let _id=parseInt(routeparameter);
    //    this.getEmployee(_id);

    this.currentRoute=this.activeRoute.snapshot.routeConfig?.path;
   const routerParameter=this.activeRoute.snapshot.paramMap.get('empId');
   if(routerParameter!=null){
      let _id=parseInt(routerParameter);
      this.getEmployee(_id);
     }
    this.employeeForm = new FormGroup({
      empId: new FormControl("", [Validators.required]),
      empName: new FormControl("", [Validators.required, Validators.pattern("[A-Za-z]*"), Validators.min(2)]),
      basicsal: new FormControl("", [Validators.required, Validators.pattern("[0-9]*")]),
      deptCode: new FormControl("JS", [Validators.required]),
      joiningDate: new FormControl("", [Validators.required]),
      experience: new FormControl("", [Validators.required, Validators.min(0), Validators.max(99)]),
      secretCode: new FormControl("123", [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
      confirmCode: new FormControl(),
      employee_pic:new FormControl("",[Validators.required])

    });

  }


  get eid() {
    return this.employeeForm.get("empId");
  }
  get ename() {
    return this.employeeForm.get("empName");
  }
  get salary() {
    return this.employeeForm.get("basicSalary");
  }
  get dcode() {
    return this.employeeForm.get("deptCode");
  }
  get joining() {
    return this.employeeForm.get("joiningDate");
  }
  get exp() {
    return this.employeeForm.get("experience");
  }
  // get email(){
  //   return this.employeeForm.get("emailId");
  // }

  get scode() {
    return this.employeeForm.get("secretCode");
  }
  // getById() {
  //   //get Data By Id
  //   let paramEmpId = this.activeRoute.snapshot.params['empId'];
  //   if (paramEmpId) {
  //     this.empcrud.getEmployeeById(paramEmpId).subscribe({
  //       next: (data: any) => {
  //         this.employeeForm.get('_id')?.setValue(data._id);
  //         this.employeeForm.get('name')?.setValue(data.name);
  //         this.employeeForm.get('password')?.setValue(data.password);
  //         this.employeeForm.get('confirmPassword')?.setValue(data.password);
  //         this.employeeForm.get('email')?.setValue(data.email);
  //         this.employeeForm.get('joiningDate')?.setValue(data.joiningDate);
  //         this.employeeForm.get('dept')?.setValue(data.dept);
  //         this.employeeForm.get('address')?.setValue(data.address);

  //         this.updateMode = true;
  //         // this.employeeForm.get('profilePic')?.setValue(data.)
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }
  // }

  getEmployee(_id:number){
    const obs=this.empcrud.getEmployeeById(_id)
      obs.subscribe({        
        next:(data)=>{ 
         this.employee= data as Employee;
         let jd=this.employee.joiningDate;  
        //  this.employee.joiningDate=jd.slice(0,jd.length-2); 
         this.employeeForm.patchValue(this.employee);
        },
        error:(error)=>console.log(error)
      });
  } 

  // collectData() {

  //   let data = {
  //     _id: this.employeeForm.value._id,
  //     name: this.employeeForm.value.name,
  //     password: this.employeeForm.value.password,
  //     email: this.employeeForm.value.email,
  //     joiningDate: this.employeeForm.value.joiningDate,
  //     dept: this.employeeForm.value.dept,
  //     address: this.employeeForm.value.address,
  //     profilePic: this.employeeForm.value.profilePic,
  //   };
  //   if (this.updateMode) this.empcrud.updateEmployee(data);
  //   else {
  //   // this.empcrud.addEmployee(data);
    

  //   console.log(this.employeeForm.value);
  //   this.employee = this.employeeForm.value;
  //   // console.log( this.activeRoute.snapshot.routeConfig?.path);
  //   // if(this.activeRoute.snapshot.routeConfig?.path=="addEmployee")
  //   this.empcrud.addEmployee(this.employeeForm.value);}
  // }

  collectData(){
    //console.log(this.employeeForm)
    this.employee=this.employeeForm.value;
  // console.log(this.employee);
   if(this.currentRoute=="addemployee"){
      const obs=this.empcrud.addEmployee(this.employee); // crud service
      obs.subscribe({
        next:(data)=>{ 
         this.employee= data as Employee; 
          window.alert(`Employee with id ${this.employee.empid} added successfully...`); 
          this.router.navigate(["/employees"])
        },
        error:(error)=>console.log(error)
      });
   }
   else{
    const obs=this.empcrud.updateEmployee(this.employee); // crud service
    obs.subscribe({
      next:(data)=>{ 
        //console.log("update: ",data);  
        window.alert(`Employee with id ${this.employee.empid} updated successfully...`); 
        this.router.navigate(["/employees"])
      },
      error:(error)=>console.log(error)
    });
   }
   }
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.empcrud.fileUpload(file);
    console.log("file coming",file);
    
  }
}
