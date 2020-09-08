import { Injectable } from '@angular/core';
import * as ModelNS from '../model/model';
import { ClientService } from '../service/client.service';
import {observable} from "rxjs";
import * as _ from "lodash";

@Injectable()
export class TransactionService {
    constructor(private cs:ClientService) {
       this.seedData();
       
     }
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
seedData()
{
  let trans1:ModelNS.Transaction = new ModelNS.Transaction ();
  trans1.id=1;
  trans1.amount=100;
  trans1.description="fast food";
  trans1.type="Dr";
  trans1.user=this.cs.clients.find(i=>i.id == 1);
  this.transactions.push(trans1);

  let trans2:ModelNS.Transaction = new ModelNS.Transaction ();
  trans2.id=2;
  trans2.amount=200;
  trans2.description="fast food";
  trans2.type="Cr";
  trans2.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans2);

  let trans3:ModelNS.Transaction = new ModelNS.Transaction ();
  trans3.id=3;
  trans3.amount=500;
  trans3.description="fast food";
  trans3.type="Cr";
  trans3.user=this.cs.clients.find(i=>i.id == 3);
  this.transactions.push(trans3);

  let trans4:ModelNS.Transaction = new ModelNS.Transaction ();
  trans4.id=4;
  trans4.amount=20;
  trans4.description="kurukure";
  trans4.type="Dr";
  trans4.user=this.cs.clients.find(i=>i.id == 4);
  this.transactions.push(trans4);

  let trans5:ModelNS.Transaction = new ModelNS.Transaction ();
  trans5.id=5;
  trans5.amount=600;
  trans5.description="fast food";
  trans5.type="Dr";
  trans5.user=this.cs.clients.find(i=>i.id == 4);
  this.transactions.push(trans5);
}
  
}