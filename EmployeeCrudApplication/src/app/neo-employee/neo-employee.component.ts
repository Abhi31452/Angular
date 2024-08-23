import { Component } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-neo-employee',
  templateUrl: './neo-employee.component.html',
  styleUrl: './neo-employee.component.css'
})
export class NeoEmployeeComponent {
constructor(){
  this.getemployee();
}
neoemployee:Employee[]=[];
getemployee(){
  this.neoemployee=[
new Employee(101,"Hari Kumazr",new Date('12-aug-2019'),35000,"Java Script" ,20,new Date('24-Aug-1980') ,0 ),
new Employee(102,"Harish raza",new Date('09-aug-2024'),11000.3443,"react", 2 ,new Date('18-feb-1999'), 0),
new Employee(103,"Parth Kumazr",new Date('12-aug-2012'),43000,"php", 10 ,new Date('30-may-1990') ,0),
new Employee(104,"Mayur Argade",new Date('10-july-2024'),15000.354,"UI/UX", 3 ,new Date('24-july-2000')),
new Employee(105,"Aniket ramteke",new Date('23-Jan-2023'),11000,"java", 4 ,new Date('09-dec-1999')),
new Employee(106,"Deepak kanojiya",new Date('18-jan-2024'),10000.54324,"dotnet", 1 ,new Date('02-oct-2002')),
  ]
}
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
