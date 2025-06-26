// script.js

// Fonction pour afficher un message de bienvenue personnalisé
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.title;

    if (pageTitle.includes('Accueil')) {
        alert('Bienvenue sur la page d\'accueil !');
    } else if (pageTitle.includes('Services')) {
        alert('Découvrez nos services.');
    } else if (pageTitle.includes('Contact')) {
        alert('Contactez-nous pour toute demande.');
    }
});

// Fonction pour mettre en surbrillance le menu actif
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        }
    });
});