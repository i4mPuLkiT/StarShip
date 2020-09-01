import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';


@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {
  public searchKey:string;
  public   values = '';
  public userService: any; 
  public cs: any;
  public clients:Array<ModelNS.Client>=new Array<ModelNS.Client>();
    constructor(private us: UserService, private cService: ClientService,private router: Router) {
   
    this.userService = this.us;
    this.cs=this.cService;
    this.clients = this.cs.clients;
   }

  ngOnInit() {
  }

 edit(client:ModelNS.Client)
{
  this.cs.clientEdit=client;
  this.router.navigate(["client"]);
  
}
remove(client:ModelNS.Client) {
      this.cs.deleteClient(client);
      //this.transactions.splice(id, 1);
    }
 searchClient()
  {
 this.clients = this.cs.clients.filter(i => i.name.indexOf(this.searchKey) > -1 || i.phone.indexOf(this.searchKey) > -1 );
  }
  
onKey(event: any) { // without type info
    this.searchKey = event.target.value;
    this.searchClient();
  }
}