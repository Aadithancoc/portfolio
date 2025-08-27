// 🌙 Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Switch icon between sun/moon
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
