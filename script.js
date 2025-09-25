////////// ELEMENTS

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const hamburgerButton = document.getElementById('hamburgerButton');
const hamburgerMenu = document.getElementById('hamburgerMenu');

// Fake social media contacts
const fakeLinks = document.querySelectorAll('.fakeLinks');
const fakeContacts = document.getElementById('fakeContacts');
const closeFakeContacts = document.getElementById('closeFakeContacts');

// Scroll to top button
const scrollToTop = document.getElementById('scrollToTop');

////////// EVENT LISTENERS

// Records the time an element is set as visible so we can delay the removal of the element
let removeDelay = -1;

// Toggles the hamburgermenu
hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    removeDelay = Date.now();
});

// Toggles the message box for the fake socials
fakeLinks.forEach((element) => element.addEventListener('click', () => {
    fakeContacts.classList.toggle('active');
    removeDelay = Date.now();
}));

// Hides hamburger menu and socials message box when clicking outside of the element
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

// Close button for socials message box
closeFakeContacts.addEventListener('click', () => fakeContacts.classList.remove('active'));

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight * 0.8) {
        scrollToTop.classList.remove('active');
    } else {
        scrollToTop.classList.add('active');
    }

})
