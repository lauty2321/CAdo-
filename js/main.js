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

// Botón de traducción principal (desktop)
document.addEventListener('DOMContentLoaded', function() {
  const translateBtn = document.getElementById('translateBtn');
  if (translateBtn) {
    translateBtn.addEventListener('click', () => {
      currentLang = (currentLang === 'es') ? 'en' : 'es';
      cambiarIdioma(currentLang);
      translateBtn.textContent = (currentLang === 'es') ? 'EN' : 'ES';
      fraseAleatoriaCAdo(); // actualizar frase al cambiar idioma
    });
  }

  // Botón de traducción móvil
  const translateBtnMobile = document.getElementById("translateBtnMobile");
  if (translateBtnMobile) {
    translateBtnMobile.addEventListener("click", () => {
      currentLang = (currentLang === "es") ? "en" : "es";
      cambiarIdioma(currentLang);
      translateBtnMobile.textContent = (currentLang === "es") ? "EN" : "ES";
      fraseAleatoriaCAdo(); // actualizar frase al cambiar idioma
    });
  }

  // Menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector("nav.main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});



  // Inicializar con español
  cambiarIdioma('es');
  
  // Inicializar AOS
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

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

  const texto = `Hola acabo de completar el formulario de consulta de CAdo y me gustaria mucho que me brindes mas informacion , *Mi nombre es ${nombre} ${apellido}.*`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}

// Mostrar formulario cuando el usuario presione el botón de seleccionar emoción
const toggleFormBtn = document.getElementById("toggleFormBtn");
if (toggleFormBtn) {
  toggleFormBtn.addEventListener("click", function () {
    document.getElementById("emotionFormModal").classList.toggle("hidden");
  });
}

// Guardar la emoción seleccionada y recargar la página
const personalizationForm = document.getElementById("personalization-form");
if (personalizationForm) {
  personalizationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emotion = document.getElementById("emotion").value;
    if (emotion) {
      // Registrar emoción en localStorage (si existe la función)
      if (typeof registrarEmocionUsuario === 'function') {
        registrarEmocionUsuario(emotion);
      }
      localStorage.setItem("emotion", emotion);
      localStorage.setItem("mostrarFrase", "true");
      location.reload();
    }
  });
}

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
  "You're not alone.",
  "Every change matters.",
  "Always here for you.",
  "Being yourself is perfect.",
  "What you feel matters.",
  "What you live builds your story.",
  "There are no good or bad emotions.",
  "Growing includes mistakes.",
  "You're learning, and that's okay.",
  "Your process is unique and valid.",
  "Open your mind, care for your heart.",
  "Feeling different is still feeling.",
  "Your voice deserves to be heard.",
  "Accepting yourself is brave.",
  "You're stronger than you think.",
  "You're not broken, you're growing.",
  "Let yourself discover who you are.",
  "Adolescence isn't confusion, it's exploration.",
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

// Carrusel
let indiceCarrusel = 0;

function moverCarrusel(direccion) {
  const carrusel = document.getElementById("carrusel");
  if (!carrusel) return;
  
  const imagenes = carrusel.querySelectorAll("img");
  const total = imagenes.length;

  indiceCarrusel = (indiceCarrusel + direccion + total) % total;
  carrusel.style.transform = `translateX(-${indiceCarrusel * 100}%)`;
}

// Chatbot functionality (existing code remains the same)
let chatAbierto = false;
let contadorMensajes = 0;
let escribiendo = false;
let conversacionActual = [];

