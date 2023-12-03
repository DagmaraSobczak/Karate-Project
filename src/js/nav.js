const kontaktLink = document.querySelector('.nav__link[href="#Kontakt"]');

const isHomePage = window.location.pathname === '/index.html';

if (isHomePage) {
  kontaktLink.addEventListener('click', function (event) {
    event.preventDefault();

    const kontaktSection = document.getElementById('Kontakt');
    if (kontaktSection) {
      kontaktSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
} else {
  kontaktLink.setAttribute('href', '/index.html#Kontakt');
}
