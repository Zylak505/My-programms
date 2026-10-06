import Conta from "./Conta";
import IConta from "./IFaces";

export default class Salario extends Conta implements IConta{
    saldo(): number {
       return this.getSaldo;
    }
    deposito(valor: number): number {
        this.setDeposito = valor;
    
        return this.getSaldo + this.getDeposito;
    }
    saque(valor: number): number {
        return this.getSaque;
    }
   



}