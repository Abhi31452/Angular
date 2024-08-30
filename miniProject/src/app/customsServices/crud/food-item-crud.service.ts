import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodItemCrudService {
url ="http://localhost:4000"
  constructor(public httpclient:HttpClient) { }

  getAllfoodItem(){
    const obs= this.httpclient.get(`${this.url}/getAll`);
    return obs;
  }

}
