// Keep all navigation available when JavaScript is disabled.
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.getElementById('main-navigation');
  if (!header || !toggle || !nav) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('active');
    toggle.querySelector('span').textContent = '+';
  };
  header.classList.add('nav-enhanced');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('active', open);
    toggle.querySelector('span').textContent = open ? '−' : '+';
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  window.matchMedia('(max-width: 700px)').addEventListener('change', closeMenu);
})();
