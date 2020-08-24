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
edit(id: any)
{

  this.router.navigate(["transaction"]);
  
}
remove(id: any) {
      
      this.transactions.splice(id, 1);
    }
    
  

}
