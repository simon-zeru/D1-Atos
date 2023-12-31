// Partie animation de la navbar et du burger

const buttonBurger = document.querySelector('.burger');
const menu = document.querySelector('.nav-menu');

buttonBurger.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        buttonBurger.children[0].src = 'icons/burger.svg';
    } else {
        menu.classList.add('show');
        buttonBurger.children[0].src = 'icons/x.svg';
    }
});