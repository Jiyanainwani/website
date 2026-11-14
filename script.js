const themeToggle = document.querySelector('#themeToggle');
const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('.nav-links');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('jiya-theme-v2', theme);
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☼' : '◐';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#090d1c' : '#f7f7f8';
}

setTheme(document.documentElement.dataset.theme || 'light');
themeToggle.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  menuToggle.textContent = expanded ? '☰' : '×';
  navLinks.classList.toggle('open', !expanded);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.textContent = '☰';
  });
});
