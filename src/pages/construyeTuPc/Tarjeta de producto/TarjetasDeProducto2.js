import { aplicarFiltros, filtroProcesador } from "./filtrosParaConstruyeTuPc";
import { addElementToLocalStorage, deleteElementToLocalStorage, obtenerIndiceParaFiltro, obtenerProductoDeLocalStorage, restElementToLocalStorage, sumarTotal, verificarLocalStorage, } from "./funcionesLocalStorage";

/*
función para dibujar las estrellas
**/

export const dibujarEstrellas = (rating) => {
    let textoHtml = "";
    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {
            textoHtml = textoHtml + `<i class="bi bi-star-fill text-warning"></i>
            `;
        } else if (i - 0.5 <= rating) {
            textoHtml = textoHtml + `<i class="bi bi-star-half text-warning"></i>
            `;
        } else {
            textoHtml = textoHtml + `<i class="bi bi-star text-warning"></i>
            `;
        }
    }
    return textoHtml;

};

/* función que retorna el codigo para dar formato a una tarjeta de producto */

export const generarCodigoHtml = (producto) => {
    return `
                       
                            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">
                                ${producto.titulo.length > 85 ? producto.titulo.substring(0, 82) + "..." : producto.titulo} 
                                </h5>
                                <p class="card-text">
                                ${producto.descripcion.length > 55 ? producto.descripcion.substring(0, 52) + "..." : producto.descripcion} 
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                    ${dibujarEstrellas(producto.rating.valoracion)}
                                        <small class="text-muted">(${producto.rating.valoracion})</small>
                                    </div>
                                </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="h5 mb-0 card-price">$${producto.precio} </span>
                                        <div>
                                            <a  class="btn">Añadir al carrito</a>
                                        </div>
                                    </div>
                            </div>
                        
        `;

}


/**
 * función que toma cada producto extraido de un Json y genera un contenedor para separar las tarjetas
 *  */

export const crearTarjeta = (producto, contenedor) => {

    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "card col-xxl-2 col-md-3 col-sm-5";
    /* nuevoProducto.style = "width: 15rem"; */
    nuevoProducto.innerHTML = generarCodigoHtml(producto);
    contenedor.appendChild(nuevoProducto);

    return nuevoProducto;

}


//función que retorna el formato de producto seleccionado

export const generarProductoSeleccionado = (producto) => {
    return                       `<img class="col-xxl-2 col col-sm-12" src="${producto.imagen}" alt="${producto.titulo}">
                                    <!-- contenedor con titulo, descripcion, cantidad y borrar -->
                                    <div class="col-xxl-8 col-md-6 texto-botones">
                                        <h4>
                                        ${producto.titulo.length > 70 ? producto.titulo.substring(0, 67) + "..." : producto.titulo}
                                        </h4>
                                        <p>
                                        ${producto.descripcion.length > 60 ? producto.descripcion.substring(0, 57) + "..." : producto.descripcion}
                                        </p>
                                        <!-- Botones -->
                                        <div id="${producto.id}" class= "container-fluid">
                                            <button type="button" class="btn btn-sm cuadro">-</button>
                                            <span id="cantidad${producto.id}" class="cuadro numeroCantidad">${producto.cantidad}</span>
                                            <button type="button" class="btn btn-sm cuadro">+</button>
                                            
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-sm-12 container-fluid precio">
                                        <h5 class="">Costo unitario</h5>
                                        <span class="">$${producto.precio}</span>
                                        <button id="bote-basura" type="button" class="${producto.id} bi bi-trash-fill btn btn-sm cuadro"> </button>
                                    </div>
                                </div>`

}



/* Despliega el producto seleccionado al añadir agregar producto */

export const crearProductoSeleccionado = (contenedor, productos, categoria) => {
    const indice = obtenerIndiceParaFiltro(categoria);
    const producto = obtenerProductoDeLocalStorage(indice);
    contenedor.innerHTML = generarProductoSeleccionado(producto);
    contenedor.classList = "accordion-body  container-fluid row  producto-seleccionado";
    botonSumar(producto);
    botonRestar(producto);
    botonBorrar(producto, contenedor, productos, categoria);
    
}



/* función que elimina todos los elementos dentro de un contenedor padre */
export const borrarElementos = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.classList = "accordion-body  container-fluid row align-items-start";
        contenedor.removeChild(contenedor.firstChild);
    }

}

/**
 * Función que interactua con el boton de agregar al carrito, añadé el elemento seleccionado al local storage y luego elimina la lista de productos
 */

