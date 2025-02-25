//Accediendo al registro e inputs
const formulario = document.getElementById('#registro');
const inputs = document.querySelectorAll('#registro input');

// Obteniendo los Id del formulario
const campos = {
    nombre: false,
    telefono: false,
    correo: false,
    contraseña: false,
};

// Expresiones regulares para la validación de los datos
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$//* /^.{8,16}$/ */,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.querySelector(`#error-${campo}`).classList.remove('error-activo');
        campos[campo] = true;
    } else {
        document.querySelector(`#error-${campo}`).classList.add('error-activo');
        campos[campo] = false;
    }
}

const coincidenciaContraseña = () => {
    const inputContraseña1 = document.getElementById('contraseña');
    const inputContraseña2 = document.getElementById('ConfirmaContraseña');
    if(inputContraseña1.value !== inputContraseña2.value){
        document.querySelector('#error-coincide').classList.add('error-activo');
        campos['contraseña'] = false;
    } else{
        document.querySelector('#error-coincide').classList.remove('error-activo');
        campos['contraseña'] = true;
    }
}

const validarRegistro = (e) => {
   switch (e.target.name){
    case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
    case "telefono":
        validarCampo(expresiones.telefono, e.target, 'telefono');
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

inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistro );
    input.addEventListener('blur', validarRegistro );
})

registro.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.nombre && campos.contraseña && campos.correo && campos.telefono){
        registro.reset();
        document.getElementById('')
    }else{
        
    }
});

