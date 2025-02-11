
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

