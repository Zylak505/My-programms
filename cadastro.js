// Recupera os veículos já cadastrados no localStorage.
// Caso não exista nenhum veículo cadastrado,
// cria um array vazio.

let veiculos =
JSON.parse(localStorage.getItem("veiculos")) || [];

// Seleciona o formulário pelo ID.
const formulario =
document.getElementById("formCadastro");

// Adiciona um evento de envio ao formulário.
formulario.addEventListener("submit", function(event){

// Impede que a página recarregue.
event.preventDefault();


// =====================================================
// CAPTURA DOS DADOS DOS CAMPOS
// =====================================================

let modelo =
document.getElementById("modelo").value;

let marca =
document.getElementById("marca").value;

let ano =
document.getElementById("ano").value;

let cor =
document.getElementById("cor").value;

let preco =
document.getElementById("preco").value;

let km =
document.getElementById("km").value;

let categoria =
document.getElementById("categoria").value;


// =====================================================
// CRIAÇÃO DO OBJETO VEÍCULO
// =====================================================

let veiculo = {

    modelo: modelo,

    marca: marca,

    ano: ano,

    cor: cor,

    preco: preco,

    km: km,

    categoria: categoria

};


// =====================================================
// ADICIONA O VEÍCULO AO ARRAY
// =====================================================

veiculos.push(veiculo);


// =====================================================
// SALVA NO LOCALSTORAGE
// =====================================================

/*
    localStorage:

    Armazena informações diretamente
    no navegador.

    JSON.stringify transforma o array
    em texto para que possa ser salvo.
*/

localStorage.setItem(
    "veiculos",
    JSON.stringify(veiculos)
);


// =====================================================
// MENSAGEM DE SUCESSO
// =====================================================

alert(
    "Veículo cadastrado com sucesso!"
);


// =====================================================
// LIMPA O FORMULÁRIO
// =====================================================

formulario.reset();

});




/*

FUNÇÃO DE TESTE

Exemplo de veículo salvo:

{
modelo: "Civic",
marca: "Honda",
ano: "2023",
cor: "Preto",
preco: "120000",
km: "35000",
categoria: "Sedan"
}

=========================================================
*/

/*

COMO VISUALIZAR OS DADOS SALVOS

Pressione F12
Clique em Application
Clique em Local Storage
Selecione o site
Procure a chave:

veiculos

=========================================================
*/

/*

EXEMPLO DE DADOS ARMAZENADOS

[
{
"modelo":"Civic",
"marca":"Honda",
"ano":"2023",
"cor":"Preto",
"preco":"120000",
"km":"35000",
"categoria":"Sedan"
}
]

*/