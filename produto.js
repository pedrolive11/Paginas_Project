function changeImage(newImageSrc) {
    // Troca a imagem principal quando uma miniatura é clicada
    document.getElementById('main-image').src = newImageSrc;
}

function adicionarAoCarrinho() {
    // Lógica para adicionar o produto ao carrinho aqui
    alert('Produto adicionado ao carrinho!');
}


const desc = document.querySelector('.desc');
const content = document.querySelector('.content');
const toggleButton = document.getElementById('toggleButton');

const maxContentHeight = 300; // Altura máxima do conteúdo em pixels

toggleButton.addEventListener('click', function () {
    if (desc.classList.contains('expanded')) {
        // Recolher o conteúdo
        desc.style.maxHeight = maxContentHeight + 'px';
        toggleButton.textContent = 'Mostrar mais';
        desc.classList.remove('expanded');
    } else {
        // Expandir o conteúdo
        desc.style.maxHeight = content.clientHeight + 'px';
        toggleButton.textContent = 'Mostrar menos';
        desc.classList.add('expanded');
    }
});

// Verificar se o conteúdo ultrapassa a altura máxima inicial
if (content.clientHeight > maxContentHeight) {
    toggleButton.style.display = 'block'; // Mostrar o botão de toggle
}


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
updateInstallmentTable(9499.99); // Substitua pelo preço real do produto
