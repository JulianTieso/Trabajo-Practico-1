// =========================================================
// JavaScript del sitio de Roma
// =========================================================

// ---------- Modo oscuro ----------
// El botón de la navbar cambia el sitio a colores oscuros y,
// al hacer clic de nuevo, vuelve a los colores claros.
// La elección se guarda en el navegador para que se mantenga
// al pasar de una página a otra.

const botonModoOscuro = document.getElementById("btnModoOscuro");

// Aplica (o quita) el modo oscuro y actualiza el texto del botón
function aplicarModo(oscuro) {
  document.body.classList.toggle("modo-oscuro", oscuro);

  // data-bs-theme hace que los componentes de Bootstrap
  // (acordeón, formularios, listas) también se vean oscuros
  document.documentElement.setAttribute("data-bs-theme", oscuro ? "dark" : "light");

  botonModoOscuro.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
  botonModoOscuro.setAttribute("aria-pressed", oscuro);
}

// Lee la última elección guardada (si el navegador lo permite)
function leerPreferencia() {
  try {
    return localStorage.getItem("modo") === "oscuro";
  } catch (error) {
    return false;
  }
}

// Guarda la elección para las demás páginas
function guardarPreferencia(oscuro) {
  try {
    localStorage.setItem("modo", oscuro ? "oscuro" : "claro");
  } catch (error) {
    // Si el navegador no permite guardar, el botón funciona igual
  }
}

// Al cargar la página se aplica el modo guardado
aplicarModo(leerPreferencia());

// Al hacer clic se invierte el modo actual
botonModoOscuro.addEventListener("click", function () {
  document.body.classList.add("con-transicion");
  const oscuro = !document.body.classList.contains("modo-oscuro");
  aplicarModo(oscuro);
  guardarPreferencia(oscuro);
});

//Validacion de formulario
const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        const nombre = formulario.querySelector('input[name="nombre"]');
        const correo = formulario.querySelector('input[type="email"]');
        const mensaje = formulario.querySelector("textarea");
        const aviso = document.getElementById("mensajeFormulario");

        if (nombre.value.trim() === "" || correo.value.trim() === "" || mensaje.value.trim() === "") {
            event.preventDefault();
            aviso.textContent = "Por favor, completá todos los campos.";
            aviso.style.color = "red";
        } else if (!correo.checkValidity()) {
            event.preventDefault();
            aviso.textContent = "Ingresá un correo electrónico válido.";
            aviso.style.color = "red";
        } else {
            aviso.textContent = "Formulario completado correctamente.";
            aviso.style.color = "green";
        }
    });
}

let btn_ver_mas = document.getElementById("btn_ver_mas");
let span_text = document.getElementById("span_text");
let btn_ver_menos = document.getElementById("btn_Ver_menos");

btn_ver_mas.addEventListener("click", mostrarMas);

function mostrarMas() {
    span_text.classList.add("mostrar");
    btn_ver_mas.classList.add("ocultar");
}

btn_ver_menos.addEventListener("click", ocultarTexto);

function ocultarTexto() {
    span_text.classList.remove("mostrar");
    btn_ver_mas.classList.remove("ocultar");
}
