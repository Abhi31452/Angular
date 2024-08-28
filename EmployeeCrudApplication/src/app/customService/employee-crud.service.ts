import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {
  url2="http://localhost:4000/employees/add"

  constructor(public http:HttpClient) { }

  addEmployee(employee:Employee){
    console.log(employee,'fun');
    
    const obs=this.http.post(this.url2,employee);// secure : url, body
    obs.subscribe({
      next:(success)=>console.log(success),
      error:(err)=>console.log(err)
    });
  }
}
