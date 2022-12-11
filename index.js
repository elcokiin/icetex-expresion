const menu = document.querySelector('#menu');
const menuNav = document.getElementsByClassName('menu-nav')[0];
const menuClose = document.getElementsByClassName('menu-nav--close')[0];

menu.addEventListener('click', () => {
    menuNav.classList.add('menu-nav--active')
});

menuClose.addEventListener('click', () => {
    menuNav.classList.remove('menu-nav--active')
});