// Base de conocimiento expandida y mejorada
const baseConocimiento = [
  // Preadolescencia
  { 
    claves: ["qué es la preadolescencia", "preadolescencia", "9 años", "10 años", "11 años", "12 años", "13 años"], 
    respuesta: "🧒 La preadolescencia va de los 9 a los 13 años. Es cuando empiezan los primeros cambios físicos y emocionales, pero todavía conservas parte de la niñez. Es normal sentir curiosidad sobre tu cuerpo y querer encajar más con tus amigos.",
    seguimiento: ["¿Te preocupa algún cambio en particular?", "¿Hay algo específico que te genera dudas?"]
  },
  { 
    claves: ["cambios preadolescencia", "cambios físicos", "cuerpo cambia"], 
    respuesta: "🌱 En la preadolescencia pueden aparecer: crecimiento en altura, cambios en la voz, aparición de vello corporal y desarrollo de características sexuales. ¡Cada persona tiene su propio ritmo de crecimiento!",
    seguimiento: ["¿Te sientes cómodo/a hablando sobre estos cambios?"]
  },
  { 
    claves: ["vergüenza cuerpo", "pena", "timidez preadolescencia"], 
    respuesta: "😊 Sentir vergüenza del cuerpo es súper común en esta etapa. Muchos preadolescentes sienten lo mismo. Lo importante es hablar con alguien de confianza y recordar que cada cuerpo es diferente y especial.",
    seguimiento: ["¿Tienes a alguien con quien te sientes cómodo/a hablando?"]
  },

  // Adolescencia
  { 
    claves: ["qué es la adolescencia", "adolescencia", "teenager"], 
    respuesta: "🌟 La adolescencia (13-21 años) es cuando construyes tu identidad, experimentas cambios hormonales intensos y las amistades se vuelven súper importantes. Es tu momento de descubrir quién eres realmente.",
    seguimiento: ["¿Qué aspecto de la adolescencia te resulta más desafiante?"]
  },
  { 
    claves: ["quién soy", "identidad", "encontrarme"], 
    respuesta: "🔍 '¿Quién soy?' es LA pregunta de la adolescencia. Es totalmente normal sentirse confundido/a mientras descubres tus gustos, valores y metas. Este proceso lleva tiempo y cada persona va a su ritmo.",
    seguimiento: ["¿Qué cosas te hacen sentir más como 'tú mismo/a'?"]
  },
  { 
    claves: ["independencia", "libertad", "autonomía"], 
    respuesta: "🗽 Querer independencia es súper natural en la adolescencia. No significa que rechaces a tu familia, sino que estás aprendiendo a tomar tus propias decisiones. Es parte del crecimiento hacia ser adulto/a.",
    seguimiento: ["¿En qué áreas sientes que necesitas más autonomía?"]
  },
  { 
    claves: ["me siento triste", "depresión", "confundido", "ansiedad"], 
    respuesta: "💙 Muchos adolescentes sienten tristeza, ansiedad o confusión. Tu cerebro aún está desarrollándose y las emociones se sienten más intensas. No estás solo/a. Si persiste, hablar con un adulto de confianza puede ayudar mucho.",
    seguimiento: ["¿Hay algo específico que te está causando estos sentimientos?", "¿Tienes a alguien con quien puedas hablar?"]
  },
  { 
    claves: ["amigos importantes", "relaciones", "encajar"], 
    respuesta: "👥 Los amigos se vuelven súper importantes porque empiezas a buscar tu identidad fuera de la familia. Es normal querer encajar y valorar mucho la opinión de tus pares. ¡Es parte del desarrollo social!",
    seguimiento: ["¿Cómo te llevas con tus amigos actualmente?"]
  },
  { 
    claves: ["autoestima", "inseguridad", "confianza"], 
    respuesta: "💪 La autoestima puede ser como una montaña rusa en la adolescencia. Consejos que funcionan: rodéate de personas que te valoren, evita comparaciones constantes y celebra tus logros, por pequeños que sean.",
    seguimiento: ["¿Qué actividades te hacen sentir más seguro/a de ti mismo/a?"]
  },
  { 
    claves: ["padres no entienden", "familia conflicto", "peleas casa"], 
    respuesta: "👨‍👩‍👧‍👦 Los conflictos familiares son normales en esta etapa. Tus padres también están aprendiendo a relacionarse con la nueva versión de ti. La comunicación honesta, aunque cueste, suele ayudar mucho.",
    seguimiento: ["¿Hay algo específico que te gustaría que tus padres entendieran?"]
  },

  // Padres y adultos
  { 
    claves: ["mi hijo no me habla", "hijo distante", "cerrado"], 
    respuesta: "❤️ Es muy común que los adolescentes se vuelvan más reservados. No significa que no los quieran, sino que necesitan espacio para crecer. Lo importante es estar disponibles cuando quieran hablar, sin presionar.",
    seguimiento: ["¿Has intentado preguntarle sobre sus intereses sin juzgar?"]
  },
  { 
    claves: ["hijo rebelde", "mal comportamiento", "actitud"], 
    respuesta: "🌱 La 'rebeldía' suele ser parte del proceso de construcción de identidad. Los adolescentes necesitan diferenciarse para crecer. Mantengan límites claros pero con amor y mucha paciencia.",
    seguimiento: ["¿Qué comportamientos específicos te preocupan más?"]
  },
  { 
    claves: ["comunicación hijos", "hablar adolescente"], 
    respuesta: "💬 Para mejorar la comunicación: escuchen sin juzgar, hagan preguntas abiertas, respeten sus opiniones (aunque no las compartan) y elijan buenos momentos para conversar, como durante actividades juntos.",
    seguimiento: ["¿Qué temas te gustaría poder hablar más abiertamente?"]
  },
  { 
    claves: ["poner límites", "reglas", "disciplina"], 
    respuesta: "🎯 Los límites son fundamentales, pero deben ser claros, justos y explicados. Los adolescentes necesitan estructura para sentirse seguros, aunque protesten. Combinen firmeza con mucha comprensión.",
    seguimiento: ["¿En qué áreas sienten que necesitan límites más claros?"]
  },
  { 
    claves: ["consejos para padres", "ser padre", "ayuda padres"], 
    respuesta: "🤝 Consejos clave para padres: manténganse disponibles emocionalmente, muestren interés genuino en sus cosas, validen sus sentimientos, ofrezcan apoyo sin resolver todo por ellos, y recuerden que están aprendiendo de sus errores.",
    seguimiento: ["¿Cómo sueles mostrar apoyo a tu hijo/a actualmente?"]
  },

  // Emociones específicas
  { 
    claves: ["me siento solo", "soledad", "nadie entiende"], 
    respuesta: "🫂 Sentirse solo/a es muy común en la adolescencia, incluso estando rodeado/a de gente. Es parte de descubrir tu identidad. Buscar actividades donde puedas conocer personas con intereses similares puede ayudar.",
    seguimiento: ["¿Qué actividades te gustan hacer?", "¿Has pensado en unirte a algún grupo o club?"]
  },
  { 
    claves: ["enojado todo el tiempo", "ira", "furioso"], 
    respuesta: "😤 Sentir enojo frecuente es normal en la adolescencia por los cambios hormonales. Lo importante es expresarlo de forma saludable: ejercicio, arte, música, escribir, o hablar con alguien de confianza.",
    seguimiento: ["¿Qué cosas te ayudan a calmarte cuando estás enojado/a?"]
  },
  { 
    claves: ["miedo al futuro", "ansiedad futuro", "qué será de mí"], 
    respuesta: "🎯 Es normal sentir miedo por el futuro. No tienes que tenerlo todo resuelto ahora. Concéntrate en explorar tus intereses, desarrollar tus habilidades y recordar que está bien cambiar de opinión sobre tus planes.",
    seguimiento: ["¿Qué te emociona del futuro, además de lo que te preocupa?"]
  },

  // Temas específicos
  { 
    claves: ["redes sociales", "instagram", "tiktok", "bullying online"], 
    respuesta: "📱 Las redes sociales pueden ser geniales para conectar, pero también pueden causar ansiedad. Consejos: limita el tiempo de uso, no te compares con lo que ves online, bloquea contenido negativo y habla con adultos si algo te molesta.",
    seguimiento: ["¿Cómo te hacen sentir las redes sociales generalmente?"]
  },
  { 
    claves: ["escuela estrés", "estudios difíciles", "presión académica"], 
    respuesta: "📚 La presión académica puede ser agobiante. Recuerda: organiza tu tiempo, pide ayuda cuando la necesites, toma descansos regulares y recuerda que las notas no definen tu valor como persona.",
    seguimiento: ["¿En qué materias o aspectos escolares necesitas más apoyo?"]
  },
  { 
    claves: ["primer amor", "enamorado", "relaciones"], 
    respuesta: "💕 Los primeros sentimientos románticos son intensos y normales. Es importante ir despacio, comunicarte honestamente, respetar límites (tuyos y de la otra persona) y recordar que está bien si las cosas no funcionan.",
    seguimiento: ["¿Te sientes cómodo/a hablando sobre relaciones con alguien de confianza?"]
  }
];

