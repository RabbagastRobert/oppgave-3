const hamburger = document.getElementById('hamburger');
const hamburgerButton = document.getElementById('hamburgerButton');
const hamburgerMenu = document.getElementById('hamburgerMenu');

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

window.addEventListener('click', (ev) => {
    if (ev.target === hamburger) return;
    if (hamburgerMenu.classList.contains('active')) hamburgerMenu.classList.remove('active');
})