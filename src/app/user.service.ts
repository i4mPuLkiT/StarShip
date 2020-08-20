 import { Injectable } from '@angular/core';
 @Injectable()
export class UserService {
  constructor() {   }
  public admin = 
         {
        "id": 1,
        "name": "Adminstrator",
        "email": "admin@brolia.com",
        "phone": "11111",
        "password":"12345",
        "isAuthenticate": false
         }
  public transactionlist =[

         {
        "id": 1,
        "date": "10/08/2020",
        "debit": 500,
        "credit": 0,
        "description":"pepsi",
        "user":{
           "id": 1,
        "name": "Adminstrator",
        }
         },
          {
        "id": 2,
        "date": "10/08/2020",
        "debit": 800,
        "credit": 100,
        "description":"daal",
        "user":{
           "id": 1,
        "name": "Adminstrator",
        }
         },
          {
        "id": 3,
        "date": "10/08/2020",
        "debit": 5000,
        "credit": 500,
        "description":"namkeen",
        "user":{
           "id": 1,
        "name": "Adminstrator",
        }
         },
          {
        "id": 4,
        "date": "10/08/2020",
        "debit": 7000,
        "credit": 900,
        "description":"coke",
        "user":{
           "id": 1,
        "name": "Adminstrator",
        }
         },
        
       ]
 
}