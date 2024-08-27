import { Component } from '@angular/core';
import { CounterserviceService } from '../customService/counterservice.service';

@Component({
  selector: 'app-webworks',
  templateUrl: './webworks.component.html',
  styleUrl: './webworks.component.css'
})
export class WebworksComponent {

  constructor(public counter:CounterserviceService){}
  

}
