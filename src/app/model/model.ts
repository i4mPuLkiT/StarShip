export class Appuser {
   id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    isAuthenticate: boolean;
    accountType:number;
    userType:number;
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