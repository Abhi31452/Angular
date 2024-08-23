import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {


  constructor(private router: Router) { }

  goToMenus() {
    this.router.navigate(['/menus']);
  }

}
