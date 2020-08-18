import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
public data: any;
  constructor(private us: UserService) {
    this.data = this.us.admin;
   }
  ngOnInit() {
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.data.isAutenticate= !this.data.isAutenticate;
  }
  signin() {
    this.data.isAutenticate=true; 
  }
  signout() {
    this.data.isAutenticate=false; 
  }
}
