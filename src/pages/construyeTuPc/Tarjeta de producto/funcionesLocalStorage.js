/**
 * función que extrae los elementos almacenados en el local storage
 * @returns 
 */
export const memoriaLocalStorage = () => {
    const memoria = JSON.parse(localStorage.getItem("piezaDePC"));
    return memoria;
}

/**
 * Función que verifica el contenido de local Storage y lo compara con el producto extraido de un json, si lo encuentra, devuelve su indice 
 * @param {*} producto 
 * @returns 
 */

export const verificarLocalStorage = (producto) => {
    const memoria = memoriaLocalStorage();
    if (!memoria) {

    } else {
        const indiceProducto = memoria.findIndex(pieza => pieza.id === producto.id)

        return indiceProducto;
    }
}



/**
 * Retorna un producto obtenido del local storage a partir de un indice introducido
 * @param {*} indice 
 */
export const obtenerProductoDeLocalStorage = (indice) => {
    const productos = memoriaLocalStorage();
    const producto = productos[indice];
    return producto;
}






/**
 * Toma un elemento producto, le añadé el parametro cantidad con una unidad y lo retorna
 * @param {*} producto 
 * @returns 
 */
export const getProducto = (producto) => {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


/**
 * Función que toma un producto y lo añade al local storage
 * @param {*} producto 
 */

export function addElementToLocalStorage(producto) {
    const memoria = memoriaLocalStorage();

    if (!memoria) {
        const nuevoProducto = getProducto(producto);
        localStorage.setItem("piezaDePC", JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = verificarLocalStorage(producto);

        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {

            nuevaMemoria.push(getProducto(producto));

        } else {
            nuevaMemoria[indiceProducto].cantidad++;
        }

        localStorage.setItem("piezaDePC", JSON.stringify(nuevaMemoria));
    }

}

/**
 * Función que resta uno a la cantidad de un objeto en el local storage
 * @param {*} producto 
 */

export function restElementToLocalStorage(producto) {
    const memoria = memoriaLocalStorage();

    if (!memoria) {

    } else {
        const indiceProducto = verificarLocalStorage(producto);

        const nuevaMemoria = memoria;

        nuevaMemoria[indiceProducto].cantidad--;
        localStorage.setItem("piezaDePC", JSON.stringify(nuevaMemoria));
    }


}

/**
 * función que elimina un producto del local storage
 * @param {} producto 
 */
export function deleteElementToLocalStorage(producto) {
    const memoria = memoriaLocalStorage();

    if (!memoria) {

    } else {
        const indiceProducto = verificarLocalStorage(producto);
        const nuevaMemoria = memoria.splice(indiceProducto,1);
        localStorage.setItem("piezaDePC", JSON.stringify(memoria));
        
    }


}




/**
 * función que calcula el total de costo acumulado de los productos almacenados en el local Storage
 */

export const sumarTotal = () => {
    const productosEnCarrito = JSON.parse(localStorage.getItem("piezaDePC"));
    const referenciaTotal = document.getElementById("costo-total");
    let unidades = 0;
    let precio = 0;
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        productosEnCarrito.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
        referenciaTotal.innerText = "$ " + precio;
    } else {
        referenciaTotal.innerText = "$ " + 0
    }
}


//función que busca el indice de un producto en el local storage mediante su categoria

export const obtenerIndiceParaFiltro = (categoria) => {
    const memoria = memoriaLocalStorage();
    let indiceProducto;
    if (!memoria) {
        indiceProducto = -1;
    } else {
        indiceProducto = memoria.findIndex(pieza => pieza.categoria[0] == categoria);
    }
    return indiceProducto;
}


//función que recibe una categoria y busca en el local Storage si ese producto existe y retorna un booleano.

export const comprobarProductoSeleccionado = (categoria) => {
    const indice = obtenerIndiceParaFiltro(categoria);
    let respuesta;
    if  (indice != -1){
        respuesta = true;
    } else {
        respuesta = false;
    }
    return respuesta;
}

//función que verifica si el procesador seleccionado necesita ventilación y si no encuentra un disipador en el local storage devuelve un false
export const comprobarVentilaciónNecesaria = () =>{
    let respuesta = true;
    const indiceProcesador = obtenerIndiceParaFiltro("procesador");
    const procesador = obtenerProductoDeLocalStorage(indiceProcesador);
    const enfriamientoCheck = comprobarProductoSeleccionado("enfriamiento");
        const disipador = procesador.caracteristicas.disipador;
        if (disipador == "si"){
            respuesta = true;
        }else if(enfriamientoCheck){
            respuesta= true;
        }else {
            respuesta = false;
        }
    return respuesta;
}

//función que verifica si el procesador seleccionado necesita una tarjeta gráfica y si no encuentra una en el local storage devuelve un false
export const comprobarGraficaNecesaria = () =>{
    let respuesta = true;
    const indiceProcesador = obtenerIndiceParaFiltro("procesador");
    const procesador = obtenerProductoDeLocalStorage(indiceProcesador);
    const gpuCheck = comprobarProductoSeleccionado("tarjeta de video");
        const gpu = procesador.caracteristicas.graficos_integrados;
        if (gpu == "si"){
            respuesta = true;
        }else if(gpuCheck){
            respuesta= true;
        }else {
            respuesta = false;
        }
    return respuesta;
}