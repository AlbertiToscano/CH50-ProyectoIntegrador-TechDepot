
import { sumarTotal } from "./Tarjeta de producto/funcionesLocalStorage.js";
import { generarTarjetas, } from "./Tarjeta de producto/TarjetasDeProducto2.js";


document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
    star.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});


generarTarjetas("procesadores", "/json/componentes/procesadores.json");
generarTarjetas("motherboard", "/json/componentes/motherboard.json");
generarTarjetas("ram", "/json/componentes/memoriaRAM.json");
generarTarjetas("Almacenamiento", "/json/componentes/almacenamientoInterno.json");
generarTarjetas("enfriamiento", "/json/componentes/enfriamiento.json");
generarTarjetas("gpu", "/json/componentes/GPU.json");
generarTarjetas("gabinete", "/json/componentes/gabinete.json");
generarTarjetas("fuente", "/json/componentes/fuenteDeAlimentacion.json");
sumarTotal();

