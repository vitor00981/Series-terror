function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria o HTML de um item de resultado
        resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}">
                <h2>
                    <a href="#" target="_blank">${dado.titulo} (${dado.ano})</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <p class="descricao-meta">${dado.ondeAssistir}</p>
                <p class="descricao-meta">${dado.diretor}</p>
                <a href=${dado.link} target="_blank">mais informações</a>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}
// console.log(dados);
