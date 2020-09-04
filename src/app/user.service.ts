import { Injectable } from '@angular/core';
import * as ModelNS from './model/model';
import {observable} from "rxjs";
import * as _ from "lodash";
import { ClientService } from './service/client.service';
import { TransactionService } from './service/transaction.service';


 @Injectable()
export class UserService {
  constructor() { 
    this.seedData();
    }
public appusers:Array<ModelNS.Appuser>=new Array<ModelNS.Appuser>();



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
public admin:ModelNS.Appuser = null;
         
seedData()
{
  let adminUser:ModelNS.Appuser = new ModelNS.Appuser ();
  adminUser.id=1;
  adminUser.email="admin@brolia.com";
  adminUser.name="Adminstrator";
  adminUser.phone="1";
  adminUser.password="1";
  adminUser.isAuthenticate= true;
  adminUser.accountType =ModelNS.AccountType.all;
  adminUser.userType = ModelNS.UserType.administrator;
  this.appusers.push(adminUser);
  this.admin = adminUser;
  

  let batrastore:ModelNS.Appuser = new ModelNS.Appuser ();
  batrastore.id=2;
  batrastore.email="batra@dukan.com";
  batrastore.name="Batra";
  batrastore.phone="1";
  batrastore.password="1";
  batrastore.isAuthenticate= true;
  batrastore.accountType = ModelNS.AccountType.buisness;
  batrastore.userType = ModelNS.UserType.other;
  this.appusers.push(batrastore);

  let vibhuAcc:ModelNS.Appuser = new ModelNS.Appuser ();
  vibhuAcc.id=3;
  vibhuAcc.email="vibhu@r.com";
  vibhuAcc.name="Vibhu";
  vibhuAcc.phone="1";
  vibhuAcc.password="1";
  vibhuAcc.isAuthenticate= true;
  vibhuAcc.accountType = ModelNS.AccountType.personal;       
  vibhuAcc.userType = ModelNS.UserType.other;
  this.appusers.push(vibhuAcc);
}
}