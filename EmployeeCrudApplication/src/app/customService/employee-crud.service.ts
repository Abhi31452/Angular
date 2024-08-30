import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../customclasses/employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {


  url2="http://localhost:4001";
    url1="http://localhost:4001/employees"

    constructor(public httpclient: HttpClient, public router: Router) {}

 
    addEmployee(employee:Employee){
      const obs= this.httpclient.post(`${this.url2}/add`,employee);// backend // secure : url, body
      return obs;
    }

  getEmployeeById(_id:number){
    //  const obs=this.http.get(`${this.url1}/${_id}`) //for jsonserver as a backend
      const obs=this.httpclient.get(`${this.url2}/get/${_id}`)
      return obs;
    }

  getAllEmployee(){
    const obs =this.httpclient.get(`${this.url1}/getAll`);
    return obs;
  }
  updateEmployee(employee: Employee) {
    //const obs=this.http.put(`${this.url1}/${employee._id}`,employee)
    const obs= this.httpclient.put(`${this.url2}/update/${employee.empid}`,employee);// backend // secure : url, body
    return obs;
  }
  
  deleteById(id:number){
    const obs = this.httpclient.delete(`${this.url1}/deleteByid/${id}`)
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
//   }
//   getEmployeeById(_id: number) {
//     return this.httpclient.get(this.url1 + '/' + _id);
//   }

//   updateEmployee(employee: any) {
//     console.log(employee);
//     const form = new FormData();
//     form.append('_id', employee._id);
//     form.append('name', employee.name);
//     form.append('password', employee.password);
//     form.append('email', employee.email);
//     form.append('dept', employee.dept);
//     form.append('joiningDate', employee.joiningDate);
//     form.append('address', employee.address);
//     form.append('profilePic', employee.profilePic);
//     console.log(employee);

//     const myReq = this.httpclient.patch(
//       this.url1 +' update/' + employee._id,
//       form
//     );
//     myReq.subscribe({
//       next: (success) => {
//         alert('Employee with id ' + employee._id + ' updated');
//         this.router.navigate(['employees']);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
}
}