// Respuestas de seguimiento más naturales
const respuestasSeguimiento = [
  "💭 ¿Hay algo más específico sobre esto que te gustaría saber?",
  "🤔 ¿Cómo te sientes después de leer esto?",
  "✨ ¿Te gustaría que hablemos de algún otro aspecto?",
  "🌟 ¿Hay alguna situación particular en la que esto se aplique a tu vida?",
  "💬 ¿Quieres contarme más sobre tu experiencia con esto?"
];

function abrirChat() {
  const widget = document.getElementById('chat-widget');
  const badge = document.getElementById('notification-badge');
  
  if (!chatAbierto) {
    widget.classList.remove('hidden');
    chatAbierto = true;
    badge.classList.add('hidden');
    
    // Si es la primera vez, mostrar mensaje de bienvenida mejorado
    if (contadorMensajes === 0) {
      setTimeout(() => {
        mostrarMensajeBienvenida();
      }, 500);
    }
    
    setTimeout(() => {
      const chatInput = document.getElementById('chat-input');
      if (chatInput) chatInput.focus();
    }, 600);
  } else {
    cerrarChat();
  }
}

function cerrarChat() {
  const widget = document.getElementById('chat-widget');
  if (widget) {
    widget.classList.add('hidden');
    chatAbierto = false;
  }
}

