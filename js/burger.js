let burgerMenu = document.querySelector(".burger");
let nav = document.querySelector(".nav");

function navOpen() {
    nav.classList.toggle("nav-open");
    burgerMenu.classList.toggle("open");
}