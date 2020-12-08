// Mobile nav
const hamburger = document.querySelector('.nav__hamburger');
const burgerIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times-circle');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burgerIcon.classList.toggle('close');
    closeIcon.classList.toggle('close');
});