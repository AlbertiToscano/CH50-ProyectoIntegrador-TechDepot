// Espera a que el DOM cargue completamente antes de ejecutar el código

document.addEventListener("DOMContentLoaded", function () {

// Agrega un evento al <select> con ID "categoria"
// Cuando el usuario cambie la selección, ejecutará la función actualizarVariantes

    document.getElementById("categoria").addEventListener("change", actualizarVariantes);
});

function actualizarVariantes() {
    const categoria = document.getElementById("categoria").value;
    const variantesHead = document.getElementById("variantesHead");
    const variantesBody = document.getElementById("variantesBody");

    let headers = "";
    let contenido = "";

    switch (categoria) {
        case "computadoras":
            headers = "<tr><th>Modelo</th><th>Procesador</th><th>Memoria RAM</th><th>Almacenamiento</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td> <input id='variante1' type= 'text' class='form-control' placeholder='Modelo'</input> </td>     <td><input id='variante2' type= 'text' class='form-control' placeholder='Procesador'</input></td>          <td><input id='variante3' type= 'text' class='form-control' placeholder='Memoria RAM'</input></td>       <td><input id='variante4' type= 'text' class='form-control' placeholder='Almacenamiento'</input></td>                           <td><input id='variante5 type= 'text' class='form-control' placeholder='Stock'</input></td><td><button type='button' class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
            break;


        case "componentes":
            headers = "<tr><th>Marca</th><th>Modelo</th><th>Tipo</th><th>Compatibilidad</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td> <input id='variante1' type= 'text' class='form-control' placeholder='Marca'</input> </td>     <td><input id='variante2' type= 'text' class='form-control' placeholder='Modelo'</input></td>          <td><input id='variante3' type= 'text' class='form-control' placeholder='Tipo'</input></td>       <td><input id='variante4' type= 'text' class='form-control' placeholder='Compatibilidad'</input></td>                           <td><input id='variante5' type= 'text' class='form-control' placeholder='Stock'</input></td><td><button type='button'  class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
            break;


        case "perifericos":
            headers = "<tr><th>Marca</th><th>Tipo</th><th>Conectividad</th><th>RGB</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td> <input id='variante1' type= 'text' class='form-control' placeholder='Marca'</input> </td>     <td><input id='variante2' type= 'text' class='form-control' placeholder='Tipo'</input></td>          <td><input id='variante3' type= 'text' class='form-control' placeholder='Conectividad'</input></td>       <td><input id='variante4' type= 'text' class='form-control' placeholder='RGB'</input></td>                           <td><input id='variante5' type= 'text' class='form-control' placeholder='Stock'</input></td><td><button type='button' class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
            break;


        case "almacenamiento":
            headers = "<tr><th>Capacidad</th><th>Tipo</th><th>Velocidad</th><th>Interfaz</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td> <input id='variante1' type= 'text' class='form-control' placeholder='Capacidad'</input> </td>     <td><input id='variante2' type= 'text' class='form-control' placeholder='Tipo'</input></td>          <td><input id='variante3' type= 'text' class='form-control' placeholder='Velocidad'</input></td>       <td><input id='variante4' type= 'text' class='form-control' placeholder='Interfaz'</input></td>                           <td><input id='variante5' type= 'text' class='form-control' placeholder='Stock'</input></td><td><button type='button' class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
            break;


        case "redes":
            headers = "<tr><th>Tipo</th><th>Velocidad</th><th>Compatibilidad</th><th>Frecuencia</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td> <input id='variante1' type= 'text' class='form-control' placeholder='Tipo'</input> </td>     <td><input id='variante2' type= 'text' class='form-control' placeholder='Velocidad'</input></td>          <td><input id='variante3' type= 'text' class='form-control' placeholder='Compatibildad'</input></td>       <td><input id='variante4' type= 'text' class='form-control' placeholder='Frecuencia'</input></td>                           <td><input id='variante5' type= 'text' class='form-control' placeholder='Stock'</input></td><td><button type='button' class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
            break;


        case "oficina":
            headers = "<tr><th>Tipo</th><th>Marca</th><th>Modelo</th><th>Tipo de Impresión</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td> <input id='variante1' type= 'text' class='form-control' placeholder='Tipo'</input> </td>     <td><input id='variante2' type= 'text' class='form-control' placeholder='Marca'</input></td>          <td><input id='variante3' type= 'text' class='form-control' placeholder='Modelo'</input></td>       <td><input id='variante4' type= 'text' class='form-control' placeholder='Tipo Impresion'</input></td>                           <td><input id='variante5' type= 'text' class='form-control' placeholder='Stock'</input></td><td><button type='button' class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
            break;

        default:
            headers = "<tr><th>Atributo 1</th><th>Atributo 2</th><th>Atributo 3</th><th>Atributo 4</th><th>Stock</th><th>Acciones</th></tr>";
            contenido = "<tr><td colspan='6' class='text-center'>Seleccione una categoría para ver las variantes</td></tr>";
    }

    variantesHead.innerHTML = headers;
    variantesBody.innerHTML = contenido;
}






