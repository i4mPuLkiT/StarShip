 import { Injectable } from '@angular/core';
import * as ModelNS from './model/model';

 @Injectable()
export class UserService {
  constructor() {   }
  public totalDebit:number = 0;
  public totalCredit:number = 0;

public transactions:Array<ModelNS.Transaction>=new Array<ModelNS.Transaction>();
  public newTransaction(trans:ModelNS.Transaction){
    
    if( trans.type == "Dr")
    {
      this.totalDebit = this.totalDebit + trans.amount;
    }
    if( trans.type == "Cr")
    {
      this.totalCredit =this.totalCredit + trans.amount;
    }
    this.transactions.push(trans);
    //alert(this.transactions.length);
  }
  public admin:ModelNS.Appuser = 
         {
        "id": 1,
        "name": "Adminstrator",
        "email": "admin@brolia.com",
        "phone": "1",
        "password":"1",
        "isAuthenticate": true
         }
 
 
}