function minimizarChat() {
  cerrarChat();
  setTimeout(() => {
    const badge = document.getElementById('notification-badge');
    if (badge) badge.classList.remove('hidden');
  }, 300);
}

function mostrarMensajeBienvenida() {
  if (contadorMensajes === 0) {
    const mensajesExtra = [
      "🌟 Puedes preguntarme sobre cambios físicos y emocionales en la preadolescencia y adolescencia.",
      "💡 También tengo consejos para padres que quieren entender mejor a sus hijos adolescentes.",
      "💬 ¡No dudes en escribirme cualquier duda que tengas! Estoy aquí para ayudarte."
    ];
    
    mensajesExtra.forEach((mensaje, index) => {
      setTimeout(() => {
        agregarMensaje(mensaje, 'bot');
      }, (index + 1) * 1000);
    });
  }
}

function enviarPreguntaRapida(pregunta) {
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.value = pregunta;
    enviarMensaje();
  }
}

function enviarMensaje() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  
  const mensaje = input.value.trim();
  
  if (mensaje === '') return;
  
  agregarMensaje(mensaje, 'user');
  input.value = '';
  actualizarContador(0);
  
  // Ocultar respuestas rápidas después del primer mensaje del usuario
  if (contadorMensajes === 1) {
    const quickReplies = document.getElementById('quick-replies');
    if (quickReplies) quickReplies.style.display = 'none';
  }
  
  mostrarIndicadorEscritura();
  
  // Simular delay de respuesta más realista
  setTimeout(() => {
    const respuesta = generarRespuesta(mensaje);
    ocultarIndicadorEscritura();
    agregarMensaje(respuesta.respuesta, 'bot');
    
    // Agregar pregunta de seguimiento si existe
    if (respuesta.seguimiento) {
      setTimeout(() => {
        const preguntaSeguimiento = respuesta.seguimiento[Math.floor(Math.random() * respuesta.seguimiento.length)];
        agregarMensaje(preguntaSeguimiento, 'bot', true);
      }, 1500);
    }
  }, 1800 + Math.random() * 1200);
}

