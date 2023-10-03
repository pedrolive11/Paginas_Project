function changeImage(newImageSrc) {
    // Troca a imagem principal quando uma miniatura é clicada
    document.getElementById('main-image').src = newImageSrc;
}

function adicionarAoCarrinho() {
    // Lógica para adicionar o produto ao carrinho aqui
    alert('Produto adicionado ao carrinho!');
}
// Selecione o botão "Ver mais..." e o modal
const toggleButton = document.getElementById("toggleButton");
const modal = document.getElementById("modal2");

// Selecione o botão de fechar do modal
const closeButton = document.getElementById("closeButton2");

// Adicione um ouvinte de evento para abrir o modal quando o botão for clicado
toggleButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Adicione um ouvinte de evento para fechar o modal quando o botão de fechar for clicado
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Feche o modal se o usuário clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Função para abrir o modal
document.querySelector(".payment-button").addEventListener("click", function () {
    document.getElementById("payment-modal").style.display = "block";
    document.getElementById("credit-tab").click();
});

// Função para fechar o modal
document.querySelector("#close-modal").addEventListener("click", function () {
    document.getElementById("payment-modal").style.display = "none";
});

// Alternar entre as abas
document.querySelectorAll(".tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        // Esconder todos os conteúdos das abas
        document.querySelectorAll(".tab-content").forEach(function (content) {
            content.style.display = "none"; // Esconder todos os conteúdos
        });

        // Mostrar o conteúdo da aba correspondente
        const tabId = this.id.replace("-tab", "-content");
        document.getElementById(tabId).style.display = "flex";
        document.getElementById(tabId).style.flexDirection = "column"; // Alterar a direção para "column-reverse"
    });
});

// Função para calcular e criar a tabela de parcelas
function createInstallmentTable(price) {
    const installmentTable = document.createElement("table");
    const tableBody = document.createElement("tbody");

    // Calcula e cria as linhas da tabela
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement("tr");
        const numInstallments = i;
        const installmentAmount = (price / numInstallments).toFixed(2);
        const totalAmount = (price).toFixed(2);

        const cell1 = document.createElement("td");
        cell1.textContent = `${numInstallments}x sem juros de R$ ${installmentAmount}`;

        const cell2 = document.createElement("td");
        cell2.textContent = `Total: R$ ${totalAmount}`;

        const space = document.createTextNode("");
        cell1.appendChild(space);

        row.appendChild(cell1);
        row.appendChild(cell2);
        tableBody.appendChild(row);
    }

    installmentTable.appendChild(tableBody);

    return installmentTable;
}

// Função para atualizar a tabela de parcelas com base no preço
function updateInstallmentTable(price) {
    const installmentTableContainer = document.getElementById("credit-content");
    installmentTableContainer.innerHTML = ""; // Limpa o conteúdo atual

    const installmentTable = createInstallmentTable(price);
    installmentTableContainer.appendChild(installmentTable);
}

// Exemplo de uso (chame esta função com o preço do produto desejado)
updateInstallmentTable(0); // Substitua pelo preço real do produto


$(document).ready(function () {
    // Espera até que o documento HTML esteja completamente carregado.

    $('.slick-carousel').slick({
        // Seleciona a classe "slick-carousel" e aplica o carrossel Slick a ela.

        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        prevArrow: '.seta1',
        nextArrow: '.seta2',
        autoplay: true,
        // Configurações do carrossel:
        // - centerMode: Habilita o modo "center mode".
        // - centerPadding: Define o espaço entre os slides quando o centro está em foco.
        // - slidesToShow: Define quantos slides serão exibidos ao mesmo tempo.

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
        // Configurações responsivas para diferentes tamanhos de tela:
        // - Quando a largura da tela for menor que 768px, ajusta as configurações.
        // - Quando a largura da tela for menor que 480px, ajusta as configurações novamente.
    });
});
