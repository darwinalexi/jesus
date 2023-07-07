// Detectar el evento de desplazamiento
window.onscroll = function() {
    let scrollPosition = window.scrollY;
    let header = document.querySelector('header');
  
    // Aplicar estilos adicionales cuando la página se desplaza hacia abajo
    if (scrollPosition > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  