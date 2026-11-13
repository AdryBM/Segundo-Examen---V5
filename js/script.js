// MENÚ HAMBURGUESA

const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector("#menu-principal");

// Al hacer clic se agrega o se saca la clase "open".
// El CSS usa esa clase para mostrar (.menu-principal.open) o esconder el menú.
botonMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});

//PREGUNTAS FRECUENTES

const preguntas = document.querySelectorAll(".pregunta");

// A cada pregunta le asignamos su propio clic
preguntas.forEach((pregunta) => {
  const botonPregunta = pregunta.querySelector(".pregunta-boton");

  // Clic: abre o cierra la respuesta
  botonPregunta.addEventListener("click", () => {
    // Agrega o saca la clase "pregunta-abierta" (el CSS muestra u oculta la respuesta)
    const abierta = pregunta.classList.toggle("pregunta-abierta");

    // Avisa a los lectores de pantalla si la respuesta está desplegada
    botonPregunta.setAttribute("aria-expanded", String(abierta));

    // Si se cerró, el título queda negro aunque el cursor siga encima
    pregunta.classList.toggle("pregunta-recien-cerrada", !abierta);
  });
  // Cuando el cursor sale de la pregunta, vuelve a funcionar el hover rojo
  pregunta.addEventListener("mouseleave", () => {
    pregunta.classList.remove("pregunta-recien-cerrada");
  });
});

// FORMULARIO DE CONTACTO

const formulario = document.querySelector(".formulario-contacto");
const campoEmail = document.querySelector("#email");

// Al enviar, se revisa el email antes de hacer nada más
formulario.addEventListener("submit", (evento) => {
  // Evita que la página se recargue al enviar
  evento.preventDefault();

  // checkValidity() devuelve false si el campo está vacío o no tiene formato de email
  const emailValido = campoEmail.checkValidity();

  // Si no es válido se agrega la clase de error; si lo es, se saca
  formulario.classList.toggle("formulario-error", !emailValido);

  // Avisa a los lectores de pantalla si el campo tiene error
  campoEmail.setAttribute("aria-invalid", String(!emailValido));
});
