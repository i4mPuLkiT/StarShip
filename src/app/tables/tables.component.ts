import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public userService: any;

ngOnInit() {
  }
   public transactions: any;
   constructor(private us: UserService, private router: Router){
         this.userService = this.us;

       this.transactions = this.userService.transactionlist;
       
   }

  

}
