import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public searchKey:string;
  public   values = '';
  public userService: any; 
  public users:Array<ModelNS.Appuser>=new Array<ModelNS.Appuser>();

  constructor(private us: UserService, private router: Router) { 
    this.userService = this.us;
    this.users = this.userService.appusers;
  }

  ngOnInit() {  }

  searchAppUsers()
  {
 this.users = this.userService.appusers.filter(i => i.name.indexOf(this.searchKey) > -1 || i.phone.indexOf(this.searchKey) > -1 );
  }

onKey(event: any) { // without type info
    this.searchKey = event.target.value;
    this.searchAppUsers();
  }

  editUser(user:ModelNS.Appuser)
{
  this.userService.userEdit=user;
  this.router.navigate(["user"]);  
}
removeUser(user:ModelNS.Client) {
      this.userService.deleteAppUser(user);
      //this.transactions.splice(id, 1);
    }
}