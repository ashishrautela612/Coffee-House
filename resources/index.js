document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".menuBtn");
    const menuBtnBurger = document.querySelector(".menuBurger");
    const navItems = document.querySelector(".navItems");

    menuBtnBurger.addEventListener("click", () => {
        menuBtnBurger.classList.toggle("active");
        navItems.classList.toggle("active");
    });

    document.querySelectorAll(".navItem").forEach(item => {
        item.addEventListener("click", () => {
            menuBtnBurger.classList.toggle("active");
            navItems.classList.toggle("active");
        });
    });

    window.addEventListener("scroll",()=>{
        menuBtnBurger.classList.remove("active");
        navItems.classList.remove("active");
    })
});