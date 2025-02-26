const navToggle = document.querySelector(".nav-toggle"),
  navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible"),
    navMenu.classList.contains("nav-menu_visible")
    ? navToggle.setAttribute("aria-label", "Cerrar menú")
    : navToggle.setAttribute("aria-label", "Abrir menú");
});


