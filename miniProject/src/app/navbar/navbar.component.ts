import { Component } from '@angular/core';
import { AdminserviceService } from '../customsServices/adminservice.service';
import { Router } from '@angular/router';
import { UsersService } from '../customsServices/users.service';
import { LogoutService } from '../customsServices/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
image={src:"chinese.png"}
username="";

constructor(public admin: AdminserviceService ,public logout:LogoutService,public user:UsersService,public router:Router)
{
 this.username=this.user.usname;
}





}
