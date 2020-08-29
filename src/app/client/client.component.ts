import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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

 public isEdit:boolean=false;

  constructor(private us: UserService, private router: Router) { this.userService = this.us;
  if(this.userService.clientEdit!=null)
  {
    this.isEdit=true;
    this.client = this.userService.clientEdit;
  }

     }

  ngOnInit() {
  }
save()
{
  if(this.isEdit)
  {
  this.userService.editClient(this.client);
  }
  else
  {
        this.userService.clientEdit=null;
        this.userService.addNewClient(this.client);
  }
this.router.navigate(["clientlist"]);
  
}

  cancel(){
    if(    this.us.admin.isAuthenticate ==  true )
    {
     this.router.navigate(["clientlist"]);

    }
    else{

       this.router.navigate(["login"]);
    }
    }
} 