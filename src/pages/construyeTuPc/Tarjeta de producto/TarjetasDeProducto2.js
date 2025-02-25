/*
función para dibujar las estrellas
**/

import { addElementToLocalStorage } from "./funcionesLocalStorage";

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
                                        <div row-cols-4>
                                            <button type="button" class="btn btn-sm cuadro">-</button>
                                            <button type="button" class="btn btn-sm cuadro">1</button>
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

export const crearProductoSeleccionado = (contenedor, producto) => {

    
    contenedor.innerHTML = generarProductoSeleccionado(producto);
    contenedor.classList = "accordion-body  container-fluid row align-items-start producto-seleccionado";
    

    

}

/* función que elimina todos los elementos dentro de un contenedor padre */
const borrarElementos = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

}

/**
 * Función que interactua con el boton de agregar al carrito, añadé el elemento seleccionado al local storage y luego elimina la lista de productos
 */

export const eventoClick = (contenedor, nuevoProducto, producto) => {
    nuevoProducto.getElementsByClassName("btn")[0].addEventListener("click", () => {
        addElementToLocalStorage(producto)
        borrarElementos(contenedor);
        crearProductoSeleccionado(contenedor, producto)
        


    });
}



const botonDeFiltro = document.querySelector("button");

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








/* producto.getElementById(id).getElementsByTagName("button")[0].addEventListener("click",()=> addElementToLocalStorage(producto)); */