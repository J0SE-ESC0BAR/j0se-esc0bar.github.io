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
        <div class="lightbox-container">
          <!-- Botón cerrar arriba a la derecha -->
          <button class="lightbox-close-btn" id="lightbox-close" title="Cerrar (Esc)">
            <i class="bi bi-x-lg"></i>
          </button>
          
          <!-- Áreas de navegación - cubren los lados de la imagen -->
          <div class="lightbox-nav-area lightbox-nav-left" id="lightbox-prev" title="Imagen anterior (←)">
            <i class="bi bi-chevron-left lightbox-nav-icon"></i>
          </div>
          
          <div class="lightbox-nav-area lightbox-nav-right" id="lightbox-next" title="Imagen siguiente (→)">
            <i class="bi bi-chevron-right lightbox-nav-icon"></i>
          </div>
          
          <!-- Imagen principal -->
          <img class="lightbox-image" id="lightbox-image" alt="">
          
          <!-- Caption -->
          <div class="lightbox-caption" id="lightbox-caption"></div>
          
          <!-- Controles de zoom abajo a la derecha -->
          <div class="lightbox-zoom-controls">
            <button class="lightbox-zoom-btn" id="lightbox-zoom-out" title="Alejar (-)">
              <i class="bi bi-zoom-out"></i>
            </button>
            <button class="lightbox-zoom-btn" id="lightbox-zoom-in" title="Acercar (+)">
              <i class="bi bi-zoom-in"></i>
            </button>
            <button class="lightbox-zoom-btn" id="lightbox-reset" title="Restablecer zoom (0)">
              <i class="bi bi-arrows-fullscreen"></i>
            </button>
          </div>
          
          <!-- Contador abajo en el centro -->
          <div class="lightbox-counter" id="lightbox-counter"></div>
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
    
    // Cerrar al hacer clic en overlay
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
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
    this.image.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]));
    document.addEventListener('touchmove', (e) => this.drag(e.touches[0]));
    document.addEventListener('touchend', () => this.endDrag());
    
    // Rueda del ratón para zoom
    this.image.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    });
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
    this.image.style.transform = `scale(${this.zoomLevel}) translate(${this.translateX}px, ${this.translateY}px)`;
    
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
    
    e.preventDefault();
  }
  
  drag(e) {
    if (!this.isDragging || !this.isZoomed) return;
    
    this.translateX = e.clientX - this.startX;
    this.translateY = e.clientY - this.startY;
    
    this.applyZoom();
    e.preventDefault();
  }
  
  endDrag() {
    this.isDragging = false;
  }
}

// Inicializar lightbox cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new CustomLightbox();
});

// Reinicializar cuando hay cambios dinámicos en el contenido
document.addEventListener('contentChanged', () => {
  // Para casos donde se carga contenido dinámicamente
  if (window.lightboxInstance) {
    window.lightboxInstance.collectImages();
  }
});
