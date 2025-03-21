document.addEventListener('DOMContentLoaded', function() {
    //Accediendo al registro e inputs
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');
    
// Obteniendo los Id del formulario
const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    contraseña: false,
};

const usuarios = [];

// Expresiones regulares para la validación de los datos
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$//* /^.{8,16}$/ */,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

//Validación de los campos del formulario de registro
const validarRegistro = (e) => {

    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "contraseña":
            validarCampo(expresiones.contraseña, e.target, 'contraseña');
            coincidenciaContraseña();
            break;
        case "ConfirmaContraseña":
            coincidenciaContraseña();
            break;
    }
}

//Validación de campos, muestra las leyendas en cada campo
const validarCampo = (expresion, input, campo) => {

    if (expresion.test(input.value)) {
        document.querySelector(`#error-${campo}`).classList.remove('error-activo');
        campos[campo] = true; //Si el campo es correcto se remueve
    } else {
        document.querySelector(`#error-${campo}`).classList.add('error-activo');
        campos[campo] = false; //si el campo es incorrecto se agrega el mensaje de error
    }
}

//Coincidencia de la contraseña
const coincidenciaContraseña = () => {

    const inputContraseña1 = document.getElementById('contraseña');
    const inputContraseña2 = document.getElementById('ConfirmaContraseña');

    if (inputContraseña1.value !== inputContraseña2.value) {
        document.querySelector('#error-coincide').classList.add('error-activo');
        campos['contraseña'] = false; //Muestra el mensaje de error
    } else {
        document.querySelector('#error-coincide').classList.remove('error-activo');
        campos['contraseña'] = true;//remueve el mensaje de error
    }

}

//Valida los campos del formulario cuando se levanta la tecla o se sale del campo
inputs.forEach((input) => {

    input.addEventListener('keyup', validarRegistro);
    input.addEventListener('blur', validarRegistro);

});

const todosCamposValidos = () => {
    return campos.nombre && campos.apellido && campos.correo && campos.contraseña;
};

//Validación de datos con el botón
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (todosCamposValidos() && terminos.checked) {
        //Guarda los datos de usuario ingresados en el formulario de registro
        const datos = new FormData(e.target);
        const datosUsuario = Object.fromEntries(datos.entries());  
        
        //console.log("Usuario nuevo agregado" , datosUsuario); 
        
          const nuevoUsuario = {
            "firstName": datosUsuario.nombre,
            "lastName": datosUsuario.apellido,
            "email": datosUsuario.correo,
            "password": datosUsuario.contraseña,
            "role": { "id": 2 }
        };

        console.log(nuevoUsuario)

    
        postUser(nuevoUsuario);

        
        document.getElementById('registro-exitoso').classList.add('registro-exitoso-activo');
        formulario.reset(); //Resetea el formulario una vez enviado
        window.location.href = "/src/pages/inicioSesion/inicioSesion.html";
    } else {

        document.getElementById('error-registro').classList.add('error-registro-activo'); //Muestra el mensaje de error

    }

    

    setTimeout(() => {
        document.getElementById('registro-exitoso').classList.remove('registro-exitoso-activo');
        document.getElementById('error-registro').classList.remove('error-registro-activo');
    }, 3000); //Borra el mensaje en 3 segundos
});
});


const postUser = async (newUser) => {
    const url = "http://localhost:8080/api/v1/users";
     
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    };

    try {
        const response = await fetch(url, options);
      

        // Verifica si la respuesta es exitosa antes de intentar parsear JSON
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${await response.text()}`);
        }

        const registeredUser = await response.json();
        console.log("Respuesta del servidor:", registeredUser);
        return registeredUser;
    } catch (error) {
        console.warn("Error en la solicitud:", error);
        throw error; // Lanzar error para manejarlo en la función principal
    }
};


