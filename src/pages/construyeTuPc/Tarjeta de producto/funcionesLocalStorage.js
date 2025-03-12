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




    }
}









//función para añadir un numero al carrito

/* 
const contenedorNumeroCarrito = document.getElementById(" ");
export const numeroDeCarrito = () =>{
    const memoria = JSON.parse(localStorage.getItem("piezaDePC"));
    const cuenta = memoria.reduce((acumulado,prodActual) => acumulado+prodActual.cantidad,0);
    contenedorNumeroCarrito.innerText = cuenta;
}


// se ejecuta la función para que permanezca cargado en la pagina
numeroDeCarrito();
 */