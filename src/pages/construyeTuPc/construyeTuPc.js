
import { sumarTotal } from "./Tarjeta de producto/funcionesLocalStorage.js";
import {crearProductosConstruyeTuPC, } from "./Tarjeta de producto/TarjetasDeProducto2.js";


document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
    star.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});


crearProductosConstruyeTuPC("procesadores", "/json/componentes/procesadores.json");
crearProductosConstruyeTuPC("motherboard", "/json/componentes/motherboard.json");
crearProductosConstruyeTuPC("ram", "/json/componentes/memoriaRAM.json");
crearProductosConstruyeTuPC("Almacenamiento", "/json/componentes/almacenamientoInterno.json");
crearProductosConstruyeTuPC("enfriamiento", "/json/componentes/enfriamiento.json");
crearProductosConstruyeTuPC("gpu", "/json/componentes/GPU.json");
crearProductosConstruyeTuPC("gabinete", "/json/componentes/gabinete.json");
crearProductosConstruyeTuPC("fuente", "/json/componentes/fuenteDeAlimentacion.json");
sumarTotal();