function agregarMensaje(contenido, remitente, esSeguimiento = false) {
  const chatBody = document.getElementById('chat-body');
  if (!chatBody) return;
  
  const contenedorMensaje = document.createElement('div');
  contenedorMensaje.className = `message-container ${remitente}-message`;
  
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.innerHTML = remitente === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
  
  const contenidoMensaje = document.createElement('div');
  contenidoMensaje.className = 'message-content';
  
  const burbuja = document.createElement('div');
  burbuja.className = `message-bubble ${esSeguimiento ? 'follow-up-message' : ''}`;
  burbuja.textContent = contenido;
  
  const tiempo = document.createElement('div');
  tiempo.className = 'message-time';
  tiempo.textContent = obtenerTiempoActual();
  
  contenidoMensaje.appendChild(burbuja);
  contenidoMensaje.appendChild(tiempo);
  
  contenedorMensaje.appendChild(avatar);
  contenedorMensaje.appendChild(contenidoMensaje);
  
  chatBody.appendChild(contenedorMensaje);
  chatBody.scrollTop = chatBody.scrollHeight;
  
  if (remitente === 'user') {
    contadorMensajes++;
    conversacionActual.push({ tipo: 'user', contenido: contenido, tiempo: new Date() });
  } else {
    conversacionActual.push({ tipo: 'bot', contenido: contenido, tiempo: new Date() });
  }
}

function generarRespuesta(mensaje) {
  const mensajeLower = mensaje.toLowerCase();
  
  // Buscar coincidencias en la base de conocimiento
  for (let item of baseConocimiento) {
    if (item.claves.some(clave => mensajeLower.includes(clave))) {
      return {
        respuesta: item.respuesta,
        seguimiento: item.seguimiento
      };
    }
  }
  
  // Respuestas para saludos
  if (mensajeLower.includes('hola') || mensajeLower.includes('buenos') || mensajeLower.includes('buenas')) {
    return {
      respuesta: "¡Hola! 😊 Me alegra que estés aquí. Soy CAdo Assistant y estoy para ayudarte con cualquier duda sobre preadolescencia, adolescencia o consejos para padres. ¿En qué puedo ayudarte hoy?",
      seguimiento: ["¿Hay algo específico que te esté preocupando?"]
    };
  }
  
  // Respuestas para agradecimientos
  if (mensajeLower.includes('gracias') || mensajeLower.includes('thank')) {
    return {
      respuesta: "¡De nada! 😊 Me alegra poder ayudarte. Recuerda que siempre puedes volver a preguntarme lo que necesites. ¿Hay algo más en lo que pueda ayudarte?",
      seguimiento: null
    };
  }
  
  // Respuesta por defecto más útil
  return {
    respuesta: "🤔 No tengo una respuesta específica para eso, pero me interesa ayudarte. Puedes preguntarme sobre:\n\n• Cambios en la preadolescencia (9-13 años)\n• Desafíos de la adolescencia (13-21 años)\n• Consejos para padres\n• Manejo de emociones\n• Relaciones familiares y sociales\n\n¿Alguno de estos temas te interesa?",
    seguimiento: null
  };
}

