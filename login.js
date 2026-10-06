// =====================================================
// CRIAÇÃO DOS USUÁRIOS PADRÃO
// =====================================================

// Verifica se já existe uma lista de usuários.

if(!localStorage.getItem("usuarios")){

// Cria os usuários iniciais do sistema.

let usuarios = [

    {
        nome: "Administrador",

        email: "admin@autocar.com",

        senha: "123",

        tipo: "admin"
    },

    {
        nome: "Cliente",

        email: "cliente@autocar.com",

        senha: "123",

        tipo: "usuario"
    }

];

// Salva no localStorage.

localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
);

}

// =====================================================
// FORMULÁRIO DE LOGIN
// =====================================================

// Seleciona o formulário.

const formulario =
document.getElementById("formLogin");

// Evento executado ao clicar em Entrar.

formulario.addEventListener("submit", function(event){

// Impede o recarregamento da página.

event.preventDefault();


// =================================================
// CAPTURA DOS DADOS
// =================================================

let emailDigitado =
document.getElementById("email").value;

let senhaDigitada =
document.getElementById("senha").value;

// =================================================
// RECUPERA USUÁRIOS
// =================================================

let usuarios =
JSON.parse(localStorage.getItem("usuarios")) || [];


// =================================================
// PROCURA USUÁRIO
// =================================================

let usuarioEncontrado = usuarios.find(

    usuario =>

    usuario.email === emailDigitado

    &&

    usuario.senha === senhaDigitada

);

// =================================================
// LOGIN CORRETO
// =================================================

if(usuarioEncontrado){

    /*
    sessionStorage:

    Armazena os dados da sessão atual.
    Os dados são removidos quando o
    navegador é fechado ou ao realizar logout.
    */

    sessionStorage.setItem(
        "usuario",
        usuarioEncontrado.nome
    );

    sessionStorage.setItem(
        "email",
        usuarioEncontrado.email
    );

    sessionStorage.setItem(
        "tipo",
        usuarioEncontrado.tipo
    );

    sessionStorage.setItem(
        "token",
        "AUTOCAR123"
    );


    // =============================================
    // ADMINISTRADOR
    // =============================================

    if(usuarioEncontrado.tipo === "admin"){

        alert(
            "Bem-vindo Administrador!"
        );

        window.location.href =
        "area-admin.html";

    }

    // =============================================
    // CLIENTE
    // =============================================

    else{

        alert(
            "Bem-vindo Cliente!"
        );

        window.location.href =
        "area-usuario.html";

    }

}


// =================================================
// LOGIN INCORRETO
// =================================================

else{

    alert(
        "Email ou senha inválidos!"
    );

}

});