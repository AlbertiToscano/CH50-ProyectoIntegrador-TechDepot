
import { pagarCheck } from "./Tarjeta de producto/filtrosParaConstruyeTuPc.js";
import { comprobarVentilaciónNecesaria, obtenerIndiceParaFiltro, sumarTotal } from "./Tarjeta de producto/funcionesLocalStorage.js";
import {crearProductosConstruyeTuPC, crearTienda, } from "./Tarjeta de producto/TarjetasDeProducto2.js";


/* document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
    star.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});
 */


crearTienda();
sumarTotal();
pagarCheck();

