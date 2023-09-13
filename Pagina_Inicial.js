window.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    if (window.scrollY > 100) {
        logoContainer.classList.add('logo-small');
    } else {
        logoContainer.classList.remove('logo-small');
    }
});

// Seleciona o elemento da caixa de pesquisa
const searchBox = document.getElementById("searchBox");

// Adiciona um ouvinte de evento para o evento hover
searchBox.addEventListener("mouseenter", () => {
    // Expande a caixa de pesquisa
    searchBox.classList.add("expanded");

    // Define um timeout para fechar a caixa de pesquisa após 5 segundos
    setTimeout(() => {
        // Remove a classe "expanded" para fechar a caixa de pesquisa
        searchBox.classList.remove("expanded");
    }, 3000); // 3000 milissegundos = 3 segundos
});



