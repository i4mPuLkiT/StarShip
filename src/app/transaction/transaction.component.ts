import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
public userService: any;

  constructor(private us: UserService, private router: Router) { 
        this.userService = this.us;

  }

  ngOnInit() {
    
  }

}