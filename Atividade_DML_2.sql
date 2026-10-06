Create Database Star_Enterprise;
Use Star_Enterprise;

create table Projeto (
IdProjeto								int(5) primary key AUTO_INCREMENT,
NomeProjeto								varchar(100)				

);

create table Funcionarios_Projeto (
IdProjeto								int(5),
IdFuncionarios							int(5),
Primary key (IdProjeto, IdFuncionarios),
Foreign key (IdProjeto)
References Projeto (IdProjeto),
Foreign key (IdFuncionarios)
References Funcionarios (IdFuncionarios)
);


create table Funcionarios (
IdFuncionarios 							int(5) primary key AUTO_INCREMENT,
IdDep									int(5),
NomeFuncionarios						varchar(100),
SalarioFuncionarios						Decimal(10,3),									
Foreign key (IdDep)
References Departamentos(IdDep) 
);

Create table Departamentos (
IdDep									int(5) primary key auto_increment,
NomeDep									Varchar(100)
);


Insert into Departamentos (NomeDep)
Values
	('Star'),
    ('Light'),
    ('Solar'),
    ('Gravity');

Insert into Projeto (NomeProjeto)
Values
	('Solar systems'),
	('Black holes'),
	('Neutron Stars'),
    ('Quasars'),
    ('Cold Stars');

Insert into Funcionarios
    (IdDep, NomeFuncionarios, SalarioFuncionarios)
Values
    (1, 'Claudia', 13.000),
    (1, 'Carlitos', 13.000),
    (1, 'Johnathan', 14.000),
    (2, 'Benjamin', 15.000),
    (2, 'Carlos', 15.000),
    (2, 'Zylak', 16.000),
    (3, 'Clara', 13.000),
    (3, 'Julia', 13.000),
    (4, 'Bruna', 13.000),
    (4, 'Márcia', 13.000);

 Select* from Funcionarios;   
        
Insert into Funcionarios_Projeto (IdProjeto, IdFuncionarios)
values
	(1, 1),
    (1, 5),
    (1, 6),
    (2, 2),
    (2, 10),
    (2, 4),
    (3, 3),
    (3, 2),
    (3, 5),
    (4, 4),
    (4, 9),
    (4, 1),
    (5, 5),
    (5, 8),
    (5, 7);
  
  
Update Funcionarios
Set  SalarioFuncionarios = 14.000
Where IdFuncionarios = 1;

Update Funcionarios
Set  SalarioFuncionarios = 15.000
Where IdFuncionarios = 2;

Update Funcionarios
Set  SalarioFuncionarios = 15.000
Where IdFuncionarios = 3;

Update Funcionarios
SET  SalarioFuncionarios = 16.000
WHERE IdFuncionarios = 4;

Update Funcionarios_Projeto
Set IdProjeto = 5
Where IdFuncionarios = 3;   
Select* From Funcionarios_Projeto;
	            
Update Funcionarios
Set IdDep = 3
where IdFuncionarios = 9;

Update Funcionarios
Set SalarioFuncionarios = 20.000,
	IdDep = 3
Where IdFuncionarios = 4;    

Update Funcionarios
Set SalarioFuncionarios = SalarioFuncionarios * 1.10
Where IdDep = 2;

Delete From Funcionarios_Projeto
where IdProjeto = 4
And IdFuncionarios = 1;
Select* From Funcionarios_Projeto;

Delete From Funcionarios_Projeto
Where IdFuncionarios = 7
And IdProjeto = 5;

Delete From Funcionarios
Where IdFuncionarios = 7;

Delete From Funcionarios
Where IdFuncionarios = 7
And NomeFuncionarios = 'Clara';

Select SalarioFuncionarios
From Funcionarios
Order by SalarioFuncionarios asc;

Select* From Funcionarios;
Select* From Funcionarios Where SalarioFuncionarios > 13.000;
Select* From Funcionarios Where IdDep = 3;
Select* From Funcionarios Where SalarioFuncionarios between 13.000 and 15.000;
Select* From Funcionarios Where NomeFuncionarios Like "C%"; 
Select* From Departamentos Where IdDep != 10;
Select Concat(NomeFuncionarios , ' Esta demitida!') As Mensagem From Funcionarios; 
Select* From Funcionarios Where SalarioFuncionarios = null;
Select SalarioFuncionarios * 12 From Funcionarios Where IdFuncionarios = 4;
Select Count(*) As TotalFuncionarios From Funcionarios;
Select Avg(SalarioFuncionarios) As MediaGeral From Funcionarios;
Select Avg(SalarioFuncionarios) As MediaPorDep From Funcionarios Where IdDep;
Select Avg(SalarioFuncionarios) As MediaPorDep From Funcionarios Where IdDep = 4;
Select Count(*) As TotalFuncDep From Funcionarios Where IdDep = 4;
Select Count(*) As MaioresDeps From Funcionarios Where IdDep > 2;
Select max(SalarioFuncionarios) As MaiorSalario From Funcionarios;
Select NomeFuncionarios,SalarioFuncionarios From Funcionarios Where SalarioFuncionarios in (Select max(SalarioFuncionarios) From Funcionarios);