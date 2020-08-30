import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userService: any;
  public user:ModelNS.Appuser = new ModelNS.Appuser();

 public isEdit:boolean=false;

  constructor(private us: UserService, private router: Router) { this.userService = this.us;
  this.isEdit=false;
  if(this.userService.appuserEdit!=null)
  {
    this.isEdit=true;
    this.user = this.us.editUser;
  }

     }


  ngOnInit() {  }

saveUser()
{
  alert(this.user.name);
  if(this.isEdit)
  {
  this.userService.appuserEdit(this.user);
  }
  else
  {
        this.userService.editUser=null;
        this.userService.AddnewUser(this.user);

  }
this.router.navigate(["userlist"]);
  
}
cancel(){
    if(    this.us.admin.isAuthenticate ==  true )
    {
     this.router.navigate(["userlist"]);

    }
    else{

       this.router.navigate(["login"]);
    }
    }
}