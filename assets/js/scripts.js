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

function initializeCodeHighlighting() {
  // Manejar bloques de código con estructura predefinida
  document.querySelectorAll(".code-block__copybtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code-block");
      const codeElement = codeBlock.querySelector("pre code");
      
      if (codeElement && navigator.clipboard) {
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
    if (codeElement.closest(".code-block")) {
      return; // Ya procesado o con estructura predefinida
    }

    if (typeof hljs !== 'undefined' && hljs.highlightElement) {
      hljs.highlightElement(codeElement);
    } else {
      console.warn("highlight.js (hljs) no está definido. El resaltado de sintaxis no funcionará para bloques de código generados dinámicamente.");
      // Opcionalmente, se podría cargar hljs aquí si no está presente
    }
      
    const codeBlock = document.createElement("div");
    codeBlock.className = "code-block";
    
    const preElement = codeElement.parentElement; // Debería ser <pre>
    let highlightContainer = preElement.parentElement; // Podría ser .highlight o el body/div principal

    // Asegurar que el <pre> esté dentro de un <div class="highlight">
    if (!highlightContainer || !highlightContainer.classList.contains("highlight")) {
        const newHighlightDiv = document.createElement("div");
        newHighlightDiv.className = "highlight";
        // Insertar el nuevo .highlight antes del <pre> y mover <pre> dentro
        preElement.parentNode.insertBefore(newHighlightDiv, preElement);
        newHighlightDiv.appendChild(preElement);
        highlightContainer = newHighlightDiv; // Actualizar referencia
    }
    
    // Mover el <pre> dentro del .code-block y el .code-block dentro del .highlight
    // Si preElement ya está en highlightContainer, y highlightContainer es .highlight
    // entonces codeBlock debe ir entre highlightContainer y preElement.
    highlightContainer.insertBefore(codeBlock, preElement); // Insertar codeBlock antes de pre
    codeBlock.appendChild(preElement); // Mover pre dentro de codeBlock
    
    const header = document.createElement("div");
    header.className = "code-block__header";
    
    const languageClass = Array.from(codeElement.classList).find(cls => cls.startsWith("language-"));
    const language = languageClass
      ? languageClass.replace("language-", "").toUpperCase()
      : (codeElement.getAttribute("data-lang") || "CODE").toUpperCase();
    
    const langSpan = document.createElement("span");
    langSpan.className = "code-block__lang";
    langSpan.textContent = language;
    
    const copyBtn = document.createElement("button");
    copyBtn.className = "code-block__copybtn";
    copyBtn.textContent = "Copy";

    header.appendChild(langSpan);
    header.appendChild(copyBtn);
    codeBlock.insertBefore(header, preElement); // Insertar header antes del <pre> dentro de .code-block
    
    copyBtn.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(codeElement.innerText).then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "¡Copiado!";
          copyBtn.style.background = "var(--highlight-color, #007acc)";
          setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = "";
          }, 2000);
        }).catch(() => {
          copyBtn.textContent = "Error";
          setTimeout(() => { copyBtn.textContent = "Copy"; }, 2000);
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove('preload');
  initializeCodeHighlighting();

  // El código para 'list' y 'actualizarTextoBoton' no está definido aquí,
  // se asume que es parte de la lógica de toggleVista o está en otro lugar.
  // Si es necesario, se debe incluir o referenciar.
  // const e = document.getElementById("list");
  // if (e) {
  //   const t = localStorage.getItem("vistaPreferida") || "lista";
  //   e.classList.add(t); // actualizarTextoBoton(t); // Esta función no está definida aquí
  // }
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
