import { Injectable } from '@angular/core';
import * as ModelNS from '../model/model';
import {observable} from "rxjs";
import * as _ from "lodash";

@Injectable()
export class ClientService {
public clients:Array<ModelNS.Client>=new Array<ModelNS.Client>();
public clientEdit:ModelNS.Client=null;

  constructor() { }
addNewClient(client:ModelNS.Client):ModelNS.Client
 {
   this.clientEdit=null;
   if(this.clients!=null)
   {

    let cl:Array<ModelNS.Client>=this.clients.filter(i=>i.name==client.name && i.phone==client.phone);

   if(cl!=null && cl.length == 0)
   {
   if(this.clients.length>0)
    {
      client.id=this.clients[this.clients.length-1].id + 1;
    }
    else
    {
      client.id=1;
    }
   console.log(client.id + '    ' +client.name + '    '+ client.phone);
   this.clients.push(client);
   }
   
   }
   return client;
 }
 deleteClient(client:ModelNS.Client){
    if(this.clients.length>0)
    {
      //TODO = optimization required
      for (var i in this.clients) {
      if (this.clients[i].id == client.id) {
        this.clients.splice(Number(i),1);
        break; //Stop this loop, we found it!
     }
      }
    } 
}
editClient(client:ModelNS.Client){
    if(this.clients.length>0)
    {
      //TODO = optimization required
         this.clients.find(f=>f.id==client.id).name=client.name;
         this.clients.find(f=>f.id==client.id).phone=client.phone;
         
    } 
}
}