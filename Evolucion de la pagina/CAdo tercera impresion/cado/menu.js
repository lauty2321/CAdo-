
    const menuBtn = document.getElementById('Preadolescente');
    const nav = document.querySelector('nav.main-nav');
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
 

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('visible'));
  });


