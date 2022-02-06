const themeToggle = document.querySelector('#theme-toggle')

const darkTheme = 'dark-theme',
    lightThemeIcon = 'uil-sun',
    darkThemeIcon = 'uil-moon';

const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeToggle.classList.contains(lightThemeIcon) ? darkThemeIcon : lightThemeIcon;

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeToggle.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](lightThemeIcon);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(darkThemeIcon);
    themeToggle.classList.toggle(lightThemeIcon);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


!navigator.userAgent.match(/Mobile/) ? themeToggle.innerText = '' : themeToggle.innerHTML = '&nbsp;&nbsp;Tema'