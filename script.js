// Função para exibir os produtos
function exibirProdutos(produtosFiltrados) {
    const section = document.getElementById('resultados-pesquisa');
    section.innerHTML = '';  // Limpa a seção de resultados

    produtosFiltrados.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('item-resultado');
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2><a href="#" target="_blank">${produto.nome}</a></h2>
            <p class="descricao-meta">${produto.descricao}</p>
            <a href="${produto.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
        `;
        section.appendChild(div);
    });
}

// Função de pesquisa
function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum texto digitado!";
        return;
    }

    let resultados = "";
    let nome = "";
    let descricao = "";

    // Filtra os produtos
    let produtosFiltrados = dados.filter(dado => {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        return nome.includes(campoPesquisa) || descricao.includes(campoPesquisa);
    });

    if (!produtosFiltrados.length) {
        section.innerHTML = "<p>Resultado não Encontrado</p>";
    } else {
        exibirProdutos(produtosFiltrados);
    }
}

// Exibe todos os produtos inicialmente ao carregar a página
window.onload = function () {
    exibirProdutos(dados);
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

var activeOffset = $('nav ul .active').position().left;
var activeItemWidth = $('nav ul .active').width();

$('document').ready(function(){
	$('.dot').css('left', activeOffset + activeItemWidth / 2);
	var bgColor = $('.active a').css("background-color");
	$('.dot').css('background-color', bgColor);
});

$('nav').mouseout(function(){
	$('.dot').css('left', activeOffset + activeItemWidth / 2);
	var bgColor = $('.active a').css("background-color");
	$('.dot').css('background-color', bgColor);
});

$('nav ul li').hover(function(){
	var navOffset = $(this).position().left;
	var navItemWidth = $(this).width();
	
	$('.dot').css('left', navOffset + navItemWidth / 2);
	
	var bgColor = $('a', this).css("background-color");
	
	$('.dot').css('background-color', bgColor);
});