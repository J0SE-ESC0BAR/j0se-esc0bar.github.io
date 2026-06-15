/**
 * LIGHTBOX PERSONALIZADO PARA HUGO
 * Funcionalidades: navegación, zoom, responsive, teclado
 */

class CustomLightbox {
  constructor() {
    this.currentIndex = 0;
    this.images = [];
    this.isZoomed = false;
    this.zoomLevel = 1;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.translateX = 0;
    this.translateY = 0;
    
    this.init();
  }
  
  init() {
    this.createLightboxHTML();
    this.bindEvents();
    this.collectImages();
  }
  
  collectImages() {
    this.images = Array.from(document.querySelectorAll('.lightbox-trigger')).map(img => ({
      src: img.dataset.lightboxSrc || img.src,
      alt: img.dataset.lightboxAlt || img.alt,
      caption: img.dataset.lightboxCaption || ''
    }));
  }
  createLightboxHTML() {
    const lightboxHTML = `
      <div class="lightbox-overlay" id="lightbox-overlay">
        <!-- Barra superior: contador + cerrar -->
        <div class="lightbox-toolbar">
          <span class="lightbox-counter" id="lightbox-counter"></span>
          <button class="lightbox-icon-btn lightbox-close-btn" id="lightbox-close" title="Cerrar (Esc)" aria-label="Cerrar">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <!-- Escenario: imagen + navegación -->
        <div class="lightbox-stage">
          <button class="lightbox-nav lightbox-nav-left" id="lightbox-prev" title="Anterior (←)" aria-label="Imagen anterior">
            <i class="bi bi-chevron-left"></i>
          </button>

          <img class="lightbox-image" id="lightbox-image" alt="" draggable="false">

          <button class="lightbox-nav lightbox-nav-right" id="lightbox-next" title="Siguiente (→)" aria-label="Imagen siguiente">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>

        <!-- Pie: caption + controles de zoom -->
        <div class="lightbox-caption" id="lightbox-caption"></div>
        <div class="lightbox-zoom-controls">
          <button class="lightbox-icon-btn" id="lightbox-zoom-out" title="Alejar (-)" aria-label="Alejar">
            <i class="bi bi-dash-lg"></i>
          </button>
          <button class="lightbox-icon-btn" id="lightbox-reset" title="Restablecer (0)" aria-label="Restablecer zoom">
            <i class="bi bi-arrow-counterclockwise"></i>
          </button>
          <button class="lightbox-icon-btn" id="lightbox-zoom-in" title="Acercar (+)" aria-label="Acercar">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // Referencias a elementos
    this.overlay = document.getElementById('lightbox-overlay');
    this.image = document.getElementById('lightbox-image');
    this.caption = document.getElementById('lightbox-caption');
    this.counter = document.getElementById('lightbox-counter');
    this.closeBtn = document.getElementById('lightbox-close');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    this.zoomInBtn = document.getElementById('lightbox-zoom-in');
    this.zoomOutBtn = document.getElementById('lightbox-zoom-out');
    this.resetBtn = document.getElementById('lightbox-reset');
  }
  
  bindEvents() {
    // Eventos de imágenes
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('lightbox-trigger')) {
        e.preventDefault();
        this.openLightbox(e.target);
      }
    });
    
    // Eventos del lightbox
    this.closeBtn.addEventListener('click', () => this.closeLightbox());
    this.prevBtn.addEventListener('click', () => this.previousImage());
    this.nextBtn.addEventListener('click', () => this.nextImage());
    this.zoomInBtn.addEventListener('click', () => this.zoomIn());
    this.zoomOutBtn.addEventListener('click', () => this.zoomOut());
    this.resetBtn.addEventListener('click', () => this.resetZoom());
    
    // Cerrar al hacer clic en el fondo (overlay o área alrededor de la imagen)
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay || e.target.classList.contains('lightbox-stage')) {
        this.closeLightbox();
      }
    });
    
    // Eventos de teclado
    document.addEventListener('keydown', (e) => {
      if (!this.overlay.classList.contains('active')) return;
      
      switch(e.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
        case '+':
        case '=':
          this.zoomIn();
          break;
        case '-':
          this.zoomOut();
          break;
        case '0':
          this.resetZoom();
          break;
      }
    });
    
    // Eventos de zoom y arrastre
    this.image.addEventListener('mousedown', (e) => this.startDrag(e));
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('mouseup', () => this.endDrag());
    
    // Eventos táctiles para móviles
    this.image.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) this.startDrag(e.touches[0]);
    });
    document.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) this.drag(e.touches[0]);
    });
    document.addEventListener('touchend', () => this.endDrag());
    
    // Rueda del ratón para zoom
    this.image.addEventListener('wheel', (e) => {
      if (!this.overlay.classList.contains('active')) return;
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    }, { passive: false });
  }
  
  openLightbox(clickedImg) {
    this.collectImages(); // Actualizar lista de imágenes
    
    // Encontrar índice de la imagen clickeada
    this.currentIndex = this.images.findIndex(img => 
      img.src === (clickedImg.dataset.lightboxSrc || clickedImg.src)
    );
    
    if (this.currentIndex === -1) this.currentIndex = 0;
    
    this.showImage();
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  }
  
  closeLightbox() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
    this.resetZoom();
  }
  
  showImage() {
    const currentImg = this.images[this.currentIndex];
    if (!currentImg) return;
    
    this.image.onerror = () => {
      this.image.src = '/images/no-img.png';
    };
    this.image.src = currentImg.src;
    this.image.alt = currentImg.alt;
    
    // Caption
    if (currentImg.caption) {
      this.caption.textContent = currentImg.caption;
      this.caption.style.display = 'block';
    } else {
      this.caption.style.display = 'none';
    }
    
    // Counter
    this.counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    
    // Mostrar/ocultar navegación
    this.prevBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
    this.nextBtn.style.display = this.images.length > 1 ? 'flex' : 'none';
    this.counter.style.display = this.images.length > 1 ? 'block' : 'none';
  }
  
  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage();
    this.resetZoom();
  }
  
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage();
    this.resetZoom();
  }
  
  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.5, 3);
    this.applyZoom();
  }
  
  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.5, 0.5);
    this.applyZoom();
  }
  
  resetZoom() {
    this.zoomLevel = 1;
    this.translateX = 0;
    this.translateY = 0;
    this.applyZoom();
    this.image.classList.remove('zoomed');
    this.isZoomed = false;
  }
  
  applyZoom() {
    // translate() antes que scale() -> el desplazamiento es en píxeles de
    // pantalla (1:1 con el cursor), no multiplicado por el nivel de zoom
    this.image.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.zoomLevel})`;

    if (this.zoomLevel > 1) {
      this.image.classList.add('zoomed');
      this.isZoomed = true;
    } else {
      this.image.classList.remove('zoomed');
      this.isZoomed = false;
    }
  }

  startDrag(e) {
    if (!this.isZoomed) return;

    this.isDragging = true;
    this.startX = e.clientX - this.translateX;
    this.startY = e.clientY - this.translateY;
    // desactivar la transición mientras se arrastra para que siga al cursor sin retraso
    this.image.classList.add('dragging');

    if (e.preventDefault) e.preventDefault();
  }

  drag(e) {
    if (!this.isDragging || !this.isZoomed) return;

    this.translateX = e.clientX - this.startX;
    this.translateY = e.clientY - this.startY;

    this.applyZoom();
    if (e.preventDefault) e.preventDefault();
  }

  endDrag() {
    this.isDragging = false;
    this.image.classList.remove('dragging');
  }
}

// Inicializar lightbox cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.lightboxInstance = new CustomLightbox();
});

// Reinicializar cuando hay cambios dinámicos en el contenido
document.addEventListener('contentChanged', () => {
  if (window.lightboxInstance) {
    window.lightboxInstance.collectImages();
  }
});
