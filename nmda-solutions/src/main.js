import './scss/main.scss'

document.addEventListener("DOMContentLoaded", function () {

 const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  function toggleMenu() {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Opcional: cerrar menú al hacer clic en un enlace
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if(navMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

    const getCurrentYear = () => {
        const d = new Date();    
        return d.getFullYear();
    }

    let year = getCurrentYear();
    document.getElementById("currentyear").innerHTML = year;


});