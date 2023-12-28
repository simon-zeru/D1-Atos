function updateChevronClasses() {
    var windowWidth = window.innerWidth;
    var chevronStart = document.querySelector('.start');
    var chevronEnd = document.querySelector('.end');

    if (windowWidth < 992) {
        // Si fenêtre format d'ordinateur alors remplacer les chevrons left et right 
        chevronStart.src = 'icons/chevron-up.svg';
        chevronEnd.src = 'icons/chevron-down.svg';

    } else {
        // Sinon faire l'inverse
        chevronStart.src = 'icons/chevron-left.svg';
        chevronEnd.src = 'icons/chevron-right.svg';
    }
}

// Appelez la fonction initiale pour définir les classes en fonction de la taille initiale
updateChevronClasses();

// Ajoutez un écouteur d'événements pour le redimensionnement de la fenêtre
window.addEventListener('resize', function () {
    // Appelez la fonction lorsqu'il y a un changement de taille
    updateChevronClasses();
});