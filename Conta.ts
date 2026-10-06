export default abstract class Conta {
    private _numconta: number = 0.0;
    private _numbank: number = 0.0;
    private _saldo: number = 0.0;
    private _saque: number = 0.0;
    private _deposito: number = 0.0;

    //Getters & Setters
    get getNumconta(): number {
        return this._numconta;
        }

    set setNumconta(num: number) {
        this._numconta = num;
        }
    get getNumbank(): number {
        return this._numbank;
        }

    set setNumbank(num: number) {
        this._numbank = num;
        }

    get getSaldo(): number {
        return this._saldo;
        }

    set setSaldo(num: number) {
        this._saldo = num;
        }

    get getSaque(): number {
        return this._saque;
        }

    set setSaque(num: number) {
        this._saque = num;
        }

    get getDeposito(): number {
        return this._deposito;
        }

    set setDeposito(num: number) {
        this._deposito = num;
        }
   

    
    }
