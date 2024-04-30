const menubar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menubar.addEventListener('click', () => {
    menubar.classList.toggle("is-active");
    menuNav.classList.toggle("menu-active")
})