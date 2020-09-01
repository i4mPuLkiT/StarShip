import { Injectable } from '@angular/core';
import * as ModelNS from '../model/model';
import {observable} from "rxjs";
import * as _ from "lodash";

@Injectable()
export class TransactionService {
    constructor() { }
public editTrans:ModelNS.Transaction;
public transactions:Array<ModelNS.Transaction>=new Array<ModelNS.Transaction>();


  public newTransaction(trans:ModelNS.Transaction){
    this.editTrans=null;
    //alert(Math.max(...this.transactions.map(o => o.id), 1));
    // trans.id=this.transactions.max(i=>i.id) +1;
    //TODO = optimization required
    if(this.transactions.length>0)
    {
      trans.id=this.transactions[this.transactions.length-1].id + 1;
    }
    else
    {
      trans.id=1;
    }

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
   get getTotalDebitPercentage():number
  {
    if(this.getTotalDebit >0 )
    {
    return  _.round(((this.getTotalDebit/(this.getTotalDebit + this.getTotalCredit))*100),2);
    }
    else
    {
      return 0;    
    }
  };

  edit(trans:ModelNS.Transaction)
  {
    this.editTrans=trans;
  }
  editTransaction(trans:ModelNS.Transaction){
    if(this.transactions.length>0)
    {
      //TODO = optimization required
         this.transactions.find(f=>f.id==trans.id).amount=trans.amount;
         this.transactions.find(f=>f.id==trans.id).type=trans.type;
         this.transactions.find(f=>f.id==trans.id).description=trans.description;
    } 
}
 deleteTransaction(trans:ModelNS.Transaction){
    if(this.transactions.length>0)
    {
      //TODO = optimization required
      for (var i in this.transactions) {
      if (this.transactions[i].id == trans.id) {
        this.transactions.splice(Number(i),1);
        break; //Stop this loop, we found it!
     }
      }
    } 
}
}