import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
  
  public clients:Array<ModelNS.Client>=new Array<ModelNS.Client>();
    constructor(private us: UserService, private router: Router) {
   
    this.userService = this.us;
    this.clients = this.us.clients;
   }

  ngOnInit() {
  }

 edit(clients:ModelNS.Client)
{
  this.us.editClient(clients);
  this.router.navigate(["transaction"]);
  
}
remove(clients:ModelNS.Client) {
      this.us.deleteClient(clients);
      //this.transactions.splice(id, 1);
    }
 searchClient()
  {
 this.clients = this.us.clients.filter(i => i.name.indexOf(this.searchKey) > -1 || i.phone.indexOf(this.searchKey) > -1 );
  }
  
onKey(event: any) { // without type info
    this.searchKey = event.target.value;
    this.searchClient();
  }
}