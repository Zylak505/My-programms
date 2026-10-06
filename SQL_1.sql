Create database Empresa;

Use Empresa;
create table Departamento(
IdDepto 			int(5)primary key unique,
NomeDepto 			varchar(100) not null
);
describe Departamento;

Use Empresa;
create table Empregado(
IdEmpregado 		int(5) primary key unique,
Nome 				varchar(100) not null,
Salario				Decimal(10,2),
IdDepto				int(5) references Departamento
);
describe Empregado;

Use Empresa;
create table Projeto(
IdProjeto			int(5)primary key Unique,
NomeProjeto			varchar(100) not null
);
describe Projeto;

Use Empresa;
create table EmpregadoProjeto(
IdEmpregado			int(5) references Empregado,
IdProjeto			int(5) references Projeto
); 
describe EmpregadoProjeto;