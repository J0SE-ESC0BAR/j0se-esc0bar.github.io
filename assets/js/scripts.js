// Ejemplo: main.js

// Código para tu menú (opcional)
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
}

// Código para resaltar bloques de código y agregar encabezado + botón de copiar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    // 1) Resaltar la sintaxis (Highlight.js)
    hljs.highlightElement(codeBlock);

    // 2) Crear contenedor .code-block
    let container = document.createElement("div");
    container.className = "code-block";

    // Insertar el contenedor antes del <pre> actual
    let pre = codeBlock.parentElement;
    pre.parentNode.insertBefore(container, pre);

    // Mover el <pre> dentro del contenedor
    container.appendChild(pre);

    // 3) Crear el encabezado
    let header = document.createElement("div");
    header.className = "code-block__header";
    container.insertBefore(header, pre);

    // 4) Detectar el lenguaje: p.ej. "language-sql" => "SQL"
    let langClass = Array.from(codeBlock.classList).find(cls => cls.startsWith("language-"));
    let langName = langClass ? langClass.replace("language-", "").toUpperCase() : "CODE";

    // 5) Span con el nombre del lenguaje
    let langLabel = document.createElement("span");
    langLabel.className = "code-block__lang";
    langLabel.textContent = langName;
    header.appendChild(langLabel);

    // 6) Botón de copiar
    let copyBtn = document.createElement("button");
    copyBtn.className = "code-block__copybtn";
    copyBtn.textContent = "Copy";
    header.appendChild(copyBtn);

    // Evento para copiar
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy", 2000);
      });
    });
  });

  // Configuración inicial de la vista
  const contenedor = document.getElementById('list');
  if (contenedor) {
    const vistaGuardada = localStorage.getItem('vistaPreferida') || 'lista';
    contenedor.classList.add(vistaGuardada);
    actualizarTextoBoton(vistaGuardada);
  }
});

function toggleVista() {
  const contenedor = document.getElementById('list');
  const vistaTexto = document.getElementById('vista-icon');
  
  if (!contenedor) return;

  const nuevaVista = contenedor.classList.contains('lista') ? 'cuadros' : 'lista';
  
  contenedor.classList.remove('lista', 'cuadros');
  contenedor.classList.add(nuevaVista);
  
  localStorage.setItem('vistaPreferida', nuevaVista);
  actualizarTextoBoton(nuevaVista);
}

function actualizarTextoBoton(vista) {
  const vistaTexto = document.getElementById('vista-icon');
  if (vistaTexto) {
    vistaTexto.textContent = vista === 'lista' ? '🟪' : '🟰';
    vistaTexto.setAttribute("aria-label", vista === 'lista' ? 'Vista en lista' : 'Vista en cuadros');
  }
}
