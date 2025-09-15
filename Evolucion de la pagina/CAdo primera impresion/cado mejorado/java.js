// Modal
function mostrarModal() {
    document.getElementById('modal').classList.remove('hidden');
  }
  function cerrarModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  // Traducción con data-es / data-en
  let currentLang = 'es';
  
  function cambiarIdioma(lang) {
    document.querySelectorAll('[data-es]').forEach(el => {
      el.textContent = (lang === 'es') ? el.getAttribute('data-es') : el.getAttribute('data-en');
    });
  }
  
  document.getElementById('translateBtn').addEventListener('click', () => {
    currentLang = (currentLang === 'es') ? 'en' : 'es';
    cambiarIdioma(currentLang);
    document.getElementById('translateBtn').textContent = (currentLang === 'es') ? 'EN' : 'ES';
  });
  
  // Inicializar con español
  cambiarIdioma('es');
  
  // Inicializar AOS
  AOS.init();
  
  // Inicializar Particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 15 },
      size: { value: 3 },
      color: { value: "#305dea" },
      line_linked: {
        enable: true,
        color: "#305dea"
      },
      move: {
        speed: 1
      }
    }
  });
  
  // Mostrar el modal
function mostrarModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
}

// Cerrar el modal
function cerrarModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}
