const themeToggle = document.getElementById('theme-toggle')

const darkTheme = 'dark-theme',
    ligthTheme = 'uil-sun';

// localStorage variables
const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeToggle.classList.contains(ligthTheme) ? 'uil-moon' : 'uil_sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeToggle.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](ligthTheme);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(ligthTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


!navigator.userAgent.match(/Mobile/) ? themeToggle.innerText = '' : themeToggle.innerHTML = '&nbsp;&nbsp;Tema'