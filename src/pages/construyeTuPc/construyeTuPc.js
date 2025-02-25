
import { generarTarjetas, } from "./Tarjeta de producto/TarjetasDeProducto2";

document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
    star.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});


generarTarjetas("procesadores", "/public/json/componentes/procesadores.json");
generarTarjetas("motherboard", "/public/json/componentes/motherboard.json");
generarTarjetas("ram", "/public/json/componentes/memoriaRAM.json");
generarTarjetas("Almacenamiento", "/public/json/componentes/almacenamientoInterno.json");
generarTarjetas("enfriamiento", "/public/json/componentes/enfriamiento.json");
generarTarjetas("gpu", "/public/json/componentes/GPU.json");
generarTarjetas("gabinete", "/public/json/componentes/gabinete.json");
generarTarjetas("fuente", "/public/json/componentes/fuenteDeAlimentacion.json");


