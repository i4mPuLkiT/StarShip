import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public us: any;
  constructor(private uss: UserService, private router: Router) {
    this.us = this.uss;
   }
  ngOnInit() {
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
     this.isExpanded = !this.isExpanded;
  }
  signin() {
    this.router.navigate(["login"]);
  }
  signout() {
    this.us.admin.isAuthenticate=false; 
      this.router.navigate(["login"]);

  }
  homeclick(){
        //  alert("this.us.admin.isAuthenticate =" + this.us.admin.isAuthenticate);
    if(    this.us.admin.isAuthenticate ==  true )
    {
     this.router.navigate(["home"]);

    }
    else{

          this.router.navigate(["login"]);

    }
  }
}
