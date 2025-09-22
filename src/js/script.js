const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const body = document.body;

function setLightTheme() {
    localStorage.setItem('islightmode', JSON.stringify(true));
    sunIcon.classList.add('!hidden');
    moonIcon.classList.remove('!hidden');
    body.classList.add('light');
}

function setDarkTheme() {
    localStorage.setItem('islightmode', JSON.stringify(false));
    moonIcon.classList.add('!hidden');
    sunIcon.classList.remove('!hidden');
    body.classList.remove('light');
}

const isLightmode = JSON.parse(localStorage.getItem('islightmode'));

if (isLightmode === true) {
    setLightTheme();
} else {
    setDarkTheme();
}

// Olay dinleyicileri
sunIcon.addEventListener('click', () => {
    setLightTheme();
});

moonIcon.addEventListener('click', () => {
    setDarkTheme();
});