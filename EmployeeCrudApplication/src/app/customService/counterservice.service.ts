import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  constructor() { }
  public count =0;

   incrementCounter(){ this.count++;  }
   getCounter(){return this.count;}

}
