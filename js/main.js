// Mobile Menu 
(function() {
  'use strict';

  const menuToggle = document.querySelector('.header__menu-toggle');
  const menuClose = document.querySelector('.header__menu-close');
  const nav = document.querySelector('.header__nav');
  const header = document.querySelector('.header');

  if (!menuToggle || !menuClose || !nav || !header) return;

  const toggleMenu = (isOpen) => {
    header.classList.toggle('menu-open', isOpen);
    nav.classList.toggle('is-open', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  };

  menuToggle.addEventListener('click', () => toggleMenu(true));
  menuClose.addEventListener('click', () => toggleMenu(false));
  
  nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) toggleMenu(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) toggleMenu(false);
  });

  nav.setAttribute('aria-hidden', 'true');
})();

