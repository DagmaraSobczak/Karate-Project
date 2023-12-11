const mobileMenuButton = document.querySelector('[backdrop-open]');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.querySelector('[backdrop]');

let isMenuOpen = false; // Zmienna śledząca stan menu

mobileMenuButton.addEventListener('click', () => {
  if (!isMenuOpen) {
    backdrop.classList.remove('is-hidden');

    isMenuOpen = true;
  } else {
    backdrop.classList.add('is-hidden');

    isMenuOpen = false;
  }
});
