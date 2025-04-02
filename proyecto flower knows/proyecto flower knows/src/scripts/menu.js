const svgMenu = document.querySelector('header svg');
const panel = document.querySelector('.menuPanel');

svgMenu.addEventListener('click', () => {
    panel.classList.toggle('activo');
});