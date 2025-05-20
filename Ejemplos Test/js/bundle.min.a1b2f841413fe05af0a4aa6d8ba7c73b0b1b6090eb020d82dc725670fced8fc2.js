const navToggle = document.querySelector(".nav-toggle"),
  navMenu = document.querySelector(".nav-menu");
navToggle &&
  navMenu &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible"),
      navMenu.classList.contains("nav-menu_visible")
        ? navToggle.setAttribute("aria-label", "Cerrar menú")
        : navToggle.setAttribute("aria-label", "Abrir menú");
  }),
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("pre code").forEach((e) => {
      hljs.highlightElement(e);
      let n = document.createElement("div");
      n.className = "code-block";
      let s = e.parentElement;
      s.parentNode.insertBefore(n, s), n.appendChild(s);
      let o = document.createElement("div");
      (o.className = "code-block__header"), n.insertBefore(o, s);
      let a = Array.from(e.classList).find((e) => e.startsWith("language-")),
        r = a ? a.replace("language-", "").toUpperCase() : "CODE",
        i = document.createElement("span");
      (i.className = "code-block__lang"), (i.textContent = r), o.appendChild(i);
      let t = document.createElement("button");
      (t.className = "code-block__copybtn"),
        (t.textContent = "Copy"),
        o.appendChild(t),
        t.addEventListener("click", () => {
          navigator.clipboard.writeText(e.innerText).then(() => {
            (t.textContent = "Copied!"),
              setTimeout(() => (t.textContent = "Copy"), 2e3);
          });
        });
    });
    const e = document.getElementById("list");
    if (e) {
      const t = localStorage.getItem("vistaPreferida") || "lista";
      e.classList.add(t), actualizarTextoBoton(t);
    }
  });
function toggleVista() {
  const e = document.getElementById("list"),
    n = document.getElementById("vista-icon");
  if (!e) return;
  const t = e.classList.contains("lista") ? "cuadros" : "lista";
  e.classList.remove("lista", "cuadros"),
    e.classList.add(t),
    localStorage.setItem("vistaPreferida", t),
    actualizarTextoBoton(t);
}
function actualizarTextoBoton(e) {
  const t = document.getElementById("vista-icon");
  t && (t.textContent = e === "lista" ? "🟪" : "🟰");
}

// Grid/List view toggle for posts and proyectos
(function() {
  function updateView(mode) {
    var bodyEl = document.body;
    var btnGrid = document.getElementById('btnGrid');
    var btnList = document.getElementById('btnList');
    var gridView = document.getElementById('gridView');
    var listView = document.getElementById('listView');
    
    // En pantallas muy pequeñas (menos de 576px), siempre mostrar cuadrícula
    if (window.innerWidth < 576) {
      // Forzar modo cuadrícula en pantallas pequeñas
      bodyEl.classList.remove('list-view');
      if (gridView) gridView.style.display = 'block';
      if (listView) listView.style.display = 'none';
      // Ocultar los botones de cambio de vista
      var toggleContainer = document.querySelector('.toggle-container');
      if (toggleContainer) toggleContainer.style.display = 'none';
      return;
    }
    
    // Para pantallas mayores a 576px, aplicar la vista seleccionada
    if (!btnGrid || !btnList) return;
    
    // Mostrar los botones de cambio de vista
    var toggleContainer = document.querySelector('.toggle-container');
    if (toggleContainer) toggleContainer.style.display = 'flex';
    
    if (mode === 'grid') {
      bodyEl.classList.remove('list-view');
      btnGrid.classList.add('active-view','btn-outline-primary'); 
      btnGrid.classList.remove('btn-outline-secondary');
      btnList.classList.remove('active-view','btn-outline-primary'); 
      btnList.classList.add('btn-outline-secondary');
      
      // Mostrar contenedor de cuadrícula y ocultar lista
      if (gridView) gridView.style.display = 'block';
      if (listView) listView.style.display = 'none';
    } else {
      bodyEl.classList.add('list-view');
      btnList.classList.add('active-view','btn-outline-primary'); 
      btnList.classList.remove('btn-outline-secondary');
      btnGrid.classList.remove('active-view','btn-outline-primary'); 
      btnGrid.classList.add('btn-outline-secondary');
      
      // Mostrar contenedor de lista y ocultar cuadrícula
      if (gridView) gridView.style.display = 'none';
      if (listView) listView.style.display = 'flex';
    }
    
    // Guardar preferencia en localStorage
    localStorage.setItem('vistaPreferida', mode);
  }
  
  // Función para manejar el cambio de tamaño de la ventana
  function handleResize() {
    // Obtener la preferencia guardada
    var preferredView = localStorage.getItem('vistaPreferida') || 'list';
    // Actualizar la vista basada en el tamaño actual
    updateView(preferredView);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var btnGrid = document.getElementById('btnGrid');
    var btnList = document.getElementById('btnList');
    
    btnGrid && btnGrid.addEventListener('click', function(e){
      e.preventDefault(); 
      updateView('grid');
    });
    
    btnList && btnList.addEventListener('click', function(e){
      e.preventDefault(); 
      updateView('list');
    });
    
    // Cargar preferencia del usuario o usar la vista de lista por defecto
    var preferredView = localStorage.getItem('vistaPreferida') || 'list';
    updateView(preferredView);
    
    // Agregar evento de cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);
  });
})();