function mostrarIndicadorEscritura() {
  escribiendo = true;
  const indicador = document.getElementById('typing-indicator');
  if (indicador) {
    indicador.classList.remove('hidden');
    
    const chatBody = document.getElementById('chat-body');
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function ocultarIndicadorEscritura() {
  escribiendo = false;
  const indicador = document.getElementById('typing-indicator');
  if (indicador) {
    indicador.classList.add('hidden');
  }
}

function obtenerTiempoActual() {
  const ahora = new Date();
  return ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

function manejarEnter(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    enviarMensaje();
  }
}

// Funciones para emojis
function toggleEmojiPicker() {
  const picker = document.getElementById('emoji-picker');
  if (picker) {
    picker.classList.toggle('hidden');
  }
}

function insertarEmoji(emoji) {
  const input = document.getElementById('chat-input');
  if (!input) return;
  
  const posicion = input.selectionStart;
  const valorActual = input.value;
  const nuevoValor = valorActual.substring(0, posicion) + emoji + valorActual.substring(posicion);
  
  input.value = nuevoValor;
  input.focus();
  input.setSelectionRange(posicion + emoji.length, posicion + emoji.length);
  
  actualizarContador(nuevoValor.length);
  const picker = document.getElementById('emoji-picker');
  if (picker) picker.classList.add('hidden');
}

// Contador de caracteres
function actualizarContador(longitud) {
  const contador = document.getElementById('char-counter');
  if (!contador) return;
  
  const restantes = 300 - longitud;
  contador.textContent = restantes;
  
  contador.className = 'char-counter';
  if (restantes < 50) contador.classList.add('warning');
  if (restantes < 20) contador.classList.add('danger');
}

// Event listeners adicionales
document.addEventListener('DOMContentLoaded', function() {
  // Contador de caracteres en el input del chat
  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.addEventListener('input', function(e) {
      actualizarContador(e.target.value.length);
    });
  }

  // Cerrar emoji picker al hacer click fuera
  document.addEventListener('click', function(e) {
    const picker = document.getElementById('emoji-picker');
    const emojiBtn = document.querySelector('.emoji-btn');
    
    if (picker && emojiBtn && !picker.contains(e.target) && !emojiBtn.contains(e.target)) {
      picker.classList.add('hidden');
    }
  });

  // Mostrar notificación después de unos segundos si no se ha abierto el chat
  setTimeout(() => {
    if (!chatAbierto) {
      const badge = document.getElementById('notification-badge');
      if (badge) badge.classList.remove('hidden');
    }
  }, 10000);
});
// === Contadores animados en Somos CAdo ===
document.addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador");
  const speed = 40;

  const animarContador = (contador) => {
    const target = +contador.getAttribute("data-target");
    const valor = +contador.innerText;
    const incremento = Math.ceil(target / 100);

    if (valor < target) {
      contador.innerText = valor + incremento;
      setTimeout(() => animarContador(contador), speed);
    } else {
      contador.innerText = target;
    }
  };

  const observar = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        animarContador(entrada.target);
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.6 });

  contadores.forEach(contador => observar.observe(contador));
});
// Carrusel Mejorado
const slides = document.querySelectorAll('.carousel img');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');
const indicators = document.querySelectorAll('.carousel-indicators span');

let currentIndex = 0;
let interval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    indicators[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      indicators[i].classList.add('active');
    }
  });
  currentIndex = index;
}

function nextSlide() {
  let newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  let newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

// Auto play
function startCarousel() {
  interval = setInterval(nextSlide, 4000);
}

function stopCarousel() {
  clearInterval(interval);
}

// Eventos
next.addEventListener('click', () => { nextSlide(); stopCarousel(); startCarousel(); });
prev.addEventListener('click', () => { prevSlide(); stopCarousel(); startCarousel(); });
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    stopCarousel();
    startCarousel();
  });
});

document.querySelector('.carousel').addEventListener('mouseenter', stopCarousel);
document.querySelector('.carousel').addEventListener('mouseleave', startCarousel);

// Inicializar
showSlide(currentIndex);
startCarousel();
