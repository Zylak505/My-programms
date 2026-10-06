Create database Loja_Virtual;
Use Loja_Virtual;

Create Table Cliente (
Id_Cliente				int(5) Primary key auto_increment, 
Nome					varchar(100) not null,
Email					varchar(100) not null unique
);

Create table Produto (
Id_Produto				int(5) Primary key auto_increment,
NomeProdt				varchar(100) not null,
Preco					Decimal(10,2) check (Preco > 0) 
);

Create table Pedido (
Id_Pedido				int(5) Primary key auto_increment,
Id_Cliente			 	int(5),
Data_Pedido				date,
Foreign key (Id_Cliente)
References Cliente (Id_Cliente)
);

Create table ItemPedido (
Id_Item					int(5) Primary key auto_increment,
Id_Pedido				int(5),
Id_Produto				int(5),
Qtnd					int check (Qtnd > 0),
Foreign key (Id_Pedido)
References Pedido (Id_Pedido),
Foreign key (Id_Produto)
References Produto (Id_Produto)
);


Insert into Cliente (Nome, Email)
Values
		("Claudio","Cbcjbc@gmail.com"),
        ("Lucia", "Ldbebc@gmail.com"),
		("Carlos", "Ccbrr@gmail.com"),
        ("Douglas", "Djdncnrkj@gmail.com"),
        ("Ash", "Ancnrc@gmail.com" ),
        ("Star",  "Srconrc@gmail.com"),
        ("Zylak", "Zylrmcr@gmail.com" ),
        ("Peter", "Perttgr@gmail.com" ),
        ("Quill", "Quilly@gmail.com" ),
        ("Bruna", "Brunaa@gmail.com" );
        
Insert into Produto (NomeProdt, Preco)
Values        
		("Mochila", 550.00),
        ("Capa de celular", 60.00),
		("Acessorio", 47.00),
        ("Guarda-Chuva", 35.00),
        ("Estojo", 20.00),
        ("Escova de dente", 18.00),
        ("Chiclete", 2.50 ),
        ("Chaveiro", 5.00 ),
        ("Colar", 90.00 ),
        ("Xbox One", 2500.00 );
        
Insert into Pedido  (Id_Cliente, Data_Pedido)
Values
		(4, '2002-11-09'),
		(7, '2002-10-05'),
		(9, '2004-11-08'),
		(3, '2008-06-19'),
		(10, '2009-07-18'),
        (1, '2007-05-28'),
        (5, '2003-07-28'),
        (6, '2004-03-18'),
        (8, '2019-12-18'),
        (2, '2018-01-08');
        
Insert into ItemPedido (Qtnd, Id_Pedido, Id_Produto)
Values
		(8, 5, 1),
        (7, 4, 2),
        (2, 3, 3),
        (3, 2, 4),
        (5, 1, 5),
        (4, 6, 6),
		(9, 7, 7),
        (10, 8, 8),
        (1, 9, 9),
        (11, 10,  10);
        
Select* From Cliente ;
Select NomeProdt, Preco From Produto;
Select* From Produto where Preco > 100;
Select* From Produto order by Preco Desc;
Select* From Cliente where Nome Like "A%";
Select* From Produto where Preco between 50 and 200;
Select c.Nome, p.Id_Pedido From Cliente c
Inner join Pedido p On p.Id_Cliente = c.Id_Cliente ;
Select p.NomeProdt, i.Qtnd From Produto p
Inner join ItemPedido i On p.Id_Produto = i.Id_Produto; 
Select c.Nome, p.NomeProdt, i.Qtnd From Cliente c 
Inner join Pedido pe On c.Id_Cliente = pe.Id_Cliente
Inner join ItemPedido i On pe.Id_Pedido = i.Id_Pedido
Inner join Produto p On i.Id_Produto = p.Id_Produto;
Select c.Nome, Count(p.Id_Pedido) As Quantidade_Pedido From Cliente c
Inner join Pedido p On c.Id_Cliente = p.Id_Cliente
Group by c.Id_Cliente, c.Nome;
Select p.NomeProdt, Sum(i.Qtnd) As Total_Vendido From Produto p
Inner join ItemPedido i On p.Id_Produto = i.Id_Produto
Group by p.Id_Produto, p.NomeProdt; 
Select pe.Id_Pedido, Sum(p.Preco * i.Qtnd) As Total_Gasto From Pedido pe
Inner join ItemPedido i On pe.Id_Pedido = i.Id_Pedido
Inner join Produto p On i.Id_Produto = p.Id_Produto
Group by pe.Id_Pedido;
Select c.Nome, pe.Id_Pedido, Sum(p.Preco * i.Qtnd) As Total_Gasto From Cliente c 
Inner join Pedido pe On c.Id_Cliente = pe.Id_Cliente
Inner join ItemPedido i On pe.Id_Pedido = i.Id_Pedido
Inner join Produto p On i.Id_Produto = p.Id_Produto 
Group by c.Id_Cliente, c.Nome, pe.Id_Pedido;