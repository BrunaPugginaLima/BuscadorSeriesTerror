function pesquisar() {
    // Obtém a referência para o elemento onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Visualiza o elemento no console para fins de depuração
  
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
        // Se estiver vazio, exibe uma mensagem apropriada
        section.innerHTML = `
            <div class="item-campo-vazio">
                <h5>Nada foi encontrado, pois o campo de pesquisa está vazio.</h5>
            </div>
        `;
        return; // Encerra a função se o campo estiver vazio
    }

    // Converte o valor da pesquisa para minúsculas para tornar a busca case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa a variável que armazenará os resultados da pesquisa
    let resultados = "";
    // Inicializa uma flag para verificar se algum resultado foi encontrado
    let encontrouResultados = false;

    // Itera sobre os dados para verificar se algum item corresponde ao critério de pesquisa
    for (let dado of dados) {
        // Converte os dados do item para minúsculas para comparação case-insensitive
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descrição.toLowerCase();
        let tags = dado.tags.toLocaleLowerCase();

        // Verifica se o título, descrição ou tags contêm o termo de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se encontrar um resultado, adiciona o item ao HTML dos resultados
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p>${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
            `;
            // Atualiza a flag para indicar que resultados foram encontrados
            encontrouResultados = true;
        }
    }

    // Se nenhum resultado foi encontrado, exibe a mensagem "Nada foi encontrado"
    if (!encontrouResultados) {
        resultados = `
        <div class="item-resultado-nao-encontrado-h4">
            <h4>Nada foi encontrado</h4>
        </div>
        `;
    }

    // Atualiza o conteúdo HTML da seção com os resultados da pesquisa ou a mensagem de nenhum resultado
    section.innerHTML = resultados;
}
