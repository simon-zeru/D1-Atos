// Partie animation de la navbar et du burger

const buttonBurger = document.querySelector('.burger');
const navmenu = document.querySelector('.nav-menu');

buttonBurger.addEventListener('click', () => {
    if (navmenu.classList.contains('show')) {
        navmenu.classList.remove('show');
        buttonBurger.children[0].src = 'icons/burger.svg';
    } else {
        navmenu.classList.add('show');
        buttonBurger.children[0].src = 'icons/x.svg';
    }
});



// Recuperer le nom de la page courante
const page = window.location.pathname.split('/')[1]; // récuperer le 2 eme element du tableau (le nom de la page) , Séparation par /
const menu = document.querySelector('.menu'); // recupere le menu via la classe .menu
const links = menu.querySelectorAll('a'); // recupere les a de la navbar
const Accueil = links[0]; // recupere la balise "a" de la navbar Accueil
const NosValeurs = links[1]; // recupere la balise "a" de la navbar NosValeurs
const Rejoindre = links[2]; // recupere la balise "a" de la navbar Rejoindre



if (page == "Rejoindre.html") { // si la page est Rejoindre.html
    Rejoindre.style.backgroundColor = '#a264e4';
    Rejoindre.style.color = '#ffffff';
} else if (page == "Valeurs.html") { // si la page est Valeurs.html
    NosValeurs.style.backgroundColor = '#a264e4';
    NosValeurs.style.color = '#ffffff';
} else if (page == "Accueil.html") { // si la page est Accueil.html
    Accueil.style.backgroundColor = '#a264e4';
    Accueil.style.color = '#ffffff';
}

console.log(page); // debug