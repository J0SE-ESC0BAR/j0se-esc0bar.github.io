// ---------------- MENÚ HAMBURGUESA ----------------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks   = document.querySelector(".nav-links");
const overlay    = document.querySelector(".sidebar-overlay");

function openMenu() {
  if (!navLinks) return;
  navLinks.classList.add("is-open");
  if (menuToggle) {
    menuToggle.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Cerrar menú");
  }
  if (overlay) overlay.classList.add("is-visible");
  localStorage.setItem("menuOpen", "true");
}

function closeMenu() {
  if (!navLinks) return;
  navLinks.classList.remove("is-open");
  if (menuToggle) {
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  }
  if (overlay) overlay.classList.remove("is-visible");
  localStorage.setItem("menuOpen", "false");
}

if (menuToggle && navLinks) {
  // A) Al cargar: si estaba abierto, mostrar y animar cierre
  if (window.matchMedia("(max-width: 768px)").matches) {
    if (localStorage.getItem("menuOpen") === "true") {
      navLinks.classList.add("is-open", "no-transition");
      menuToggle.classList.add("is-open");
      void navLinks.offsetHeight;
      navLinks.classList.remove("no-transition");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          closeMenu();
        });
      });
    }
  }

  // B) Toggle con el botón hamburguesa
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  // C) Cerrar al hacer clic en el overlay
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // D) Cerrar al hacer clic fuera del menú
  document.addEventListener("click", (e) => {
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    if (!navLinks.classList.contains("is-open")) return;
    if (navLinks.contains(e.target) || menuToggle.contains(e.target)) return;
    closeMenu();
  });
}

/* Los bloques de código y su botón de copiar los maneja el render hook
   layouts/_default/_markup/render-codeblock.html (función copyToClipboard),
   que conserva el icono SVG. Se eliminó la lógica duplicada que aquí añadía
   un segundo listener y rompía el botón (lo dejaba vacío o como caja azul). */

// Grid/List view toggle for posts and proyectos
(function() {
  function updateView(mode, containerClass = '') {
    const html = document.documentElement;
    const body = document.body;
    
    // Seleccionar botones específicos según el contenedor
    let btnGrid, btnList;
    if (containerClass === 'featured-post-container') {
      btnGrid = document.getElementById('btnGridFeatured');
      btnList = document.getElementById('btnListFeatured');
    } else {
      btnGrid = document.getElementById('btnGrid');
      btnList = document.getElementById('btnList');
    }
    
    // En pantallas muy pequeñas (menos de 576px), siempre mostrar cuadrícula
    if (window.innerWidth < 576) {
      // Forzar modo cuadrícula en pantallas pequeñas
      html.classList.remove('list-view');
      html.classList.add('grid-view');
      body.classList.remove('list-view');
      body.classList.add('grid-view');
      
      // Ocultar los botones de cambio de vista
      var toggleContainers = document.querySelectorAll('.toggle-container, .view-toggle');
      toggleContainers.forEach(container => {
        if (container) container.style.display = 'none';
      });
      return;
    }
    
    // Para pantallas mayores a 576px, aplicar la vista seleccionada
    if (!btnGrid || !btnList) return;
    
    // Mostrar los botones de cambio de vista
    var toggleContainers = document.querySelectorAll('.toggle-container, .view-toggle');
    toggleContainers.forEach(container => {
      if (container) container.style.display = 'flex';
    });
    
    if (mode === 'grid') {
      // Aplicar al elemento HTML
      html.classList.add('grid-view');
      html.classList.remove('list-view');
      
      // Aplicar al body también para máxima compatibilidad
      body.classList.add('grid-view');
      body.classList.remove('list-view');
      
      // Actualizar estado de los botones
      btnGrid.classList.add('active-view','btn-outline-primary'); 
      btnGrid.classList.remove('btn-outline-secondary');
      btnList.classList.remove('active-view','btn-outline-primary'); 
      btnList.classList.add('btn-outline-secondary');
    } else {
      // Aplicar al elemento HTML
      html.classList.add('list-view');
      html.classList.remove('grid-view');
      
      // Aplicar al body también para máxima compatibilidad
      body.classList.add('list-view');
      body.classList.remove('grid-view');
      
      // Actualizar estado de los botones
      btnList.classList.add('active-view','btn-outline-primary'); 
      btnList.classList.remove('btn-outline-secondary');
      btnGrid.classList.remove('active-view','btn-outline-primary'); 
      btnGrid.classList.add('btn-outline-secondary');
    }
    
    // Guardar preferencia en localStorage
    localStorage.setItem('vistaPreferida', mode);
  }
  
  // Función para sincronizar todos los botones de vista
  function syncAllViewButtons(mode) {
    // Actualizar todos los conjuntos de botones
    updateView(mode, ''); // Botones principales
    updateView(mode, 'featured-post-container'); // Botones del post destacado
    
    // También actualizar cualquier otro conjunto de botones que pueda existir
    const allGridButtons = document.querySelectorAll('[id^="btnGrid"]');
    const allListButtons = document.querySelectorAll('[id^="btnList"]');
    
    allGridButtons.forEach(btn => {
      if (mode === 'grid') {
        btn.classList.add('active-view','btn-outline-primary');
        btn.classList.remove('btn-outline-secondary');
      } else {
        btn.classList.remove('active-view','btn-outline-primary');
        btn.classList.add('btn-outline-secondary');
      }
    });
    
    allListButtons.forEach(btn => {
      if (mode === 'list') {
        btn.classList.add('active-view','btn-outline-primary');
        btn.classList.remove('btn-outline-secondary');
      } else {
        btn.classList.remove('active-view','btn-outline-primary');
        btn.classList.add('btn-outline-secondary');
      }
    });
  }
  
  // Función para manejar el cambio de tamaño de la ventana
  function handleResize() {
    // Obtener la preferencia guardada
    var preferredView = localStorage.getItem('vistaPreferida') || 'list';
    // Actualizar la vista basada en el tamaño actual
    syncAllViewButtons(preferredView);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Agregar eventos a todos los botones de grid y list
    const allGridButtons = document.querySelectorAll('[id^="btnGrid"]');
    const allListButtons = document.querySelectorAll('[id^="btnList"]');
    
    allGridButtons.forEach(btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault(); 
        syncAllViewButtons('grid');
      });
    });
    
    allListButtons.forEach(btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault(); 
        syncAllViewButtons('list');
      });
    });
    
    // Cargar preferencia del usuario o usar la vista de lista por defecto
    var preferredView = localStorage.getItem('vistaPreferida') || 'list';
    syncAllViewButtons(preferredView);

    // Agregar evento de cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);
  });
})();
