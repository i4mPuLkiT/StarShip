import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public userService: any;
public creds={
    name:"",
    username:"",
    password:""
};
public user:ModelNS.Appuser = new ModelNS.Appuser();

  constructor(private us: UserService, private router: Router ) { 
        this.userService = this.us;

  }

  ngOnInit() {  }

registerUser()
{ 
   this.userService.AddnewUser(this.user);
   this.router.navigate(["login"]);

}
}