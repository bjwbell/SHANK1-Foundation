const menuButton = document.querySelector('.menu-button');
const primaryNav = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  primaryNav.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
