import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public userService: any;

  constructor(private us: UserService, private router: Router ) { 
        this.userService = this.us;

  }

  ngOnInit() {
  }

}