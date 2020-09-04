import { Injectable } from '@angular/core';
import * as ModelNS from './model/model';
import {observable} from "rxjs";
import * as _ from "lodash";
import { ClientService } from './service/client.service';
import { TransactionService } from './service/transaction.service';


 @Injectable()
export class UserService {
  constructor() {   }
public appusers:Array<ModelNS.Appuser>=new Array<ModelNS.Appuser>();

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
