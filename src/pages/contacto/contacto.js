


document.getElementById("miFormulario").addEventListener('submit', function(event) {


const nombre = document.getElementById("nombre").value.trim();
if (nombre === "") {
    document.getElementById("errorNombre").textContent = 'El nombre es obligatorio.';
    isValid = false;
}

const email = document.getElementById("email").value.trim();

if (email === "") {
    document.getElementById("errorEmail").textContent = 'Por favor, introduce un email válido.';
    isValid = false;
}


   const telefono = document.getElementById("telefono").value.trim();
if (telefono === "") {
    document.getElementById("errorTelefono").textContent = 'El teléfono es obligatorio.';
    isValid = false;
}

const mensaje = document.getElementById("mensaje").value.trim();
if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = 'El mensaje es obligatorio.';
    isValid = false;
}

if (isValid === false) {
    event.preventDefault();

    console.log(nombre);
}

});