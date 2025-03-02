// Función para actualizar el precio total
function actualizarTotal() {
    let total = 0;

    // Obtenemos todos los productos en el carrito
    const filas = document.querySelectorAll("tbody tr");

    filas.forEach(fila => {
        // Obtenemos el precio y la cantidad de cada producto
        const precio = parseFloat(fila.querySelector(".precio").textContent.replace('$', ''));
        const cantidad = parseInt(fila.querySelector(".cantidad").value);

        // Calculamos el total del producto y lo sumamos al total general
        const subtotal = precio * cantidad;
        fila.querySelector(".total").textContent = '$' + subtotal.toFixed(2);

        total += subtotal;
    });

    // Actualizamos el total en la parte inferior
    document.querySelector("#totalCompra").textContent = '$' + total.toFixed(2);
}

// Función para eliminar un producto
function eliminarProducto(event) {
    // Obtenemos la fila del producto que se va a eliminar
    const fila = event.target.closest('tr');
    fila.remove();

    // Actualizamos el precio total después de eliminar un producto
    actualizarTotal();
}

// Escuchar cambios en las cantidades de los productos
document.addEventListener('input', function (event) {
    if (event.target.classList.contains('cantidad')) {
        actualizarTotal();
    }
});

// Al cargar la página, actualizamos el total
window.onload = actualizarTotal;