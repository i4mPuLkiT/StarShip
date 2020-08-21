 import { Injectable } from '@angular/core';
import * as ModelNS from './model/model';

 @Injectable()
export class UserService {
  constructor() {   }
  public admin:ModelNS.Appuser = 
         {
        "id": 1,
        "name": "Adminstrator",
        "email": "admin@brolia.com",
        "phone": "1",
        "password":"1",
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