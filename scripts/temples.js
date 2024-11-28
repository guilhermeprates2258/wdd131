// Atualiza o ano e a data da última modificação
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} Guilherme Prates Batista`;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;

// Gerencia a exibição do menu hamburguer
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Adiciona o evento de clique no botão hamburger
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'show' para exibir/ocultar o menu
    navMenu.classList.toggle('show');
    
    // Alterna a classe 'open' para mostrar o "X" e esconder o hambúrguer
    menuToggle.classList.toggle('open');
});
