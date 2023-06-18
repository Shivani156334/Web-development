const modeToggle = document.getElementById('mode-toggle');
const toggleLabel = document.getElementById('toggle-label');

modeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  if (modeToggle.checked) {
    toggleLabel.textContent = 'Bright Mode';
  } else {
    toggleLabel.textContent = 'Dark Mode';
  }
});

// Check if user has a preference for dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  modeToggle.checked = true;
  document.body.classList.add('dark-mode');0
  toggleLabel.textContent = 'Bright Mode';
}
