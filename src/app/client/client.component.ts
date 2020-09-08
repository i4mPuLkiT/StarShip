import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public userService: any;
  public client:ModelNS.Client=new ModelNS.Client();
  public cs: any;
 public isEdit:boolean=false;

  constructor(private us: UserService, private router: Router, private cService: ClientService) { 
  this.userService = this.us;
  this.cs=this.cService;
  
  this.isEdit=false;
  if(this.cs.clientEdit!=null)
  {
    this.isEdit=true;
    this.client = this.cs.clientEdit;
  }

     }

  ngOnInit() {
  }
save()
{
  if(this.isEdit)
  {
  this.cs.editClient(this.client);
  }
  else
  {
        this.cs.clientEdit=null;
        this.cs.addNewClient(this.client);

  }
this.router.navigate(["clientlist"]);
  
}

  cancel(){
    if(    this.us.loggedInUser.isAuthenticate ==  true )
    {
     this.router.navigate(["clientlist"]);

    }
    else{

       this.router.navigate(["login"]);
    }
    }
} 