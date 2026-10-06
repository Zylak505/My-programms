export default interface IRegistro{
     _id:    number; 
     _nome:  string; 
     _login: string;
     _senha: string;
     _usuario: string;


}

export default class Registro {


    dados(): string {
        

        
        return "";
   }
   
   quantidade(): number {
        
        return 0;

   }

   usuario(form: IRegistro): void {
    

    console.log("Hallo TS!")

   }



   
   //Getters & Setters

   get getid(): number {
        return this._id;
   }

   set setid(valor: number)  {
    this._id = valor;
   }
}