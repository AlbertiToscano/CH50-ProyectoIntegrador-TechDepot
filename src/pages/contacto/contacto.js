

/* // declaración de variables */

// variables que contienen los ID
const nombre = "nombre";
const email = "email";
const telefono = "telefono";
const mensaje = "mensaje";


/**
 * Función que comprueba el contenido de las casillas del formulario y retorna un mensaje en caso de que sea un empty string
 * @param {* variable de ID} id
 */

const verificacion = (id,event) => {
    const parametro = document.getElementById(id).value.trim();
    switch (id) {
    case "nombre":
        //expresion regular para validar que el usuario ingreso letras 
        let regexNombre=/[a-zA-Z]\s[a-zA-Z]/g;
        if (regexNombre.test(parametro)){
            document.getElementById( `error-${id}`).classList.add("correcto");
            document.getElementById( `error-${id}`).textContent = ` ${id} correcto`;
            
        }else{
          document.getElementById( `error-${id}`).classList.remove("correcto");
          
            mensajeError(parametro,id,event);
          
        }
//return constanteNombre;
      break;

    case "email":
        //expresion regular para validar que el usuario ingreso correo correcto 
        let regexCorreo=/[a-zA-Z0-9]@[a-zA-Z]/g;
        if (regexCorreo.test(parametro)){
            document.getElementById( `error-${id}`).classList.add("correcto");
            document.getElementById( `error-${id}`).textContent = ` ${id} correcto`;
            

        }else{
          document.getElementById( `error-${id}`).classList.remove("correcto");
            mensajeError(parametro,id,event);
         
        }
       
      break;

    case "telefono":
         //expresion regular para validar que el usuario ingreso telefono correcto
         let regexTelefono=/\d{10}/;
         if (regexTelefono.test(parametro)){
            document.getElementById( `error-${id}`).classList.add("correcto");
             document.getElementById( `error-${id}`).textContent = ` ${id} correcto`;
 
         }else{
          document.getElementById( `error-${id}`).classList.remove("correcto");
             mensajeError(parametro,id,event);
            
         }
         
      break;

    case "mensaje":
        
         let regexMensaje=/^.{1,200}$/gi;
         if (regexMensaje.test(parametro) && parametro !==""){
            document.getElementById( `error-${id}`).classList.add("correcto");
             document.getElementById( `error-${id}`).textContent = ` ${id} correcto`;
 
         }else{
          document.getElementById( `error-${id}`).classList.remove("correcto");
             mensajeError(parametro,id,event);
           
         }
         
      break;
      default:
        
       

  }

 
};
//funcion que valida la entrada del usuario
function mensajeError(parametro,id,event){

if(id=="nombre"){
    document.getElementById( `error-${id}`).textContent = `ingrese ${id} valido y completo.`;
    event.preventDefault();
}else if(id=="email"){
    document.getElementById( `error-${id}`).textContent = `ingrese un ${id} válido.`;
    event.preventDefault();
      }else if(id=="telefono"){
        document.getElementById( `error-${id}`).textContent = `ingrese un ${id} válido.`;
        event.preventDefault();
      }else if(id=="mensaje"){
        document.getElementById( `error-${id}`).textContent = `Por favor, llena el campo ${id}`;
        event.preventDefault();
      }else if(parametro== ""){
        document.getElementById( `error-${id}`).textContent = `Por favor, llena el campo ${id}`;
        event.preventDefault();
      }
}
//funcion que borra el mensaje de error al hacer click sobre el campo
function borrarLeyenda(id){
  document.getElementById( `error-${id}`).textContent = ``;
  document.getElementById( `${id}`).value = ``;
 
}


// mediante la función de verificación, comprueba que el contenido no esté vacio, si cualquier elemento está vacio envia un preventDefault();
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    verificacion(nombre,event);
    verificacion(email,event);
    verificacion(telefono,event);
    verificacion(mensaje,event);

   
  });