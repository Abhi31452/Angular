import { Component } from '@angular/core';
import { CounterserviceService } from '../customService/counterservice.service';

@Component({
  selector: 'app-neosoft',
  templateUrl: './neosoft.component.html',
  styleUrl: './neosoft.component.css',

  providers:[CounterserviceService]
})
export class NeosoftComponent {

constructor(public counterS:CounterserviceService){
  console.log("NeosoftComponent ");
}

ngOnInit():void {
  console.log("NeosoftComponent Init phase...");
}

ngOnDestroy():void {
  console.log("NeosoftComponent Destroy phase...");
    
}
}
