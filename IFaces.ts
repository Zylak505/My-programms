export default interface IConta{
    
    saque(valor: number): number;
    saldo(): number;
    deposito(valor: number): number;
    

}

export default interface IAbrir{
    abrirconta(): string;
}

