// 🌙 Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Switch icon between sun/moon
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
