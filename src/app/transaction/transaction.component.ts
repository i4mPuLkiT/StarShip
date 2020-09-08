import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { ClientService } from '../service/client.service';
import { TransactionService } from '../service/transaction.service';
import { Router } from "@angular/router";
import * as ModelNS from "../model/model";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"]
})
export class TransactionComponent implements OnInit {
  public ts: any;
  public cs:any;
  public userService: any;
  public searchKey: string;
  public values = "";
  public client: ModelNS.Client = new ModelNS.Client();
  public trans: ModelNS.Transaction = new ModelNS.Transaction();
  public clients: Array<ModelNS.Client> = new Array<ModelNS.Client>();
  public isEdit: boolean = false;

  constructor(private tService: TransactionService, private router: Router,private cService:ClientService,private us:UserService) {
    this.ts = this.tService;
    this.userService = this.us;
    this.cs=this.cService;
    this.clients=this.cs.clients;

    if (this.ts.editTrans != null) {
      this.isEdit = true;
      this.trans = this.ts.editTrans;
    }
  }

  ngOnInit() {}
  addTransaction() {
    if (this.us.loggedInUser.isAuthenticate == true) {
      if (this.isEdit) {
        this.ts.editTransaction(this.trans);
        this.router.navigate(["tables"]);
      } else {
        this.client = this.cs.addNewClient(this.client);
        this.trans.user = this.client;
        this.ts.newTransaction(this.trans);
        this.router.navigate(["home"]);
      }
    } else {
      this.router.navigate(["login"]);
    }
  }

  cancel() {

    if (this.us.loggedInUser.isAuthenticate == true) {
      this.router.navigate(["home"]);
    } else {
      this.router.navigate(["login"]);
    }
  }
  debit() {
    this.trans.type = "Dr";
    // alert(this.trans.type )
  }
  credit() {
    this.trans.type = "Cr";
    // alert(this.trans.type )
  }
  searchTransaction() {
    this.clients = this.cs.clients.filter(
      i =>
        i.name.indexOf(this.searchKey) > -1 ||
        i.phone.indexOf(this.searchKey) > -1
    );
  }

  onKey(event: any) {
    // without type info
    this.searchKey = event.target.value;
    this.searchTransaction();
  }
}
