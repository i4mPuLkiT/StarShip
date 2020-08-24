import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
 public transactions:Array<ModelNS.Transaction>=new Array<ModelNS.Transaction>();

ngOnInit() {
  }
  
   constructor(private us: UserService, private router: Router){
       this.transactions = this.us.transactions;
       
   }
edit(trans:ModelNS.Transaction)
{
  this.us.edit(trans);
  this.router.navigate(["transaction"]);
  
}
remove(trans:ModelNS.Transaction) {
      this.us.deleteTransaction(trans);
      //this.transactions.splice(id, 1);
    }
    
  

}
