window.onload = function() {
    // Recuperar los datos del localStorage
    let tit = localStorage.getItem("titulo");
    let precio = localStorage.getItem("precio");
    let imagen = localStorage.getItem("imagen");
    let descripcion = localStorage.getItem("descripcion");

    // Asegúrate de que los datos no sean null antes de mostrarlos
    if (tit && precio && imagen && descripcion) {
        // Mostrar los datos en la página
        document.getElementById('infoTarjetaCompleta').innerHTML = `
            <h2>${tit}</h2>
            <img src="${imagen}" alt="Imagen del producto">
            <p>Precio: ${precio}</p>
            <p>Descripción: ${descripcion}</p>
        `;
    } else {
        console.log("No hay información en el localStorage");
    }
};