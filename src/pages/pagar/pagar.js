// IDs de los campos del formulario
const campos = {
  destinario: "nombre",
  telefono: "telefono",
  calle: "calle",
  numeroExt: "numerExt",
  numeroInt: "numeroInt",  // Corregí este valor, estaba como "numerIxt"
  colonnia: "colonia",
  codigoPostal: "codigoPostal",
  ciudad: "ciudad",
  estado:"estado",
  referencias: "referencias"
};

// Expresiones regulares para validación
const expresionesRegulares = {
  nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
  telefono: /^\d{10,12}$/,
  calle: /^[a-zA-Z0-9\s#\-\.\,]+$/,
  numeroExt: /^\d+([-\s]?\d+)*$/,
  numeroInt: /^\d*$/,
  colonia: /^[a-zA-Z0-9\s]+$/,
  codigoPostal: /^\d{5,6}$/,
  ciudad: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
  estado: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
  referencias: /^[a-zA-Z0-9\s\-\.,]+$/
};

// Mensajes de error personalizados
const mensajesError = {
  nombre: "Ingrese un nombre válido y completo.",
  telefono: "Ingrese un número de teléfono válido.",
  calle: "Ingrese una calle válida.",
  numeroExt: "Ingrese un número exterior válido.",
  colonia: "Ingrese una colonia válida.",
  codigoPostal: "Ingrese un código postal válido.",
  ciudad: "Ingrese una ciudad válida.",
  estado: "Ingrese un estado válido.",
  referencias: "Por favor, ingrese una referencia (máximo 200 caracteres)."
};

// Función para validar un campo específico
function validarCampo(id, valor) {
  return expresionesRegulares[id].test(valor.trim());
}

// Función para mostrar mensajes de error o éxito
function mostrarMensaje(id, esValido) {
  const elementoError = document.getElementById(`error-${id}`);
  if (esValido) {
    elementoError.classList.add("correcto");
    elementoError.textContent = `${id.charAt(0).toUpperCase() + id.slice(1)} correcto`;
  } else {
    elementoError.classList.remove("correcto");
    elementoError.textContent = mensajesError[id];
  }
}

// Función para validar todos los campos
function todosCamposValidos() {
  let valido = true;
  Object.values(campos).forEach((campo) => {
    const valor = document.getElementById(campo).value.trim();
    const esValido = validarCampo(campo, valor);
    mostrarMensaje(campo, esValido);
    if (!esValido) {
      valido = false;
    }
  });
  return valido;
}

// Función para guardar la compra en el localStorage
function guardarCompraEnLocalStorage(datosCompra) {
  // Obtener las compras anteriores, si existen
  let compras = JSON.parse(localStorage.getItem("compras")) || [];
  // Agregar la nueva compra
  compras.push(datosCompra);
  // Guardar las compras actualizadas en localStorage
  localStorage.setItem("compras", JSON.stringify(compras));
}

// Función para mostrar el mensaje de compra exitosa
function mostrarCompraExitosa() {
  const mensajeExitoso = document.createElement("div");
  mensajeExitoso.classList.add("alert", "alert-success");
  mensajeExitoso.textContent = "¡Compra realizada con éxito! Gracias por tu compra.";
  document.body.appendChild(mensajeExitoso);

  // Eliminar el mensaje después de 3 segundos
  setTimeout(() => {
    mensajeExitoso.remove();
  }, 3000);
}

// Validación de datos con el botón
document.getElementById("miFormularioDePago").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir el envío tradicional del formulario

  const terminos = document.getElementById('gridCheck');
  if (todosCamposValidos() && terminos.checked) {
    // Recoger los datos del formulario
    const datosFormulario = {};
    Object.values(campos).forEach((campo) => {
      datosFormulario[campo] = document.getElementById(campo).value.trim();
    });

    // Guardar la compra en el localStorage
    guardarCompraEnLocalStorage(datosFormulario);
    console.log("Compra realizada con éxito", datosFormulario);

    // Mostrar el mensaje de compra exitosa
    mostrarCompraExitosa();

    // Esperar 3 segundos antes de redirigir
    setTimeout(() => {
      window.location.href = "/src/pages/inicioSesion/inicioSesion.html"; // O la página que desees
    }, 3000);
  } else {
    document.getElementById('error-registro').classList.add('error-registro-activo');
  }

  // Borrar el mensaje de error después de 3 segundos
  setTimeout(() => {
    document.getElementById('error-registro').classList.remove('error-registro-activo');
  }, 3000);
});
