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
public creds={
    username:"",
    password:""
};
  constructor(private us: UserService, private router: Router ) {
    this.userService = this.us;
   }

  ngOnInit() {
  }
  signin()
  {
      //alert("inputs " + this.creds.username + "    " +this.creds.password); 
      if((this.creds.username == this.userService.admin.email 
      || this.creds.username == this.userService.admin.phone)
      && this.creds.password == this.userService.admin.password 
      )
      {
        //alert("Login Failed! " + this.creds.username + "    " +this.creds.password);     
          this.userService.admin.isAuthenticate=true;
          this.router.navigate(["home"]);
      }
      else
      {
         this.userService.admin.isAuthenticate=false;
         //alert("Login Failed! " + this.creds.username + "    " +this.creds.password);     
          //this.router.navigate(["login"]);   
        
        
      }
  }
//[routerLink]='["/home"]'
}