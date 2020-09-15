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

  let trans6:ModelNS.Transaction = new ModelNS.Transaction ();
  trans6.id=6;
  trans6.amount=600;
  trans6.description="fast food";
  trans6.type="Cr";
  trans6.user=this.cs.clients.find(i=>i.id == 1);
  this.transactions.push(trans6);

  let trans7:ModelNS.Transaction = new ModelNS.Transaction ();
  trans7.id=7;
  trans7.amount=500;
  trans7.description="fast food";
  trans7.type="Dr";
  trans7.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans7);

  let trans8:ModelNS.Transaction = new ModelNS.Transaction ();
  trans8.id=8;
  trans8.amount=500;
  trans8.description="fast food";
  trans8.type="Dr";
  trans8.user=this.cs.clients.find(i=>i.id == 3);
  this.transactions.push(trans8);

let trans9:ModelNS.Transaction = new ModelNS.Transaction ();
  trans9.id=9;
  trans9.amount=500;
  trans9.description="fast food";
  trans9.type="Cr";
  trans9.user=this.cs.clients.find(i=>i.id == 3);
  this.transactions.push(trans9);

let trans10:ModelNS.Transaction = new ModelNS.Transaction ();
  trans10.id=10;
  trans10.amount=500;
  trans10.description="fast food";
  trans10.type="Dr";
  trans10.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans10);

let trans11:ModelNS.Transaction = new ModelNS.Transaction ();
  trans11.id=11;
  trans11.amount=500;
  trans11.description="fast food";
  trans11.type="Dr";
  trans11.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans11);

let trans12:ModelNS.Transaction = new ModelNS.Transaction ();
  trans12.id=12;
  trans12.amount=500;
  trans12.description="fast food";
  trans12.type="Dr";
  trans12.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans12);

let trans13:ModelNS.Transaction = new ModelNS.Transaction ();
  trans13.id=13;
  trans13.amount=500;
  trans13.description="fast food";
  trans13.type="Cr";
  trans13.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans13);

let trans14:ModelNS.Transaction = new ModelNS.Transaction ();
  trans14.id=14;
  trans14.amount=500;
  trans14.description="fast food";
  trans14.type="Cr";
  trans14.user=this.cs.clients.find(i=>i.id == 1);
  this.transactions.push(trans14);

let trans15:ModelNS.Transaction = new ModelNS.Transaction ();
  trans15.id=15;
  trans15.amount=500;
  trans15.description="fast food";
  trans15.type="Dr";
  trans15.user=this.cs.clients.find(i=>i.id == 1);
  this.transactions.push(trans15);

let trans16:ModelNS.Transaction = new ModelNS.Transaction ();
  trans16.id=16;
  trans16.amount=500;
  trans16.description="fast food";
  trans16.type="Dr";
  trans16.user=this.cs.clients.find(i=>i.id == 1);
  this.transactions.push(trans16);

let trans17:ModelNS.Transaction = new ModelNS.Transaction ();
  trans17.id=17;
  trans17.amount=500;
  trans17.description="fast food";
  trans17.type="Dr";
  trans17.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans17);

let trans18:ModelNS.Transaction = new ModelNS.Transaction ();
  trans18.id=18;
  trans18.amount=500;
  trans18.description="fast food";
  trans18.type="Cr";
  trans18.user=this.cs.clients.find(i=>i.id == 2);
  this.transactions.push(trans18);

let trans19:ModelNS.Transaction = new ModelNS.Transaction ();
  trans19.id=19;
  trans19.amount=500;
  trans19.description="fast food";
  trans19.type="Dr";
  trans19.user=this.cs.clients.find(i=>i.id == 4);
  this.transactions.push(trans19);

let trans20:ModelNS.Transaction = new ModelNS.Transaction ();
  trans20.id=20;
  trans20.amount=500;
  trans20.description="fast food";
  trans20.type="Dr";
  trans20.user=this.cs.clients.find(i=>i.id == 4);
  this.transactions.push(trans20);

}
  
}