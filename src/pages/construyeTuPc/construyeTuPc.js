import { getProducts } from "./Tarjeta de producto/TarjetasDeProducto";

document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
    star.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});


getProducts("procesadores", "/public/json/componentes/procesadores.json")
getProducts("motherboard", "/public/json/componentes/motherboard.json")
getProducts("ram", "/public/json/componentes/memoriaRAM.json")
getProducts("Almacenamiento", "/public/json/componentes/almacenamientoInterno.json")
getProducts("enfriamiento", "/public/json/componentes/enfriamiento.json")
getProducts("gpu", "/public/json/componentes/GPU.json")
getProducts("gabinete", "/public/json/componentes/gabinete.json")
getProducts("fuente", "/public/json/componentes/fuenteDeAlimentacion.json")