export const eventoClick = (contenedor, nuevoProducto, producto, productos, categoria) => {
    nuevoProducto.getElementsByClassName("btn")[0].addEventListener("click", () => {
        addElementToLocalStorage(producto);
        crearTienda();
        sumarTotal();
    });
}


/* obtiene la referencia al contenedor de cantidad */
export const contenedorCantidad = (producto) => {
    const cantidad = document.getElementById(`cantidad${producto.id}`);
    return cantidad;

}
/**
 * función que le da funcionalidad al boton de restar
 * @param {} producto 
 */

export const botonRestar = (producto) => {
    const indice = verificarLocalStorage(producto);
    let pieza = obtenerProductoDeLocalStorage(indice);
    const contenedorBoton = document.getElementById(producto.id);
    const Cantidad = contenedorCantidad(producto);
    contenedorBoton.getElementsByClassName("btn")[0].addEventListener("click", () => {
        if (pieza.cantidad > 1) {
            restElementToLocalStorage(producto);
            sumarTotal();
        }
        pieza = obtenerProductoDeLocalStorage(indice);
        Cantidad.innerText = pieza.cantidad;
    });
}

/**
 * función que da funcionalidad al boton sumar
 * @param {*} producto 
 */

export const botonSumar = (producto) => {
    const indice = verificarLocalStorage(producto);
    let pieza = obtenerProductoDeLocalStorage(indice);
    const contenedorBoton = document.getElementById(producto.id);
    const Cantidad = contenedorCantidad(producto);
    contenedorBoton.getElementsByClassName("btn")[1].addEventListener("click", () => {
        if (pieza.cantidad >= 1) {
            addElementToLocalStorage(producto);
            sumarTotal();
        }
        pieza = obtenerProductoDeLocalStorage(indice);
        Cantidad.innerText = pieza.cantidad;
    });
}

/**
 * Funcionalidad del boton borrar dentro de la tarjeta de producto seleccionado
 * @param {*} producto 
 * @param {*} contenedor 
 * @param {*} productos 
 */
export const botonBorrar = (producto, contenedor, productos, categoria ) => {
    const indice = verificarLocalStorage(producto);
    let pieza = obtenerProductoDeLocalStorage(indice);
    contenedor.getElementsByClassName("btn")[2].addEventListener("click", () => {
        if (pieza.cantidad >= 1) {
            deleteElementToLocalStorage(producto);
            sumarTotal();
            borrarElementos(contenedor);
            crearTienda();
        }
    });
}


//** 
// función que toma la lista de productos del json y la ubicación de donde posicionarlos y genera las tarjetas de producto
// 
// 
// */

export const generarTarjetasDeProducto = (productos, contenedorDeTarjetas, categoria)=> {
    if(obtenerIndiceParaFiltro(categoria) != -1){
        crearProductoSeleccionado(contenedorDeTarjetas, productos, categoria );
    }else{
        productos = aplicarFiltros(productos,categoria);
        productos.forEach(producto => {
        const nuevoProducto = crearTarjeta(producto, contenedorDeTarjetas);
        eventoClick(contenedorDeTarjetas, nuevoProducto, producto, productos, categoria);
    });
    }
    

} 



/**
 * función que crea la lista de productos segun una categoria y json
 * @param {*categoria del producto} categoria 
 * @param {*enlace al json} json 
 */

export const crearProductosConstruyeTuPC = async (categoria, json) => {
    const contenedorDeTarjetas = document.getElementById(categoria);
    borrarElementos(contenedorDeTarjetas);
    try {
        const response = await fetch(json);
        const productos = await response.json();
        generarTarjetasDeProducto(productos, contenedorDeTarjetas, categoria);
        

    } catch (error) {
        console.error(error);
    }
}


//función que despliega la tienda con todos los productos
export const crearTienda = () =>{
crearProductosConstruyeTuPC("procesador", "/json/componentes/procesadores.json");
crearProductosConstruyeTuPC("tarjeta madre", "/json/componentes/motherboard.json");
crearProductosConstruyeTuPC("memoria RAM", "/json/componentes/memoriaRAM.json");
crearProductosConstruyeTuPC("almacenamiento", "/json/componentes/almacenamientoInterno.json");
crearProductosConstruyeTuPC("enfriamiento", "/json/componentes/enfriamiento.json");
crearProductosConstruyeTuPC("tarjeta de video", "/json/componentes/GPU.json");
crearProductosConstruyeTuPC("gabinete", "/json/componentes/gabinete.json");
crearProductosConstruyeTuPC("Fuente de alimentacion", "/json/componentes/fuenteDeAlimentacion.json");
}

