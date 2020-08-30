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
    this.users = this.us.appusers;
  }

  ngOnInit() {  }

}