const btnMobile = document.querySelector('.menu-mobile-icon');
const menu = document.querySelector('.menu');

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Opcional: Fecha o menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});