// Import specific Bootstrap JavaScript components
// import Alert from 'bootstrap/js/dist/alert';
// import Button from 'bootstrap/js/dist/button';
import Carousel from 'bootstrap/js/dist/carousel';
import Collapse from 'bootstrap/js/dist/collapse'; // Commonly used by Navbar for responsive toggling
// import Dropdown from 'bootstrap/js/dist/dropdown';
// import Modal from 'bootstrap/js/dist/modal';
// import Offcanvas from 'bootstrap/js/dist/offcanvas';
// import Popover from 'bootstrap/js/dist/popover';
// import ScrollSpy from 'bootstrap/js/dist/scrollspy';
// import Tab from 'bootstrap/js/dist/tab';
// import Toast from 'bootstrap/js/dist/toast';
// import Tooltip from 'bootstrap/js/dist/tooltip';

// Export a global object or attach to window if needed,
// or let Hugo's JS bundling handle the scope.
// For simplicity with Hugo Pipes, often just importing is enough
// if the components auto-initialize or are initialized elsewhere.

// Example of making them available globally if needed, though usually not required with bundlers:
// window.bootstrap = {
//   Carousel,
//   Collapse,
//   // Add other components if you make them global
// };

// If your custom scripts.js initializes these, ensure it can access them.
// For instance, if scripts.js does: new bootstrap.Carousel(elem)
// Then the above global export might be one way, or ensure scripts.js
// also imports them if it's part of the bundle.

// For now, just importing them should make them part of the bundle
// Hugo creates. Bootstrap components often auto-initialize on data attributes.