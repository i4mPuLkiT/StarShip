export class Appuser {
   id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    isAuthenticate: boolean;
}
export class Transaction {
   id: number;
   date: Date = new Date();
   amount: number;
   type: string;
   description: string;
   clientName : string;
   clientPhone:string;
   user: Appuser;
}