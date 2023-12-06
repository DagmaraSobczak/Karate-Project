document.querySelectorAll('.mobile-menu__link--dropdown').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href');

    const isSztukiWalkiPage = window.location.pathname === '/sztukiwalki.html';

    if (!isSztukiWalkiPage) {
      window.location.href = '/sztukiwalki.html' + sectionId;
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
