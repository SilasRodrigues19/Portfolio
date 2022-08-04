const themeToggle = document.getElementById('theme-toggle');

const darkTheme = 'dark-theme',
  lightTheme = 'bi-cloud-sun';

// localStorage variables
const selectedTheme = localStorage.getItem('selected-theme'),
  selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light',
  getCurrentIcon = () =>
    themeToggle.classList.contains(lightTheme)
      ? 'bi-cloud-moon'
      : 'bi-cloud-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeToggle.classList[selectedIcon === 'bi-cloud-moon' ? 'add' : 'remove'](
    lightTheme
  );
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeToggle.classList.toggle(lightTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

!navigator.userAgent.match(/Mobile/)
  ? (themeToggle.innerText = '')
  : (themeToggle.innerHTML = '&nbsp;&nbsp;Tema');
