// gestion du footer

var chevron = document.querySelector('.footer-chev');
const boxcontact = document.querySelector('.box-contact');

// Affichage du footer au chargement de la page
chevron.addEventListener('click', () => {
    if(!boxcontact.classList.contains('active')){
        chevron.src = 'icons/chevron-up.svg';
        boxcontact.classList.toggle('active'); // Bascule la classe 'active'
        
    } else{
        chevron.src = 'icons/chevron-down.svg';

        boxcontact.classList.toggle('active');
    }

});
