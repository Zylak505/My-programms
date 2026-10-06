import Registro from './dados'
import IRegistro from './dados'
 
class Principal extends  Registro implements IRegistro{
    
    main():  void {

        this.usuario();
        
        this.setid = 10;

        console.log("ID: "+ this.getid);
    }




}