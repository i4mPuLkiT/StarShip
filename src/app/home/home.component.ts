import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Router } from '@angular/router';
import * as ModelNS from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public tService: any;
  constructor(private ts: TransactionService, private router: Router) { 
    this.tService = this.ts;

  }

  ngOnInit() {
  }

}