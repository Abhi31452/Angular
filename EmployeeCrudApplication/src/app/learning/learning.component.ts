import { Component } from '@angular/core';
import { log } from 'node:console';
import { DatePipe } from '@angular/common';


// interface sub {
//   sub1: number;
//   sub2: number;
//   sub3: number;
// }


@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {

  // message:String;v //its object , need to initialse it 

  mssg =" Abhishek ...";
  companylocation ="";
  comploc="";
static counter=0;
classRef = LearningComponent;
constructor( private datePipe : DatePipe){
  LearningComponent.counter++;
  console.log("Constructor Called");
  setTimeout(()=>this.mssg="Your base location is ", 4000)
}

loc = ['Dadar' ,' Parel' , 'Rabale'];
  display(){
    console.log(this.mssg);
    console.log(this.companylocation);
    console.log(this.comploc);
    
  }

  getnode(node:any){
    console.log(node);
    console.log(node.innerText); 
  }
  getcal(node:any){
    console.log(node);
    console.log(node.value); 
  }


  logoObject = {
    path:"https://media.istockphoto.com/id/1333772664/photo/digital-eye-wave-lines-stock-background.jpg?s=1024x1024&w=is&k=20&c=QKEfBkEnbSyXcPzIsk4Bv8UhVshwkcgu0-aGmMN7Qz4=",
    alternatemsg: 'logo',
    height: 350,
    width: 350,
  };


  subjects= {
    sub1: 0,
    sub2: 0,
    sub3: 0,
  };

  total: number = 0;
  percentage: number = 0;

  setMarks() {
    this.total = this.subjects.sub1 + this.subjects.sub2 + this.subjects.sub3;
    this.percentage = (this.total / 300) * 100;
    console.log(this.percentage);
  }

  getCategory(): string {
    if (this.percentage >= 70) {
      return 'distinction';
    } else if (this.percentage >= 60 && this.percentage < 70) {
      return 'firstClass';
    } else if (this.percentage >= 50 && this.percentage < 60) {
      return 'pass';
    } else {
      return 'fail';
    }
  }
  
  VoterAge:any;

  salary =[123322334.43 ,423.43 ,5335.35,33233.653,243225,35654765];
  
today =new Date();

test(){
  let newFormat=this.datePipe.transform(this.today, "fullDate")
  console.log(newFormat);
  
}

birthDates=[new Date('12 Jan 2024'), new Date('11 Jan 2024'), new Date('10 Dec 2023')]
}
