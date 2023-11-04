const menuOverlay = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.mobile-menu-btn');
const openMenuBtn = document.querySelector('.mobile-menu__button');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('d-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('d-none');
});