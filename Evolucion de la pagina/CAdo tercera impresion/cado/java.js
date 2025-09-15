// Modal
function mostrarModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
}

function cerrarModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
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
  fraseAleatoriaCAdo(); // actualizar frase al cambiar idioma
});

// Inicializar con español
cambiarIdioma('es');

// Inicializar AOS
AOS.init();



// Formulario de consultas con WhatsApp
function mostrarConfirmacion(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const persona = document.querySelector('input[name="persona"]:checked').value;

  let numeroWhatsApp = "";

  if (persona === "Guada") numeroWhatsApp = "5492304309043";
  if (persona === "Bianca") numeroWhatsApp = "5491122842085";
  if (persona === "Gaston") numeroWhatsApp = "5491159625690";
  if (persona === "Lautaro") numeroWhatsApp = "5491126544906";
  if (persona === "Male") numeroWhatsApp = "5491162165178";

  const mensaje = `✅ Hola ${nombre} ${apellido}, tu mensaje fue recibido por CAdo. Te contactará ${persona}.`;
  const divConfirmacion = document.getElementById("confirmacion");
  divConfirmacion.innerHTML = mensaje;
  divConfirmacion.style.display = 'block';

  const texto = `Hola Acabo De Completar El Formulario De Consulta de Cado Y Me Gustaria Mucho Que Me Brindes Mas informacion , Mi nombre es ${nombre} ${apellido}.`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

// Mostrar formulario cuando el usuario presione el botón de seleccionar emoción
document.getElementById("toggleFormBtn").addEventListener("click", function () {
  document.getElementById("emotionFormModal").classList.toggle("hidden");
});

// Guardar la emoción seleccionada y recargar la página
document.getElementById("personalization-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const emotion = document.getElementById("emotion").value;
  if (emotion) {
    localStorage.setItem("emotion", emotion);
    localStorage.setItem("mostrarFrase", "true");
    location.reload();
  }
});

// Aplicar emoción y cambiar el color de fondo
function applyEmotionTheme(emotion) {
  const emotionClasses = ["alegria", "furia", "tristeza", "miedo", "verguenza", "normal"];
  document.body.classList.remove(...emotionClasses);
  if (emotion && emotion !== "normal") {
    document.body.classList.add(emotion);
  }
}

// Consultar la emoción guardada y aplicarla
const storedEmotion = localStorage.getItem("emotion");
if (storedEmotion) {
  applyEmotionTheme(storedEmotion);

  const mostrarFrase = localStorage.getItem("mostrarFrase");
  if (mostrarFrase === "true") {
    mostrarFraseEmocion(storedEmotion);
    localStorage.removeItem("mostrarFrase");
  }
}

// Frases explicativas por emoción
function mostrarFraseEmocion(emocion) {
  const frasesEmociones = {
    alegria: "La alegría nos conecta con lo que amamos. ¡Está perfecto disfrutarla!",
    tristeza: "La tristeza es parte del proceso de sanar. Permitírtela es un acto de amor propio.",
    furia: "La furia aparece cuando algo duele o importa. Escucharla es entenderte mejor.",
    miedo: "El miedo te protege. Escucharlo es cuidar de vos mismo/a.",
    verguenza: "La vergüenza muestra que te importa lo que piensan los demás, y eso es humano.",
    normal: "Sentirse normal también está bien. Todo cambia y eso también es parte del crecer."
  };

  const frase = frasesEmociones[emocion];
  if (!frase) return;

  const fraseDiv = document.createElement("div");
  fraseDiv.className = "frase-emocion";
  fraseDiv.innerHTML = `
    <span>${frase}</span>
    <button onclick="this.parentElement.remove()">✕</button>
  `;
  document.body.appendChild(fraseDiv);
}

// Frases para el logo (ES + EN)
const frasesCadoES = [
  "Creciendo con vos.",
  "Tu historia importa.",
  "Sentir está bien.",
  "Cada emoción cuenta.",
  "Explorá quién sos.",
  "No estás solo/a.",
  "Todo cambio vale.",
  "Acompañándote siempre.",
  "Ser vos está perfecto.",
  "Lo que sentís, importa.",
  "Lo que haces,es tu historia .",
  "No hay emociones buenas o malas.",
  "Crecer también es equivocarse.",
  "Estás Creciendo ",
  "Tu proceso es único y válido.",
  "Abrí tu mente, cuidá tu corazón.",
  "Sentir diferente también es sentir.",
  "Tu voz merece ser escuchada.",
  "Aceptarte es un acto de valentía.",
  "Sos más fuerte de lo que creés.",
  "Permitite descubrirte.",
  "Cada paso que das vale."
];

const frasesCadoEN = [
  "Growing with you.",
  "Your story matters.",
  "Feeling is okay.",
  "Every emotion counts.",
  "Explore who you are.",
  "You’re not alone.",
  "Every change matters.",
  "Always here for you.",
  "Being yourself is perfect.",
  "What you feel matters.",
  "What you live builds your story.",
  "There are no good or bad emotions.",
  "Growing includes mistakes.",
  "You’re learning, and that’s okay.",
  "Your process is unique and valid.",
  "Open your mind, care for your heart.",
  "Feeling different is still feeling.",
  "Your voice deserves to be heard.",
  "Accepting yourself is brave.",
  "You’re stronger than you think.",
  "You’re not broken, you’re growing.",
  "Let yourself discover who you are.",
  "Adolescence isn’t confusion, it’s exploration.",
  "Not knowing who you are is part of it too.",
  "Every step you take matters."
];

let fraseAnterior = null;

function fraseAleatoriaCAdo() {
  const spanFrase = document.getElementById("fraseCado");
  if (!spanFrase) return;

  const lang = currentLang || 'es';
  const frases = (lang === 'en') ? frasesCadoEN : frasesCadoES;

  let nuevaFrase;
  do {
    nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
  } while (nuevaFrase === fraseAnterior);

  fraseAnterior = nuevaFrase;

  spanFrase.classList.add("fade-out");
  setTimeout(() => {
    spanFrase.textContent = nuevaFrase;
    spanFrase.classList.remove("fade-out");
  }, 800);
}

window.addEventListener("DOMContentLoaded", () => {
  fraseAleatoriaCAdo();
  setInterval(fraseAleatoriaCAdo, 60 * 1000); // cada 1 minuto
});
// Menú responsive
document.getElementById('toggleMenu').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('activo');
});
// === Registro de emociones en historial por usuario ===
function registrarEmocionUsuario(emocion) {
  const sesion = localStorage.getItem('sesionActual');
  if (!sesion) return;
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '{}');
  if (!usuarios[sesion]) usuarios[sesion] = { perfil:{alias: sesion}, historial: [] };
  usuarios[sesion].historial.push({
    fecha: new Date().toLocaleDateString(),
    hora: new Date().toLocaleTimeString(),
    emocion: emocion
  });
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Ejemplo de uso dentro de tu flujo actual
// Después de guardar la emoción en tu código existente, añade:
registrarEmocionUsuario(emotion);
