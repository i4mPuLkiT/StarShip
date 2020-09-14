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
errorMessage: string = "";
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
    this.userService.authenticateUser(this.creds.username,this.creds.password);
    if(this.userService.loggedInUser.isAuthenticate)
    {
      this.router.navigate(["home"]);
    }
      else
      {
        this.errorMessage = "Incorrect Username and Passs";
      }
  }
}