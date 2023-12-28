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


const slider = document.body.querySelector('#clients');
const sliderBefore = slider.querySelector('.slider-before');
const sliderFront = slider.querySelector('.slider-front');
const sliderAfter = slider.querySelector('.slider-after');
const buttonBefore = slider.querySelector('.button-before');
const buttonAfter = slider.querySelector('.button-after');

buttonBefore.addEventListener('click', slideBackward);
buttonAfter.addEventListener('click', slideForward);

function slideBackward () {
    slideDir(-1);
}

function slideForward () {
    slideDir(1);
}

/**
 * 
 * @param {-1|1} dir 
 */
function slideDir (dir) {
    /** @type {HTMLElement} */
    let a;
    /** @type {HTMLElement} */
    let b;
  
    if (dir===-1) {
        a = sliderAfter;
        b = sliderBefore;
    } else {
        b = sliderAfter;
        a = sliderBefore;
    }

    if(dir > 0) {
        const childA = a.children[a.children.length-1];
        const childB = b.children[b.children.length-1];
        const imgCurrent = sliderFront.children[0];

        b.insertBefore(imgCurrent, b.children[0]);
        sliderFront.appendChild(childA);
        a.insertBefore(childB, a.children[0]);
    }
}
