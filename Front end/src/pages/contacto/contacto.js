

// IDs de los campos del formulario
const campos = {
  nombre: "nombre",
  email: "email",
  telefono: "telefono",
  mensaje: "mensaje"
};

// Expresiones regulares para validación
const regex = {
  nombre: /[a-zA-Z]\s[a-zA-Z]/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  telefono: /\d{10}/,
  mensaje: /^.{1,200}$/
};

// Mensajes de error personalizados
const mensajesError = {
  nombre: "Ingrese un nombre válido y completo.",
  email: "Ingrese un correo electrónico válido.",
  telefono: "Ingrese un número de teléfono válido.",
  mensaje: "Por favor, ingrese un mensaje (máximo 200 caracteres)."
};

/**
 * Función para validar un campo específico.
 * @param {string} id - ID del campo a validar.
 * @param {string} valor - Valor del campo.
 * @returns {boolean} - True si es válido, False si no.
 */
function validarCampo(id, valor) {
  return regex[id].test(valor.trim());
}

/**
 * Función para mostrar mensajes de error o éxito.
 * @param {string} id - ID del campo.
 * @param {boolean} esValido - Indica si el campo es válido.
 */
function mostrarMensaje(id, esValido) {
  const elementoError = document.getElementById(`error-${id}`);
  if (esValido) {
    elementoError.classList.add("correcto");
    elementoError.textContent = `${id} correcto`;
  } else {
    elementoError.classList.remove("correcto");
    elementoError.textContent = mensajesError[id];
  }
}

/**
 * Función principal de verificación.
 * @param {string} id - ID del campo.
 * @param {Event} event - Evento del formulario.
 */
function verificacion(id, event) {
  const valor = document.getElementById(id).value.trim();
  const esValido = validarCampo(id, valor);
  mostrarMensaje(id, esValido);

  if (!esValido) {
    event.preventDefault(); // Evita el envío del formulario si hay errores
  }
}

/**
 * Función para borrar el mensaje de error al hacer clic en el campo.
 * @param {string} id - ID del campo.
 */
function borrarLeyenda(id) {
  document.getElementById(`error-${id}`).textContent = "";
  document.getElementById(id).value = "";
}

// Evento para validar el formulario al enviar
document.getElementById("miFormulario").addEventListener("submit", function (event) {
  Object.values(campos).forEach((campo) => verificacion(campo, event));
});

// Eventos para borrar mensajes de error al hacer clic en los campos
Object.values(campos).forEach((campo) => {
  document.getElementById(campo).addEventListener("click", () => borrarLeyenda(campo));
});
  