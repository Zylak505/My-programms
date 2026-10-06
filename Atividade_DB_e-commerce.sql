Create database Star_Enterprises;

Use Star_Enterprise;
Create table Categorias (
IdCategorias				Int(5) primary key Auto_Increment, 		
Nome_categoria				Varchar(100) not null unique
);


Create table Clientes (
IdClientes					int(5) primary key Auto_Increment,
Nome_Clientes				Varchar(100) not null, 
Email_Clientes				Varchar(100) not null unique,
Cpf_Clientes				Varchar(11) not null unique
);

Create table Produtos (
IdProdutos					int(5) primary key Auto_Increment,
IdCategorias				int(5),
Nome_Produto				Varchar(100) not null, 
Preco_produto				decimal(10,2) not null,
Foreign key (IdCategorias) References Categorias(IdCategorias)
);


Create table Pedidos (
IdPedidos					int(5) primary key Auto_Increment,
IdClientes					int(5),
Data_pedido					date not null,
Foreign key (IdClientes) References Clientes(IdClientes) 
);



Create table Itens_Pedido (
IdProduto					int(5),
IdPedidos					int(5),
Preco_compra				decimal(10,2) not null,
Qntd_Comprada				int,	
Foreign key (IdProduto) References Produtos(IdProdutos),
Foreign Key (IdPedidos) References Pedidos(IdPedidos),
Primary key (IdProduto, IdPedidos)
);