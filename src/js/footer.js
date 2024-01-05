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
        // Défilement vers le haut de la page
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: 'smooth' 
        });

        // Bascule la classe 'active' 150ms plus tard pour laisser le temps de défiler
        setTimeout(function() {
            boxcontact.classList.toggle('active');
        }, 150);
    }

});
