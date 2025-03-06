// Función para disminuir la cantidad
function decreaseQuantity() {
    let quantityInput = document.getElementById("productQuantity");
    let currentValue = parseInt(quantityInput.value);

    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// Función para aumentar la cantidad
function increaseQuantity() {
    let quantityInput = document.getElementById("productQuantity");
    let currentValue = parseInt(quantityInput.value);

    quantityInput.value = currentValue + 1;
}

// Asegurar que el usuario no pueda ingresar valores negativos o vacíos en la cantidad
document.getElementById("productQuantity").addEventListener("input", function (event) {
    let value = event.target.value;
    if (value === "" || value <= 0) {
        event.target.value = 1;
    }
});

// Función para añadir al carrito (simulación)
document.querySelector(".btn-primary").addEventListener("click", function () {
    let productName = document.getElementById("productName").textContent;
    let productQuantity = document.getElementById("productQuantity").value;
    alert(`Has añadido ${productQuantity} unidad(es) de ${productName} al carrito.`);
});

// Función para comprar ahora (simulación)
document.querySelector(".btn-success").addEventListener("click", function () {
    let productName = document.getElementById("productName").textContent;
    alert(`Estás comprando ${productName}.`);
});
