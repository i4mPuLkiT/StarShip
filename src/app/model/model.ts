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
   amount: number;
   type: string;
   description: string;
   user: Appuser;
}