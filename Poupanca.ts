import Conta from "./Conta";
import IConta from "./IFaces";

export default class Poupanca extends Conta implements IConta {
   
    deposito(valor: number): number {
        this.setDeposito = valor;

        return this.getSaldo + this.getDeposito; 

    }

    saque(valor: number): number {
        this.setSaque = valor;
        
        this.saldo() - valor;

        this.setSaldo -= this.saldo() - valor;
        
        return this.getSaque;
    }
    
     saldo(): number {
       return this.getSaldo + this.getDeposito;
    }


} 