// IDs de los campos del formulario
const campos = {
    nombre: "nombre",
    precio: "precio",
    imagen: "imagen",
    descripcion: "descripcion",
    contraseña: "contraseña",
};

// Expresiones regulares para validación
const regex = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,200}$/,
    precio: /^\d+(\.\d{1,2})?$/,
    imagen: /\.(jpe?g|png|bmp|webp)$/i,
    descripcion: /^.{1,200}$/,
    contraseña: /TechAdmin/,
    
    
};

// Mensajes de error personalizados
const mensajesError = {
    nombre: "Ingrese un nombre válido.",
    precio: "Por favor, ingrese un precio válido.",
    imagen: "Por favor, ingrese una URL de imagen válida.",
    descripcion: "Por favor, ingrese una descripción (máximo 200 caracteres).",
    contraseña: "Por favor ingrese la contraseña de Administrador valida.",
    
    

};

/**
 * Función para validar un campo específico.
 * @param {string} id - ID del campo a validar.
 * @param {string} valor - Valor del campo.
 * @returns {boolean} - True si es válido, False si no.
 */
function validarCampo(id, valor) {
    if (valor.trim() === "") {
        return false; // Campo vacío
    }
    return regex[id].test(valor.trim());
}

//Quitar alertas para poderlas mostrar




const ocultarAlerta = () => {
Object.values(campos).forEach((campo) => {
    document.getElementById(campo)
    const alerta = document.getElementById(`error-${campo}`);
alerta.style.display = "none" });


const msjVariante = document.getElementById('msj-variantes');
msjVariante.style.display = "none" 

const msjExito = document.getElementById('msj-exito');
msjExito.style.display = "none" 
};

ocultarAlerta();



/**
 * Función para mostrar mensajes de error o éxito.
 * @param {string} id - ID del campo.
 * @param {boolean} esValido - Indica si el campo es válido.
 */
function mostrarMensaje(id, esValido) {
    const elementoError = document.getElementById(`error-${id}`);
    elementoError.style.display = "block";
    


    if (esValido) {
        elementoError.classList.add("alert-success");
        elementoError.classList.remove("alert-danger");
        elementoError.textContent = `${id} correcto`;
        elementoError.style.display = "block";
    } else {
        elementoError.classList.add("alert-danger");
        elementoError.classList.remove("alert-success");
        elementoError.textContent = mensajesError[id];
        elementoError.style.display = "block";
    }
}

/**
 * Función para validar y guardar los datos en localStorage.
 * @param {string} id - ID del campo.
 * @param {Event} event - Evento del formulario.
 * @returns {boolean} - True si el campo es válido, False si no.
 */
function verificacion(id, event) {
    const valor = document.getElementById(id).value.trim();
    const esValido = validarCampo(id, valor);
    mostrarMensaje(id, esValido);

    if (!esValido) {
        event.preventDefault(); // Evita el envío del formulario si hay errores
    }

    return esValido; // Devuelve si el campo es válido
}

// Evento para validar el formulario al enviar
document.getElementById("productoForm").addEventListener("submit", function (event) {
    let todosValidos = true;
    Object.values(campos).forEach((campo) => {
        if (!verificacion(campo, event)) {
            todosValidos = false;
        }
    });

    if (todosValidos) {
        guardarObjeto(); // Solo guarda si todos los campos son válidos
        const msjExito = document.getElementById('msj-exito');
msjExito.style.display = "block" 
setTimeout(() => {
    msjExito.style.display = "none";
}, 3000 );


        
    
        
        
    }
});

/* const alertPlaceholder = document.getElementById('msj-exito') */
/* function alertaExito(idExito){
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-succes alert-dismissible" role="alert">`,
        `<h4 class="alert-heading">Well done!</h4>`
        `   <p>Se subio correctamente</p>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
    
      idExito.append(wrapper)
    }; */


