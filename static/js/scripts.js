// ---------------- MENÚ HAMBURGUESA ----------------
const navToggle = document.querySelector(".nav-toggle");
const navMenu   = document.querySelector(".nav-menu");

// A) toggle normal
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const abierto = navMenu.classList.toggle("nav-menu_visible");
    navToggle.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );
    // Si lo cerró manualmente, limpiamos el flag
    if (!abierto) localStorage.removeItem('menuShouldCloseOnLoad');
  });

  // B) marcar «mantener abierto» cuando pincha un enlace del menú
  //    (solo en pantallas <= 768 px)
  document.querySelectorAll(".nav-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        localStorage.setItem("menuShouldCloseOnLoad", "true");
      }
    });
  });
}

// Código para tu menú (opcional)
document.addEventListener("DOMContentLoaded", () => {
  // Quitar la clase preload para mostrar el contenido
  document.documentElement.classList.remove('preload');
  
  // Manejar bloques de código con estructura predefinida
  document.querySelectorAll(".code-block__copybtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code-block");
      const codeElement = codeBlock.querySelector("pre code");
      
      if (codeElement) {
        navigator.clipboard.writeText(codeElement.innerText).then(() => {
          const originalText = btn.textContent;
          btn.textContent = "¡Copiado!";
          btn.style.background = "var(--highlight-color, #007acc)";
          
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
          }, 2000);
        }).catch(() => {
          btn.textContent = "Error";
          setTimeout(() => {
            btn.textContent = "Copy";
          }, 2000);
        });
      }
    });
  });

  // Manejar bloques de código sin estructura predefinida (generación automática)
  document.querySelectorAll("pre code").forEach((codeElement) => {
    // Solo procesar si no está dentro de un .code-block existente
    if (!codeElement.closest(".code-block")) {
      hljs.highlightElement(codeElement);
      
      const codeBlock = document.createElement("div");
      codeBlock.className = "code-block";
      
      const preElement = codeElement.parentElement;
      const highlightContainer = preElement.parentElement;
      
      // Crear el contenedor highlight si no existe
      if (!highlightContainer.classList.contains("highlight")) {
        const highlight = document.createElement("div");
        highlight.className = "highlight";
        highlightContainer.insertBefore(highlight, preElement);
        highlight.appendChild(codeBlock);
      } else {
        highlightContainer.appendChild(codeBlock);
      }
      
      // Crear header
      const header = document.createElement("div");
      header.className = "code-block__header";
      codeBlock.appendChild(header);
      
      // Determinar el lenguaje
      const languageClass = Array.from(codeElement.classList).find(cls => cls.startsWith("language-"));
      const language = languageClass ?
        languageClass.replace("language-", "").toUpperCase() :
        (codeElement.getAttribute("data-lang") || "CODE").toUpperCase();
      
      // Crear span del lenguaje
      const langSpan = document.createElement("span");
      langSpan.className = "code-block__lang";
      langSpan.textContent = language;
      header.appendChild(langSpan);
      
      // Crear botón de copiar
      const copyBtn = document.createElement("button");
      copyBtn.className = "code-block__copybtn";
      copyBtn.textContent = "Copy";
      header.appendChild(copyBtn);
      
      // Mover el elemento pre al code-block
      codeBlock.appendChild(preElement);
      
      // Agregar funcionalidad de copiado
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(codeElement.innerText).then(() => {
          copyBtn.textContent = "¡Copiado!";
          copyBtn.style.background = "var(--highlight-color, #007acc)";
          
          setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.style.background = "";
          }, 2000);
        }).catch(() => {
          copyBtn.textContent = "Error";
          setTimeout(() => {
            copyBtn.textContent = "Copy";
          }, 2000);
        });
      });
    }
  });
  const e = document.getElementById("list");
  if (e) {
    const t = localStorage.getItem("vistaPreferida") || "lista";
    e.classList.add(t), actualizarTextoBoton(t);
  }
});

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
    
    // Mostrar el contenido al quitar la clase 'preload'
    document.documentElement.classList.remove('preload');
    
    // Agregar evento de cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);
  });
})();
