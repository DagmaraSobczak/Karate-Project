const mobileMenuButton = document.querySelector('[backdrop-open]');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.querySelector('[backdrop]');

mobileMenuButton.addEventListener('click', () => {
  backdrop.classList.toggle('is-hidden');
  mobileMenu.classList.toggle('d-none');
});

const closeButton = mobileMenu.querySelector('.mobile-menu-btn');
closeButton.addEventListener('click', () => {
  mobileMenu.classList.add('d-none');
  backdrop.classList.add('is-hidden');
});
