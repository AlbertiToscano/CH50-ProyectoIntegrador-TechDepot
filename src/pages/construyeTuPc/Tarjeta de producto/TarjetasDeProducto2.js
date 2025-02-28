import { addElementToLocalStorage, obtenerProductoDeLocalStorage, restElementToLocalStorage, sumarTotal, verificarLocalStorage, } from "./funcionesLocalStorage";

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
                                ${producto.titulo.length > 90 ? producto.titulo.substring(0, 87) + "..." : producto.titulo} 
                                </h5>
                                <p class="card-text">
                                ${producto.descripcion.length > 60 ? producto.descripcion.substring(0, 57) + "..." : producto.descripcion} 
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

export const generarProductoSeleccionado = (producto) => {
    return `
                                   <img class="col-2 " src="${producto.imagen}" alt="${producto.titulo}">
                                    <!-- contenedor con titulo, descripcion, cantidad y borrar -->
                                    <div class="col-xxl-8 col-md-6 texto-botones">
                                        <h4>
                                        ${producto.titulo.length > 70 ? producto.titulo.substring(0, 67) + "..." : producto.titulo}
                                        </h4>
                                        <p>
                                        ${producto.descripcion.length > 60 ? producto.descripcion.substring(0, 57) + "..." : producto.descripcion}
                                        </p>
                                        <!-- Botones -->
                                        <div id="${producto.id}" class= "row-cols-4">
                                            <button type="button" class="btn btn-sm cuadro">-</button>
                                            <span id="cantidad" class="cuadro">${producto.cantidad}</span>
                                            <button type="button" class="btn btn-sm cuadro">+</button>
                                            <button id="bote-basura" type="button" class="bi bi-trash-fill btn btn-sm cuadro"> </button>
                                        </div>
                                    </div>
                                    <div class="col-2 container-fluid precio ">
                                        <h5 class="">Costo unitario</h5>
                                        <span class="">${producto.precio}</span>
                                    </div>
    `
}

/**
 * función que toma cada producto extraido de un Json y genera un contenedor para separar las tarjetas
 *  */

export const crearTarjeta = (producto, contenedor) => {

    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "card";
    nuevoProducto.style = "width: 18rem";
    nuevoProducto.innerHTML = generarCodigoHtml(producto);
    contenedor.appendChild(nuevoProducto);

    return nuevoProducto;

}

/* Despliega el producto seleccionado al añadir agregar producto */

export const crearProductoSeleccionado = (contenedor, indice) => {
    const producto = obtenerProductoDeLocalStorage(indice);
    contenedor.innerHTML = generarProductoSeleccionado(producto);
    contenedor.classList = "accordion-body  container-fluid row align-items-start producto-seleccionado";
    botonSumar(producto);
    botonRestar(producto);
    
}



/* función que elimina todos los elementos dentro de un contenedor padre */
const borrarElementos = (contenedor) => {
    borrarElementos(contenedor);
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

}

/**
 * Función que interactua con el boton de agregar al carrito, añadé el elemento seleccionado al local storage y luego elimina la lista de productos
 */

export const eventoClick = (contenedor, nuevoProducto, producto,) => {
    nuevoProducto.getElementsByClassName("btn")[0].addEventListener("click", () => {
        addElementToLocalStorage(producto)
        const indiceProducto = verificarLocalStorage(producto);
        crearProductoSeleccionado(contenedor, indiceProducto);
        sumarTotal();

    });
}


/* obtiene la referencia al contenedor de cantidad */
const contenedorCantidad = () => {
    const cantidad = document.getElementById("cantidad");
    return cantidad;

}
/**
 * función que le da funcionalidad al boton de restar
 * @param {} producto 
 */

export const botonRestar = (producto) => {
    const indice = verificarLocalStorage(producto);
    let pieza = obtenerProductoDeLocalStorage(indice);
    const boton = document.getElementById(producto.id);
    const cantidad = contenedorCantidad(boton);
    boton.getElementsByClassName("btn")[0].addEventListener("click", () => {
        if (pieza.cantidad > 1) {
            restElementToLocalStorage(producto);
            sumarTotal();
        }
        pieza = obtenerProductoDeLocalStorage(indice);
        console.log(pieza.cantidad);
        cantidad.innerText = pieza.cantidad;
    });
}

export const botonSumar = (producto) => {
    const indice = verificarLocalStorage(producto);
    let pieza = obtenerProductoDeLocalStorage(indice);
    const boton = document.getElementById(producto.id);
    const cantidad = contenedorCantidad(boton);
    boton.getElementsByClassName("btn")[1].addEventListener("click", () => {
        if (pieza.cantidad >= 1) {
            addElementToLocalStorage(producto);
            sumarTotal();
        }
        pieza = obtenerProductoDeLocalStorage(indice);
        console.log(pieza.cantidad);
        cantidad.innerText = pieza.cantidad;
    });
}





export const generarTarjetas = async (id, json) => {
    const contenedorDeTarjetas = document.getElementById(id);
    try {
        const response = await fetch(json);
        const productos = await response.json();
        productos.forEach(producto => {
            const nuevoProducto = crearTarjeta(producto, contenedorDeTarjetas);
            eventoClick(contenedorDeTarjetas, nuevoProducto, producto);


        });

    } catch (error) {
        console.error(error);
    }





}


