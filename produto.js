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
