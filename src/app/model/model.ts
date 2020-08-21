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
   date: string;
   debit: number;
   credit: number;
   description: string;
   user: Appuser;
}