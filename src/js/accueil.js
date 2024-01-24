// Partie animation de la section secteurs

const secteur = document.querySelector('#secteurs');
const buttonAuto = secteur.querySelector('#autoButton');
const buttonCyber = secteur.querySelector('#cyberButton');
const buttonDecarb = secteur.querySelector('#decarbonButton');
const buttonSupercalc = secteur.querySelector('#supercalcButton');


buttonAuto.addEventListener('click', () => changeTab(1));
buttonCyber.addEventListener('click', () => changeTab(2));
buttonDecarb.addEventListener('click', () => changeTab(3));
buttonSupercalc.addEventListener('click', () => changeTab(4));

/**
 * 
 * @param {1|2|3|4} n 
 */
 function changeTab(n) {
    secteur.querySelectorAll('.info-secteur').forEach(element => element.classList.add('hidden'));
    if (n === 1) {
        secteur.querySelector('#automat').classList.remove('hidden');
    } else if (n === 2) {
        secteur.querySelector('#cyber').classList.remove('hidden');
    } else if (n === 3) {
        secteur.querySelector('#decarbon').classList.remove('hidden');
    } else {
        secteur.querySelector('#supercalc').classList.remove('hidden');
    }
}

// Partie animation du carrousel clients

const slider = document.body.querySelector('#clients');
const sliderBefore = slider.querySelector('.slider-before');
const sliderCurrent = slider.querySelector('.slider-front');
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
    // Structure linéaire utilisée : FILE (FIFO : First In First Out)
    // Définir le sens, ici : TOUJOURS a -> b
    if (dir===1) {
        // Sens forward
        a = sliderAfter;
        b = sliderBefore;
    } else {
        // Sens backward
        b = sliderAfter;
        a = sliderBefore;
    }

    // Ajoutez la classe 'hidden' aux images sur les côtés
    a.querySelectorAll('.img-car').forEach(img => img.classList.add('hidden'));
    b.querySelectorAll('.img-car').forEach(img => img.classList.add('hidden'));

    const imgCurrent = sliderCurrent.children[0]; // Image du milieu (c)

    if (dir < 0) {  
        // Schéma backward : A (SliderBefore) --> C (SliderCurrent) --> B (Slider After)
        const headA = a.children[a.children.length-1]; // Image en tête de a
        const headB = b.children[b.children.length-1]; // Image en tête de b

        // Déplacez les images en avant
        b.insertBefore(imgCurrent, b.children[0]); // image du milieu déplacée en queue du b
        a.insertBefore(headB, a.children[0]); // image en tête de file du b déplacée en queue du a
        sliderCurrent.appendChild(headA); // image en tête de file du a déplacée au milieu
    } else {
        // Schéma forward : B (SliderBefore) <-- C (SliderCurrent) <-- A (Slider After)
        const tailA = a.children[0]; // Image en queue de a
        const tailB = b.children[0]; // Image en queue de b

        // Déplacez les images en arrières
        b.appendChild(imgCurrent); // image du milieu déplacée en tête de file de b
        a.appendChild(tailB); // image en queue de file de b déplacée en tête de file de a
        sliderCurrent.appendChild(tailA); // image en queue de file de a déplacée au milieu
    }
    
    // Retirez la classe 'hidden' des images à afficher qui sont en tête de file de a, b et c
    a.children[a.children.length-1].classList.remove('hidden');
    b.children[b.children.length-1].classList.remove('hidden');
    sliderCurrent.children[0].classList.remove('hidden');
    
}
