import { Injectable } from '@angular/core';
import * as ModelNS from './model/model';
import {observable} from "rxjs";
import * as _ from "lodash";
import { ClientService } from './service/client.service';
import { TransactionService } from './service/transaction.service';


 @Injectable()
export class UserService {
  constructor() {   }
public editTrans:ModelNS.Transaction;
public transactions:Array<ModelNS.Transaction>=new Array<ModelNS.Transaction>();
public clients:Array<ModelNS.Client>=new Array<ModelNS.Client>();
public appusers:Array<ModelNS.Appuser>=new Array<ModelNS.Appuser>();



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
 search(searchKey:string)
  {
    
    // alert(searchKey);
  }
  public admin:ModelNS.Appuser = 
         {
        "id": 1,
        "name": "Adminstrator",
        "email": "admin@brolia.com",
        "phone": "1",
        "password":"1",
        "isAuthenticate": true,
        "accountType":1,
        "userType":1
         }

AddnewUser(user:ModelNS.Appuser)
{ 
  this.editUser = null;
  if(this.appusers !=null)
  {
    let ul:Array<ModelNS.Appuser> = this.appusers.filter(i=>i.name == user.name && i.phone == user.phone);
     if(ul!=null && ul.length == 0)
   {
   if(this.appusers.length>0)
    {
      user.id =this.appusers[this.appusers.length-1].id + 1;
    }
    else 
    {
      user.id = 1;
    }
       this.appusers.push(user);
   }
  }
     return user;

}

public editUser:ModelNS.Appuser=null;
 userEdit(user:ModelNS.Appuser)
{
    if(this.appusers.length>0)
    {
      //TODO = optimization required
         this.appusers.find(g=>g.id== user.id).name= user.name;
         this.appusers.find(g=>g.id== user.id).email=user.email;
         this.appusers.find(g=>g.id== user.id).phone=user.phone;
         this.appusers.find(g=>g.id== user.id).accountType=user.accountType;
         this.appusers.find(g=>g.id== user.id).userType=user.userType;
         
         
    } 
}
 
  deleteAppUser(user:ModelNS.Appuser){
    if(this.appusers.length>0)
    {
      //TODO = optimization required
      for (var i in this.appusers) {
      if (this.appusers[i].id == user.id) {
        this.appusers.splice(Number(i),1);
        break; //Stop this loop, we found it!
     }
      }
    } 
}
// public loggedInUser:ModelNS.Appuser = null;
authenticateUser(username:string , password:string)
{
  let users:Array<ModelNS.Appuser> = this.appusers.filter(i=>(i.email == username || i.phone == username) && i.password == password );
     if(users!=null && users.length == 1)
     {
        this.admin = users[0];
        this.admin.isAuthenticate = true;
     }
}
}
