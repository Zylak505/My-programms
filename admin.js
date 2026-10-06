// =====================================================
// RECUPERA VEÍCULOS DO LOCALSTORAGE
// =====================================================

let veiculos =

JSON.parse(
    localStorage.getItem("veiculos")
) || [];


// =====================================================
// ELEMENTO DA TABELA
// =====================================================

const tabela =

document.getElementById(
    "tabelaVeiculos"
);

// =====================================================
// FUNÇÃO LISTAR VEÍCULOS
// =====================================================

function listarVeiculos(){

    // Limpa a tabela antes de atualizar.

    tabela.innerHTML = "";


    // Caso não existam veículos.

    if(veiculos.length === 0){

        tabela.innerHTML =

        `
        <tr>

            <td colspan="8">

                Nenhum veículo cadastrado.

            </td>

        </tr>
        `;

        return;

    }
    // Percorre todos os veículos.
    veiculos.forEach(function(veiculo, indice){

        tabela.innerHTML +=

        `
        <tr>

            <td>
                ${veiculo.modelo}
            </td>

            <td>
                ${veiculo.marca}
            </td>

            <td>
                ${veiculo.ano}
            </td>

            <td>
                ${veiculo.cor}
            </td>

            <td>
                R$ ${veiculo.preco}
            </td>

            <td>
                ${veiculo.km}
            </td>

            <td>
                ${veiculo.categoria}
            </td>

            <td>

                <button
                    class="btn btn-warning btn-sm"
                    onclick="editarVeiculo(${indice})">

                    Editar

                </button>

                <button
                    class="btn btn-danger btn-sm"
                    onclick="excluirVeiculo(${indice})">

                    Excluir

                </button>

            </td>

        </tr>
        `;

    });

}
// =====================================================
// FUNÇÃO EXCLUIR VEÍCULO
// =====================================================

function excluirVeiculo(indice){

    let confirmar = confirm(

        "Deseja realmente excluir este veículo?"

    );

    if(confirmar){

        // Remove do array.

        veiculos.splice(indice, 1);


        // Atualiza localStorage.

        localStorage.setItem(

            "veiculos",

            JSON.stringify(veiculos)

        );


        // Atualiza tabela.

        listarVeiculos();

    }

}

// =====================================================
// FUNÇÃO EDITAR VEÍCULO
// =====================================================

function editarVeiculo(indice){

    let veiculo = veiculos[indice];


    let novoModelo = prompt(

        "Modelo:",

        veiculo.modelo

    );

    if(novoModelo === null) return;

    let novaMarca = prompt(

        "Marca:",

        veiculo.marca

    );

    if(novaMarca === null) return;

    let novoAno = prompt(

        "Ano:",

        veiculo.ano

    );

    if(novoAno === null) return;

    let novaCor = prompt(

        "Cor:",

        veiculo.cor

    );

    if(novaCor === null) return;

    let novoPreco = prompt(

        "Preço:",

        veiculo.preco

    );

    if(novoPreco === null) return;

    let novoKm = prompt(

        "Quilometragem:",

        veiculo.km

    );

    if(novoKm === null) return;

    let novaCategoria = prompt(

        "Categoria:",

        veiculo.categoria

    );

    if(novaCategoria === null) return;

    // Atualiza os dados.
    veiculos[indice] = {

        modelo: novoModelo,

        marca: novaMarca,

        ano: novoAno,

        cor: novaCor,

        preco: novoPreco,

        km: novoKm,

        categoria: novaCategoria

    };

    // Atualiza localStorage.
    localStorage.setItem(

        "veiculos",

        JSON.stringify(veiculos)

    );

    // Atualiza tabela.
    listarVeiculos();


    alert(

        "Veículo atualizado com sucesso!"

    );

}


// =====================================================
// CARREGAMENTO INICIAL
// =====================================================

listarVeiculos();
