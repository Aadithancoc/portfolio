// 🌙 Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change icon
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️'; // Light mode
  } else {
    toggleBtn.textContent = '🌙'; // Dark mode
  }
});

// 📱 Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
