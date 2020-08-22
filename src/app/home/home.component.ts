import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public userService: any;
  constructor(private us: UserService, private router: Router) { 
    this.userService = this.us;

  }

  ngOnInit() {
  }

}