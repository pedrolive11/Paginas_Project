window.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo-container');
    if (window.scrollY > 100) {
        logoContainer.classList.add('logo-small');
    } else {
        logoContainer.classList.remove('logo-small');
    }
});


// Obtém o elemento da caixa de pesquisa
const searchBox = document.getElementById("searchBox");

// Adiciona um ouvinte de evento quando o mouse entra na caixa de pesquisa
searchBox.addEventListener("mouseenter", function () {
    // Adiciona a classe "expanded" quando o mouse entra
    searchBox.classList.add("expanded");

    // Define um temporizador para remover a classe após 5 segundos
    setTimeout(function () {
        searchBox.classList.remove("expanded");
    }, 5000); // 5000 milissegundos = 5 segundos
});
