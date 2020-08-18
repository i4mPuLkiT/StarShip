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
    this.data = this.us;
   }
  ngOnInit() {
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    //this.isExpanded = !this.isExpanded;
    this.data.isAutenticate= !this.data.isAutenticate;
  }

  isAutenticate = false;
  signin() {
    this.data.isAutenticate=true; 
    //this.isAutenticate = true;
  }
  signout() {
    this.data.isAutenticate=false; 
    //this.isAutenticate = false;
  }
}
