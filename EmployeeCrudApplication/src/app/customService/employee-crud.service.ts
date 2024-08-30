import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {
  url2="http://localhost:4000";
    url1="http://localhost:4000/employees"

  constructor(public httpclient:HttpClient) { }

  addEmployee(employee:Employee){
    console.log(employee,'fun');
    
    const obs=this.httpclient.post(`${this.url2}/employees/add`,employee);// secure : url, body
    obs.subscribe({
      next:(success)=>console.log(success),
      error:(err)=>console.log(err)
    });
  }

  getAllEmployee(){
    const obs =this.httpclient.get(`${this.url1}/getAll`);
    return obs;
  }

  fileUpload(file:File){
    let formData=new FormData();
    formData.append("employee_pic",file)
    console.log(file);
    const obs= this.httpclient.post(`${this.url2}/fileadd`,formData); 
    obs.subscribe({
      next:(data)=>console.log(data),
      error:(err)=>console.log(err)
    })
  }
}
