import { Component, OnInit } from '@angular/core';
// import { UserService } from './user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  isAutenticate = false;
  signin() {
    this.isAutenticate = true;
  }
  signout() {
    this.isAutenticate = false;
  }
}
