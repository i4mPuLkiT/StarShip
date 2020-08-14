import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
ngOnInit() {
  }
   public transactions: any;
   constructor(){
       this.transactions = [
         {
        "id": 1,
        "name": "Ashok 1",
        "dbt": 500,
        "crt": 0
         },
         {
        "id": 2,
        "name": "Ashok 2",
        "dbt": 890,
        "crt": 0
         },
         {
        "id": 3,
        "name": "Ashok 3",
        "drt": 0,
        "crt": 4000
         },
         {
        "id": 4,
        "name": "Ashok 4",
        "dbt": 0,
        "crt": 5000
         },
       ]
       
   }

  

}
