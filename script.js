// Elements

const hamburger = document.getElementById('hamburger');
const hamburgerButton = document.getElementById('hamburgerButton');
const hamburgerMenu = document.getElementById('hamburgerMenu');

const fakeLinks = document.querySelectorAll('.fakeLinks');
const fakeContacts = document.getElementById('fakeContacts');
const closeFakeContacts = document.getElementById('closeFakeContacts');

// Event listeners

let removeDelay = -1;

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    removeDelay = Date.now();
});

fakeLinks.forEach((element) => element.addEventListener('click', () => {
    fakeContacts.classList.toggle('active');
    removeDelay = Date.now();
}));

window.addEventListener('click', (ev) => {
    if (Date.now() - removeDelay < 200) return;
    if (ev.target === hamburger || ev.target === fakeLinks || ev.target === fakeContacts) return;

    const numChildren = fakeContacts.childElementCount;
    for (let i = 0; i < numChildren; i++) {
        if (ev.target === fakeContacts.children.item(i)) return;
    }

    hamburgerMenu.classList.remove('active');
    fakeContacts.classList.remove('active');
});

closeFakeContacts.addEventListener('click', () => fakeContacts.classList.remove('active'));