/**
 * Función para guardar el objeto en localStorage.
 */
function guardarObjeto() {
    //const categoria = document.getElementById("categoria").value;
    // Crear un nuevo objeto con la información del formulario
    const nuevoItem = {
        "nombre": document.getElementById('nombre').value.trim(),
        "precio": document.getElementById('precio').value.trim(),
        "descripcion": document.getElementById('descripcion').value.trim(),
        "imagen": document.getElementById('imagen').value.trim(), 
        "categorias": categorias
    };

    
    /* // Obtener los ítems existentes en localStorage (si los hay)
    let itemsGuardados = JSON.parse(localStorage.getItem('items')) || [];
    
    // Agregar el nuevo ítem al array
    itemsGuardados.push(nuevoItem);
    
    // Guardar el array actualizado en localStorage
    localStorage.setItem('items', JSON.stringify(itemsGuardados));
     */
        
        function agregarLocalStorage(nuevoObjeto){
            
            const clave = `usuario${Date.now()}` ;
            const objString = JSON.stringify(nuevoObjeto);
            
            localStorage.setItem(clave , objString);
            console.log('El json se guardo con la clave  ${i}')
            contador++;
        };
        agregarLocalStorage(nuevoItem);
    
        // Mostrar los ítems en la consola (opcional)
        console.log('Ítems guardados:', nuevoItem);
    
        
    }

    




/**
 * Función para borrar el mensaje de error al hacer clic en el campo.
 * @param {string} id - ID del campo.
 */
function borrarLeyenda(id) {
    document.getElementById(`error-${id}`).textContent = "";
 const alerta = document.getElementById(`error-${id}`);
    alerta.style.display = "none"}
    



// Eventos para borrar mensajes de error al hacer clic en los campos
Object.values(campos).forEach((campo) => {
    document.getElementById(campo).addEventListener("click", () => borrarLeyenda(campo));
    
});
  
  function mensajesExito () {

    const msjVariante = document.getElementById('msj-variantes');
msjVariante.style.display = "block" 

setTimeout(() => {
    msjVariante.style.display = "none";
}, 5000 );
 

  }    
        

document.getElementById("guardarDatos").addEventListener("click", guardarDatos);
document.getElementById("guardarDatos").addEventListener("click", mensajesExito);
let categorias = {};
function guardarDatos() {
    const categoria = document.getElementById("categoria").value;
    const inputs = document.querySelectorAll("#variantesBody input"); // Selecciona todos los inputs dentro de la tabla


    switch (categoria) {
        case "computadoras":
            categorias = {
                categoria: "computadoras",
                modelo: inputs[0].value,
                procesador: inputs[1].value,
                memoriaRAM: inputs[2].value,
                almacenamiento: inputs[3].value,
                stock: inputs[4].value
            };
            break;

        case "componentes":
            categorias = {
                categoria: "componentes",
                marca: inputs[0].value,
                modelo: inputs[1].value,
                tipo: inputs[2].value,
                compatibilidad: inputs[3].value,
                stock: inputs[4].value
            };
            break;

        case "perifericos":
            categorias = {
                categoria: "perifericos",
                marca: inputs[0].value,
                tipo: inputs[1].value,
                conectividad: inputs[2].value,
                rgb: inputs[3].value,
                stock: inputs[4].value
            };
            break;

        case "almacenamiento":
            categorias = {
                categoria: "almacenamiento",
                capacidad: inputs[0].value,
                tipo: inputs[1].value,
                velocidad: inputs[2].value,
                interfaz: inputs[3].value,
                stock: inputs[4].value
            };
            break;

        case "redes":
            categorias = {
                categoria: "redes",
                tipo: inputs[0].value,
                velocidad: inputs[1].value,
                compatibilidad: inputs[2].value,
                frecuencia: inputs[3].value,
                stock: inputs[4].value
            };
            break;

        case "oficina":
            categorias = {
                categoria: "oficina",
                tipo: inputs[0].value,
                marca: inputs[1].value,
                modelo: inputs[2].value,
                tipoImpresion: inputs[3].value,
                stock: inputs[4].value
            };
            break;

        default:
            console.log("Categoría no válida");
            return;
    }

    // Muestra el objeto en la consola 
    console.log("Objeto personalizado:", categorias);
}