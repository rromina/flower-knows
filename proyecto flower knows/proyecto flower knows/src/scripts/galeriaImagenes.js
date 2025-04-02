const carrusel = document.querySelector('.galeriaCarrusel');
const btnLeft = document.querySelector('.arrow.left');
const btnRight = document.querySelector('.arrow.right');

btnLeft.addEventListener('click', () => {
    carrusel.scrollBy({
        left: -carrusel.offsetWidth,
        behavior: 'smooth'
    });
});

btnRight.addEventListener('click', () => {
    carrusel.scrollBy({
        left: carrusel.offsetWidth,
        behavior: 'smooth'
    });
});