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
         
       ]
 
}