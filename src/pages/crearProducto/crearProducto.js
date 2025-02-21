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
        let contenido = ""
    
        switch (categoria) {
            case "computadoras":
                headers = "<tr><th>Modelo</th><th>Procesador</th><th>Memoria RAM</th><th>Almacenamiento</th><th>Stock</th><th>Acciones</th></tr>";
                contenido = "<tr><td>Ejemplo</td><td>Intel i7</td><td>16GB</td><td>512GB SSD</td><td>10</td><td><button class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
                break;
            case "componentes":
                headers = "<tr><th>Marca</th><th>Modelo</th><th>Tipo</th><th>Compatibilidad</th><th>Stock</th><th>Acciones</th></tr>";
                contenido = "<tr><td>AMD</td><td>Ryzen 5 5600X</td><td>Procesador</td><td>Socket AM4</td><td>15</td><td><button class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
                break;
            case "perifericos":
                headers = "<tr><th>Marca</th><th>Tipo</th><th>Conectividad</th><th>RGB</th><th>Stock</th><th>Acciones</th></tr>";
                contenido = "<tr><td>Logitech</td><td>Mouse</td><td>Inalámbrico</td><td>Sí</td><td>20</td><td><button class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
                break;
            case "almacenamiento":
                headers = "<tr><th>Capacidad</th><th>Tipo</th><th>Velocidad</th><th>Interfaz</th><th>Stock</th><th>Acciones</th></tr>";
                contenido = "<tr><td>1TB</td><td>SSD NVMe</td><td>3500MB/s</td><td>PCIe 4.0</td><td>30</td><td><button class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
                break;
            case "redes":
                headers = "<tr><th>Tipo</th><th>Velocidad</th><th>Compatibilidad</th><th>Frecuencia</th><th>Stock</th><th>Acciones</th></tr>";
                contenido = "<tr><td>Router</td><td>Wi-Fi 6</td><td>2.4GHz y 5GHz</td><td>Dual Band</td><td>12</td><td><button class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
                break;
            case "oficina":
                headers = "<tr><th>Tipo</th><th>Marca</th><th>Modelo</th><th>Tipo de Impresión</th><th>Stock</th><th>Acciones</th></tr>";
                contenido = "<tr><td>Impresora</td><td>HP</td><td>LaserJet Pro</td><td>Láser</td><td>5</td><td><button class='btn btn-danger btn-sm'>Eliminar</button></td></tr>";
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
    descripcion: "descripcion"
};

// Expresiones regulares para validación
const regex = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,200}$/,
    precio: /^\d+(\.\d{1,2})?$/,
    imagen: /\.(jpe?g|png|bmp|webp)$/i,
    descripcion: /^.{1,200}$/
};

// Mensajes de error personalizados
const mensajesError = {
    nombre: "Ingrese un nombre válido.",
    precio: "Por favor, ingrese un precio válido.",
    imagen: "Por favor, ingrese una URL de imagen válida.",
    descripcion: "Por favor, ingrese una descripción (máximo 200 caracteres)."
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
    }
});

/**
 * Función para guardar el objeto en localStorage.
 */
function guardarObjeto() {
    // Crear un nuevo objeto con la información del formulario
    const nuevoItem = {
        nombre: document.getElementById('nombre').value.trim(),
        precio: document.getElementById('precio').value.trim(),
        descripcion: document.getElementById('descripcion').value.trim(),
        imagen: document.getElementById('imagen').value.trim()
    };

    // Obtener los ítems existentes en localStorage (si los hay)
    let itemsGuardados = JSON.parse(localStorage.getItem('items')) || [];

    // Agregar el nuevo ítem al array
    itemsGuardados.push(nuevoItem);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('items', JSON.stringify(itemsGuardados));

    // Limpiar el formulario
    document.getElementById("productoForm").reset();

    // Mostrar mensaje de éxito en la interfaz
    const mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.textContent = "Ítem agregado con éxito!";
    mensajeExito.style.display = "block";

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.style.display = "none";
    }, 3000);

    // Mostrar los ítems en la consola (opcional)
    console.log('Ítems guardados:', itemsGuardados);
}

/**
 * Función para borrar el mensaje de error al hacer clic en el campo.
 * @param {string} id - ID del campo.
 */
function borrarLeyenda(id) {
    document.getElementById(`error-${id}`).textContent = "";
}

// Eventos para borrar mensajes de error al hacer clic en los campos
Object.values(campos).forEach((campo) => {
    document.getElementById(campo).addEventListener("click", () => borrarLeyenda(campo));
});
  
          
        

        // Asignar la función de validación al evento submit del formulario
//document.getElementById('productoForm').addEventListener('submit', verificacion);
        