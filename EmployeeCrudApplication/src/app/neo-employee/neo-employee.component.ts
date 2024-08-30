import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { EmployeeCrudService } from '../customService/employee-crud.service';

@Component({
  selector: 'app-neo-employee',
  templateUrl: './neo-employee.component.html',
  styleUrl: './neo-employee.component.css'
})
export class NeoEmployeeComponent {
  notFoundMessage: string ="";
constructor( public empcrud :EmployeeCrudService){
  this.getAllEmployee();
}
employee:any;


neoemployee:Employee[]=[];
// getemployee(){
//   this.neoemployee=[
// new Employee(101,"Hari Kumazr",new Date('12-aug-2019'),35000,"Java Script" ,20  ),
// new Employee(102,"Harish raza",new Date('09-aug-2024'),11000.3443,"react", 2 ),
// new Employee(103,"Parth Kumazr",new Date('12-aug-2012'),43000,"php", 10  ),
// new Employee(104,"Mayur Argade",new Date('10-july-2024'),15000.354,"UI/UX",0 ),
// new Employee(105,"Aniket ramteke",new Date('23-Jan-2023'),11000,"java",3),
// new Employee(106,"Deepak kanojiya",new Date('18-jan-2024'),10000.54324,"dotnet", 1 ),
//   ]
// }

getAllEmployee(){
  const obs=this.empcrud.getAllEmployee();
  obs.subscribe({
    next:(data)=>{
      this.neoemployee=data as Employee[];
    },
    error:(error)=>console.log(error)
  });
}

deleteEmployee(id:number)
{
  const obs = this.empcrud.deleteById(id);
  console.log(id);
  
  obs.subscribe({
    next:(data)=>{
      window.alert("Employee deleted successfully");
    },
    error:(error)=>console.log(error)
  });
}

toBase64(arr: any) {
  return btoa(
    arr?.reduce(
      (data: any, byte: any) => data + String.fromCharCode(byte),
      ''
    )
  );
}

toUrl(data: any) {
  // console.log(data);
  
  let profilePicBuffer = data.employee_pic?.data.data

  // console.log(`data:image/jpeg;base64,${this.toBase64(profilePicBuffer)}`);
  
  return `data:image/jpeg;base64,${this.toBase64(profilePicBuffer)}`
 
}

getId(_id:string){
  if(_id!=""){
    const obs=this.empcrud.getEmployeeById(parseInt(_id));
    obs.subscribe({
      next:(data)=>{
        this.employee=data as Employee;
        if(this.employee!=null){
          this.neoemployee=[this.employee];
          this.notFoundMessage="";
        }
        else{
          this.notFoundMessage="NOT FOUND"
        }
      },
      error:(error)=>console.log(error)
    });
  }
  else{
    this.getAllEmployee();
  }
}


// @Output()
// emitter=new EventEmitter<number>();

cardStyle={
  width:"20rem",  // camel case 
  backgroundColor:"lightblue"
}
 cardColor="#D27979"
flexclass='d-flex flex-wrap';

cardLinks={
  'card-link':true ,
  'link':true 
}

  criteria ="";
}

