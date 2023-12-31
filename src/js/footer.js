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
    boxcontact.classList.toggle('active'); // Bascule la classe 'active'
    chevron.src = boxcontact.classList.contains('active') 
        ? 'icons/chevron-up.svg' 
        : 'icons/chevron-down.svg';
});