import { Component, Input } from '@angular/core';
import { UserService } from '../customService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input()
brandname = "";

constructor(public userservice:UserService ,private router:Router){
  console.log(".........in navbar userservice ,.........");
  
}
}
