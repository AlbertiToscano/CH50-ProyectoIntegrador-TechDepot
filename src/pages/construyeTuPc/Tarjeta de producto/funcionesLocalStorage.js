
export function addElementToLocalStorage(producto) {
    const categoria  = producto.categoria[0];
    const memoriaCategoria = localStorage.getItem(categoria);
    if (!memoriaCategoria){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem(categoria,JSON.stringify([nuevoProducto]))
        
    }
}