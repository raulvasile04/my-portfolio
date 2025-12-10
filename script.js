// Select the button and the body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if user has a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggleBtn.textContent = '☀️ Light';
} else {
  // default: light
  themeToggleBtn.textContent = '🌙 Dark';
}

// Add click event to toggle button
themeToggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-theme');

  if (isDark) {
    themeToggleBtn.textContent = '☀️ Light';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '🌙 Dark';
    localStorage.setItem('theme', 'light');
  }
});
