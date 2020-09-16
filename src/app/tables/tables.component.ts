import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TransactionService } from '../service/transaction.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public searchKey:string;
  public   values = '';
public userService: any;
public ts:any; 
//  pager: any = {};
//  pagedItems: any[];
 public transactions:Array<ModelNS.Transaction>=new Array<ModelNS.Transaction>();

ngOnInit() {
  
  }
  
   constructor(private us: UserService,private tService:TransactionService, private router: Router)
   {
       this.userService = this.us;
       this.ts=this.tService;
       this.transactions = this.ts.transactions;

   }

 add(){
     this.ts.editTrans=null;
     this.router.navigate(["transaction"]);
   }
edit(trans:ModelNS.Transaction)
{
  this.ts.edit(trans);
  this.router.navigate(["transaction"]);
  
}
remove(trans:ModelNS.Transaction) {
      this.ts.deleteTransaction(trans);
      //this.transactions.splice(id, 1);
    }
 search()
  {
 this.transactions = this.ts.transactions.filter(i => i.user.name.indexOf(this.searchKey) > -1 || i.user.phone.indexOf(this.searchKey) > -1 );
  }
  
onKey(event: any) { // without type info
    this.searchKey = event.target.value;
    this.search();
  }

// setPage(page: number) {
//         if (page < 1 || page > this.pager.totalPages) {
//             return;
//         }

//         // get pager object from service
//         this.pager = this.ts.getPager(this.transactions.length, page);

//         // get current page of items
//         this.pagedItems = this.ts.slice(this.pager.startIndex, this.pager.endIndex + 1);
//     }
}
