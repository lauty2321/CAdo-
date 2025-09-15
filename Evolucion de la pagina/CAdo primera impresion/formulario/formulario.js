function mostrarConfirmacion(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  const mensaje = `
    ✅ Hola ${nombre} ${apellido}, tu mensaje fue recibido por el proyecto de <strong>CAdo</strong>.<br>
    📞 La empresa se comunicará con vos por este número: <strong>1126544906 (Lauty)</strong>.
  `;

  const divConfirmacion = document.getElementById("confirmacion");
  divConfirmacion.innerHTML = mensaje;
  divConfirmacion.style.display = 'block';

  // Abre WhatsApp Web con un mensaje para CAdo
  const texto = `😃 Hola Acabo De Completar El Formulario De Consulta de Cado🙀 Y Me Gustaria Mucho Que Me Brindes Mas informacion 👩🏻‍💻👨🏻‍💻 , Mi nombre es ${nombre} ${apellido}.`;
  const numeroWhatsApp = "5491126544906";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank'); // abre WhatsApp en una nueva pestaña

  location.hash = 'confirmacion';
}