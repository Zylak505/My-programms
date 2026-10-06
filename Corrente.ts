import Conta from "./Conta";
import IConta from "./IFaces";
import ICliente from "./IClientes";
import IAbrir from "./IFaces"

export default class Corrente extends Conta implements IConta {   
   
      private  _nome: string = "";
      private  _cpf: string = "";
      private  _endereco: string = "";
      private  _email: string = "";
      private  _fone: string = "";

    abrirconta(): string {
       ;
    }
   
    saque(valor: number): number {
        throw new Error("Method not implemented.");
    }
    saldo(): number {
        throw new Error("Method not implemented.");
    }
    deposito(valor: number): number {
        throw new Error("Method not implemented.");
    }
   
   
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

  
    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }


    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }

 
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

   
    public get fone(): string {
        return this._fone;
    }
    public set fone(value: string) {
        this._fone = value;
    }
}



