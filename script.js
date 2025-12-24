let dados = [];
const campoBusca = document.getElementById("campoBusca"); // Supondo que o ID do seu input é "campoBusca"
const cardContainer = document.getElementById("cardContainer"); // Supondo que o ID do seu container de cards é "cardContainer"

campoBusca.addEventListener("input", iniciarBusca);

iniciarBusca(); // Chama a função uma vez para carregar os dados iniciais

async function iniciarBusca() {    
    
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
          
        }
    }

    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; 
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");

        let tagsHtml = "";
        if (dado.tags) {
            tagsHtml = `<div class="tags-container">
                ${dado.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>`;
        }

        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        ${tagsHtml}
        <a href="${dado.link_oficial}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}