

/* // declaración de variables */
let isValid = true;
// variables que contienen los ID
const nombre = "nombre";
const email = "email";
const telefono = "telefono";
const mensaje = "mensaje";

/**
 * Función que comprueba el contenido de las casillas del formulario y retorna un mensaje en caso de que sea un empty string
 * @param {* variable de ID} id 
 */


const verificacion = (id) =>{
    const parametro = document.getElementById(id).value.trim();
    if (parametro === "") {
        if (id == "email"){
            document.getElementById(`error-${id}`).textContent = `Por favor, introduce un email válido.` 
            isValid = false;
        }else{
            document.getElementById(`error-${id}`).textContent = `El ${id} es obligatorio.`
            isValid = false;
        }
    };
}

// mediante la función de verificación, comprueba que el contenido no esté vacio, si cualquier elemento está vacio envia un preventDefault();
document.getElementById("miFormulario").addEventListener('submit', function(event) {

    verificacion(nombre);
    verificacion(email);
    verificacion(telefono);
    verificacion(mensaje);

if (isValid === false) {
    event.preventDefault();

    console.log(nombre);
}

});

/* const nombre = document.getElementById("nombre").value.trim();
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
} */