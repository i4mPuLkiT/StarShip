import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
public userService: any; 
public searchKey:string;
  public   values = '';

public trans:ModelNS.Transaction = new ModelNS.Transaction();
public clients:Array<ModelNS.Client>=new Array<ModelNS.Client>();
public isEdit:boolean=false;

  constructor(private us: UserService, private router: Router, ) { 
        this.userService = this.us;
        
        if(this.userService.editTrans!=null )
        {
          this.isEdit=true;
          this.trans=this.userService.editTrans;

        }

  }

  ngOnInit() {  

  }
  add(){
    if(    this.us.admin.isAuthenticate ==  true )
    {
      if(this.isEdit)
      {
        this.userService.editTransaction(this.trans);
        this.router.navigate(["tables"]);
      }
      else
      {
        this.userService.newTransaction(this.trans);
         this.router.navigate(["home"]);

      }

    }
    else{

       this.router.navigate(["login"]);

    }
  }

  cancel(){
        //  alert("this.us.admin.isAuthenticate =" + this.us.admin.isAuthenticate);
    if(    this.us.admin.isAuthenticate ==  true )
    {
     this.router.navigate(["home"]);

    }
    else{

       this.router.navigate(["login"]);

    }
  }
  debit(){    
    this.trans.type = "Dr";
    // alert(this.trans.type )
  }
   credit(){
    this.trans.type = "Cr";
        // alert(this.trans.type )

  }
  search()
  {
 this.clients = this.us.clients.filter(i => i.name.indexOf(this.searchKey) > -1 || i.phone.indexOf(this.searchKey) > -1 );
  }

  onKey(event: any) { // without type info
    this.searchKey = event.target.value;
    this.search();
  }
}