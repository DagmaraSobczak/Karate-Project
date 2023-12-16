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
  kontaktLink.setAttribute(
    'href',
    'https://dagmarasobczak.github.io/Karate-Project/index.html#Kontakt'
  );
}

const karateLink = document.querySelector('.nav__link[href="#Karate"]');
const kobudoLink = document.querySelector('.nav__link[href="#Kobudo"]');
const jiujitsuLink = document.querySelector('.nav__link[href="#Jiu-jitsu"]');
const isSztukiWalkiPage = window.location.pathname === '/sztukiwalki.html';

if (isSztukiWalkiPage) {
  karateLink.addEventListener('click', function (event) {
    event.preventDefault();

    const karateSection = document.getElementById('Karate');
    if (karateSection) {
      karateSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
} else {
  karateLink.setAttribute('href', '/sztukiwalki.html#Karate');
}

const kobudoSection = document.getElementById('Kobudo');
if (kobudoSection) {
  kobudoSection.scrollIntoView({ behavior: 'smooth' });
} else {
  kobudoLink.setAttribute('href', '/sztukiwalki.html#Kobudo');
}

const jiujitsuSection = document.getElementById('Jiu-jitsu');
if (jiujitsuSection) {
  jiujitsuSection.scrollIntoView({ behavior: 'smooth' });
} else {
  jiujitsuLink.setAttribute('href', '/sztukiwalki.html#Jiu-jitsu');
}
window.onload = function () {
  window.scrollTo(0, 0);
};
