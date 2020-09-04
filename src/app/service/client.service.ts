import { Injectable } from '@angular/core';
import * as ModelNS from '../model/model';
import {observable} from "rxjs";
import * as _ from "lodash";

@Injectable()
export class ClientService {
public clients:Array<ModelNS.Client>=new Array<ModelNS.Client>();
public clientEdit:ModelNS.Client=null;

  constructor() {
    this.seedData();
   }
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
seedData()
{
  let pulkit:ModelNS.Client = new ModelNS.Client ();
  pulkit.id=1;
  pulkit.name="Pulkit";
  pulkit.phone="1111";
  this.clients.push(pulkit);

  let muskan:ModelNS.Client = new ModelNS.Client ();
  muskan.id=2;
  muskan.name="Muskan";
  muskan.phone="1111";
  this.clients.push(muskan); 
  
  let sunny:ModelNS.Client = new ModelNS.Client ();
  sunny.id=3;
  sunny.name="sunny";
  sunny.phone="1111";
  this.clients.push(sunny); 


  let vibhu:ModelNS.Client = new ModelNS.Client ();
  vibhu.id=4;
  vibhu.name="Vibhu";
  vibhu.phone="1111";
  this.clients.push(vibhu); 
}

}