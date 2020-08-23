import { Injectable } from '@angular/core';
import * as ModelNS from './model/model';
import {observable} from "rxjs";
import * as _ from "lodash";

 @Injectable()
export class UserService {
  constructor() {   }

public transactions:Array<ModelNS.Transaction>=new Array<ModelNS.Transaction>();
  public newTransaction(trans:ModelNS.Transaction){
   
    this.transactions.push(trans);
  }
  get getTotalDebit():number
  {
    if(this.transactions.length >0 && this.transactions.find(itm=>itm.type=="Dr"))
    {
     return   _.sum(_.map(this.transactions, i=> i.type=="Dr" && Number(i.amount)));
    }
    else
    {
      return 0;    
    }
  };
  get getTotalCredit():number
  {
    if(this.transactions.length >0 && this.transactions.find(itm=>itm.type=="Cr"))
    {
    return  _.sum(_.map(this.transactions, i=> i.type=="Cr" && Number(i.amount)));
    }
    else
    {
      return 0;    
    }
  };

  get getTotalCreditPercentage():number
  {
    if(this.getTotalCredit >0 )
    {
    return  _.round(((this.getTotalCredit/(this.getTotalDebit + this.getTotalCredit))*100),2);
    }
    else
    {
      return 0;    
    }
  };
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
