// IDs de los campos del formulario
const campos = {
  nombre: "nombre",
  telefono: "telefono",
  calle: "calle",
  numeroExt: "numeroExt",  // Cambié numerExt a numeroExt
  numeroInt: "numeroInt",
  colonia: "colonia",
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
  numeroExt: /^\d+([-\s]?\d+)*$/, // Aquí ya está correcto
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

function validarCampo(id, valor) {
  if (!expresionesRegulares[id]) {
    console.error(`No existe expresión regular para el campo: ${id}`);
    return false;
  }
  return expresionesRegulares[id].test(valor.trim());
}


// Función para mostrar mensajes de error o éxito
function mostrarMensaje(id, esValido) {
  const elementoError = document.getElementById(`error-${id}`);
  if (esValido) {
    elementoError.classList.add("correcto");  // Se agrega la clase correcto para mensajes válidos
    elementoError.classList.remove("error");  // Elimina la clase error si es válido
    elementoError.textContent = `${id.charAt(0).toUpperCase() + id.slice(1)} correcto`;
  } else {
    elementoError.classList.remove("correcto"); // Si no es válido, se remueve la clase correcto
    elementoError.classList.add("error");       // Se asegura de agregar la clase error
    elementoError.textContent = mensajesError[id];
  }
}


document.addEventListener("DOMContentLoaded", () => {
  // Tu código de validación aquí
});


// Función para validar todos los campos
function todosCamposValidos() {
  let valido = true;
  Object.values(campos).forEach((campo) => {
    const valor = document.getElementById(campo).value.trim();
    console.log(campo);  // Agregar esta línea para depuración
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

  // Eliminar el mensaje después de 5 segundos
  setTimeout(() => {
    mensajeExitoso.remove();
  }, 5000);  // Aumenté el tiempo a 5 segundos para darle más tiempo al usuario a ver el mensaje
}

// Validación de datos con el botón
document.getElementById("miFormularioDePago").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir el envío tradicional del formulario
  const sesionIniciada = localStorage.getItem('sesionIniciada');
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

    // Esperar 5 segundos antes de redirigir (dándole tiempo al usuario para ver el mensaje)
    setTimeout(() => {
      
      console.log(sesionIniciada);
      if (sesionIniciada){
        console.log("hola");
        window.location.href = "/src/pages/miCuenta/miCuenta.html";
      } else{
        window.location.href = "/src/pages/inicioSesion/inicioSesion.html"; // O la página que desees
      }
      
      
    }, 5000);  // Cambié el tiempo de espera a 5 segundos para coincidir con el tiempo que el mensaje permanece visible
    
  }
});
