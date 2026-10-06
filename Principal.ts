import Corrente from "./Corrente";
import Poupanca from "./Poupanca";
import Salario from "./Salario";
import ICliente from "./IClientes";

class Principal {

   

    main(): void {

    const cpoupe = new Poupanca(); 
    const corrente = new Corrente(); 
    const salario = new Salario();
    
    corrente.abrirconta()

    cpoupe.setSaldo = 550.10;
    
    cpoupe.deposito(0.0);

    cpoupe.saque(10.0);
    
    console.log(cpoupe.saldo())
    
    }



}

const programa = new Principal()
programa.main();