// gestion du footer

var chevron = document.querySelector('.footer-chev');
const boxcontact = document.querySelector('.box-contact');

/*
chevron.addEventListener('click', () => {
    if (boxcontact.style.display === 'none') {
        boxcontact.style.display = 'flex'; // Ajoute 'display: flex' à l'élément
        boxcontact.style.height = 'auto'; // Change la hauteur
        chevron.src = 'icons/chevron-up.svg';
        boxcontact.classList.remove('show.active');
    } else {
        boxcontact.style.display = 'none';
        boxcontact.style.height = '0'; // Change la hauteur
        chevron.src = 'icons/chevron-down.svg';
        boxcontact.classList.add('show.active');
    }
});*/

// Si on est sur la page Rejoindre.html, on affiche la boxcontact
if (window.location.href.indexOf('Rejoindre.html') > -1) {
    boxcontact.classList.add('active');
    chevron.src = 'icons/chevron-up.svg';
}

chevron.addEventListener('click', () => {
    if(!boxcontact.classList.contains('active')){
        chevron.src = 'icons/chevron-up.svg';
        boxcontact.classList.toggle('active'); // Bascule la classe 'active'
        
        // Défilement vers le bas de la page 50ms plus tard
        setTimeout(function() { 
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth' 
            });
        }, 50);

    }else{
        chevron.src = 'icons/chevron-down.svg';

        boxcontact.classList.toggle('active');
    }

});
