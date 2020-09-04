export class Appuser {
   id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    isAuthenticate: boolean;
    accountType:AccountType;
    userType:UserType;
}
export class Transaction {
   id: number;
   date: Date = new Date();
   amount: number;
   type: string;
   description: string;
   user: Client;
}
export class Client {
   id: number;
    name: string;
    phone: string;
}

export enum AccountType {
  all = 0,
  buisness = 1,
  personal = 2,
}

export enum UserType {
  unknown = 0,
  administrator = 1,
  other = 2,
}