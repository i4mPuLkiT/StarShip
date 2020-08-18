import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public userService: any;
public email:string;
public password:string;
  constructor(private us: UserService, private router: Router ) {
    this.userService = this.us;
   }

  ngOnInit() {
  }
  signin()
  {
      if((this.email == this.userService.admin.email 
      || this.email == this.userService.admin.phone)
      && this.password == this.userService.admin.password 
      )
      {
          this.userService.admin.isAuthenticate=true;
          this.router.navigate(["home"]);
      }
      else
      {
         this.userService.admin.isAuthenticate=false;
         console.log("Login Failed! " + this.email + "    " +this.password );     
          //this.router.navigate(["login"]);   
        
        
      }
  }
//[routerLink]='["/home"]'
}