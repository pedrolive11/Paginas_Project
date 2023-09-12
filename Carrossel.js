let count = 1;
let isManualChange = false; // Flag para identificar mudanças manuais
document.getElementById("radio1").checked = true;
// Função para passar para a próxima imagem
function nextImage() {
    if (!isManualChange) {
        let currentRadio = document.querySelector('input[name="radio-btn"]:checked');
        let currentId = parseInt(currentRadio.id.replace("radio", ""));
        count = currentId % 4 + 1;
        document.getElementById("radio" + count).checked = true;
    }
}


// Chama a função nextImage a cada 2 segundos
let interval = setInterval(nextImage, 2000);

// Pausa a troca automática quando o mouse está sobre um botão
const buttons = document.querySelectorAll('.manual-btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        clearInterval(interval);
    });
    button.addEventListener('mouseout', () => {
        interval = setInterval(nextImage, 2000);
    });
    button.addEventListener('click', () => {
        isManualChange = true;
        setTimeout(() => {
            isManualChange = false;
            nextImage(); // Aciona a próxima imagem automaticamente após uma pausa
        }, 3000);
        // Pausa manual por 3 segundos
    });
});
