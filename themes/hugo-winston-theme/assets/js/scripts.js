const navToggle = document.querySelector(".nav-toggle"),
  navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible"),
    navMenu.classList.contains("nav-menu_visible")
    ? navToggle.setAttribute("aria-label", "Cerrar menú")
    : navToggle.setAttribute("aria-label", "Abrir menú");
});


document.querySelector('button').addEventListener('click', function() {
  fetch('/ruta/al/endpoint/de/java/posts')
    .then(response => response.json())
    .then(data => {
      let postsContainer = document.querySelector('#java-posts');
      postsContainer.innerHTML = '';
      data.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.summary}</p>`;
        postsContainer.appendChild(postElement);
      });
    });
});
