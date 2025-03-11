import { comprobarGraficaNecesaria, comprobarProductoSeleccionado, comprobarVentilaciónNecesaria, obtenerIndiceParaFiltro, obtenerProductoDeLocalStorage } from "./funcionesLocalStorage"


//función que filtra un array de productos segun el procesador seleccionado
export const filtroProcesador = (productos, categoria) => {


    if (categoria === "procesador") {

    } else if (comprobarProductoSeleccionado("procesador")) {

        const indice = obtenerIndiceParaFiltro("procesador");
        const producto = obtenerProductoDeLocalStorage(indice);
        const socket = producto.caracteristicas.socket;
        let ram;
        if (socket == "AM5" || socket == "LGA 1700") {
            ram = "DDR5";
        } else {
            ram = "DDR4";
        }

        if (productos[0].categoria[0] === "tarjeta madre") {
            productos = productos.filter(motherboard => motherboard.caracteristicas.socket == socket);
        }
        if (productos[0].categoria[0] === "memoria RAM") {
            productos = productos.filter(memoriaRam => memoriaRam.caracteristicas.DDR == ram);

        }
    }

    return productos;
}

//función que filtra un array de productos de segun la tarjeta madre seleccionada
export const filtromotherboard = (productos, categoria) => {


    if (categoria === "tarjeta madre") {

    } else if (comprobarProductoSeleccionado("tarjeta madre")) {

        const indice = obtenerIndiceParaFiltro("tarjeta madre");
        const producto = obtenerProductoDeLocalStorage(indice);
        const socket = producto.caracteristicas.socket;
        const tamaño = producto.caracteristicas.tamaño; //ejemplo, atx, etx, etc.
        let ram;
        if (socket == "AM5" || socket == "LGA 1700") {
            ram = "DDR5";
        } else {
            ram = "DDR4";
        }

        if (productos[0].categoria[0] === "procesador") {
            productos = productos.filter(procesador => procesador.caracteristicas.socket == socket);
        }
        if (productos[0].categoria[0] === "memoria RAM") {
            productos = productos.filter(memoriaRam => memoriaRam.caracteristicas.DDR == ram);
        }
        if (productos[0].categoria[0] === "gabinete") {
            productos = productos.filter(gabinete => {
                const gabineteTamaño = gabinete.caracteristicas.tamaño;
                if (tamaño == "ATX") {
                    return gabineteTamaño == "ATX" || gabineteTamaño == "E-ATX";
                } else if (tamaño == "Micro-ATX") {
                    return gabineteTamaño == "ATX" || gabineteTamaño == "E-ATX" || gabineteTamaño == "Micro-ATX";
                } else if (tamaño == "Mini-ITX") {
                    return gabineteTamaño == "ATX" || gabineteTamaño == "E-ATX" || gabineteTamaño == "Micro-ATX" || gabineteTamaño == "Mini-ITX";
                }
            });
        }
        if (productos[0].categoria[0] === "Fuente de alimentacion") {
            productos = productos.filter(fuente => {
                const fuenteTamaño = fuente.caracteristicas.tamaño;
                if (tamaño == "ATX") {
                    return fuenteTamaño == "ATX";
                } else if (tamaño == "Micro-ATX") {
                    return fuenteTamaño == "ATX" || fuenteTamaño == "Micro-ATX";
                } else if (tamaño == "Mini-ITX") {
                    return fuenteTamaño == "ATX" || fuenteTamaño == "Micro-ATX" || fuenteTamaño == "Mini-ITX";
                }
            });

        }
    }
    return productos;
}

//función que filtra un array de productos segun la memoria ram seleccionada
export const filtroRam = (productos, categoria) => {


    if (categoria === "memoria RAM") {

    } else if (comprobarProductoSeleccionado("memoria RAM")) {

        const indice = obtenerIndiceParaFiltro("memoria RAM");
        const producto = obtenerProductoDeLocalStorage(indice);

        if (productos[0].categoria[0] === "procesador") {
            productos = productos.filter(procesador => {
                const socket = procesador.caracteristicas.socket;
                let ram;
                if (socket == "AM5" || socket == "LGA 1700") {
                    ram = "DDR5";
                } else {
                    ram = "DDR4";
                }
                return ram == producto.caracteristicas.DDR;
            });
        }

        if (productos[0].categoria[0] === "tarjeta madre") {
            productos = productos.filter(motherboard => {
                const socket = motherboard.caracteristicas.socket;
                let ram;
                if (socket == "AM5" || socket == "LGA 1700") {
                    ram = "DDR5";
                } else {
                    ram = "DDR4";
                }
                return ram == producto.caracteristicas.DDR;
            });
        }
    }
    return productos;
}

//función que filtra un array de productos segun la fuente de alimentación seleccionada
export const filtroFuente = (productos, categoria) => {


    if (categoria === "Fuente de alimentacion") {

    } else if (comprobarProductoSeleccionado("Fuente de alimentacion")) {

        const indice = obtenerIndiceParaFiltro("Fuente de alimentacion");
        const producto = obtenerProductoDeLocalStorage(indice);
        const tamaño = producto.caracteristicas.tamaño; //ejemplo, atx, etx, etc.

        if (productos[0].categoria[0] === "procesador") {
            productos = productos.filter(procesador => procesador.caracteristicas.TDP <= producto.caracteristicas.capacidad);
        }
        if (productos[0].categoria[0] === "tarjeta de video") {
            productos = productos.filter(gpu => gpu.caracteristicas.TDP <= producto.caracteristicas.capacidad);
        }
        if (productos[0].categoria[0] === "gabinete") {
            productos = productos.filter(gabinete => {
                const gabineteTamaño = gabinete.caracteristicas.tamaño;
                if (tamaño == "ATX") {
                    return gabineteTamaño == "ATX" || gabineteTamaño == "E-ATX";
                } else if (tamaño == "Micro-ATX") {
                    return gabineteTamaño == "ATX" || gabineteTamaño == "E-ATX" || gabineteTamaño == "Micro-ATX";
                } else if (tamaño == "Mini-ITX") {
                    return gabineteTamaño == "ATX" || gabineteTamaño == "E-ATX" || gabineteTamaño == "Micro-ATX" || gabineteTamaño == "Mini-ITX";
                }
            });
        }
        if (productos[0].categoria[0] === "tarjeta madre") {
            productos = productos.filter(motherboard => {
                const motherboardTamaño = motherboard.caracteristicas.tamaño;
                if (tamaño == "ATX") {
                    return motherboardTamaño == "ATX";
                } else if (tamaño == "Micro-ATX") {
                    return motherboardTamaño == "ATX" || motherboardTamaño == "Micro-ATX";
                } else if (tamaño == "Mini-ITX") {
                    return motherboardTamaño == "ATX" || motherboardTamaño == "Micro-ATX" || motherboardTamaño == "Mini-ITX";
                }
            });
        }
    }
    return productos;
}


//función que filtra un array de productos segun el gabinete seleccionado
export const filtroGabinete = (productos, categoria) => {


    if (categoria === "gabinete") {

    } else if (comprobarProductoSeleccionado("gabinete")) {

        const indice = obtenerIndiceParaFiltro("gabinete");
        const producto = obtenerProductoDeLocalStorage(indice);
        const tamaño = producto.caracteristicas.tamaño; //ejemplo, atx, etx, etc.

        if (productos[0].categoria[0] === "Fuente de alimentacion") {
            productos = productos.filter(fuente => {
                const fuenteTamaño = fuente.caracteristicas.tamaño;
                if (tamaño == "ATX") {
                    return fuenteTamaño == "ATX";
                } else if (tamaño == "Micro-ATX") {
                    return fuenteTamaño == "ATX" || fuenteTamaño == "Micro-ATX";
                } else if (tamaño == "Mini-ITX") {
                    return fuenteTamaño == "ATX" || fuenteTamaño == "Micro-ATX" || fuenteTamaño == "Mini-ITX";
                }
            });
        }
        if (productos[0].categoria[0] === "tarjeta madre") {
            productos = productos.filter(motherboard => {
                const motherboardTamaño = motherboard.caracteristicas.tamaño;
                if (tamaño == "ATX" || tamaño == "E-ATX") {
                    return true;
                } else if (tamaño == "Micro-ATX") {
                    return motherboardTamaño == "Micro-ATX";
                } else if (tamaño == "Mini-ITX") {
                    return motherboardTamaño == "Mini-ITX";
                }
            });
        }
    }
    return productos;
}

//función que filtra la lista de fuente de alimentación segun el tdp de los productos seleccionados
export const filtroTDP = (productos, categoria) => {
    const productosEnCarrito = JSON.parse(localStorage.getItem("piezaDePC"));
    let tdp = 0;
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        productosEnCarrito.forEach(producto => {
            let categoriaDeProducto = producto.categoria[0];
            if (categoriaDeProducto == "procesador" || categoriaDeProducto == "tarjeta de video") {
                tdp += producto.caracteristicas.TDP;
            }
        });
        tdp = tdp + 50;
        if (categoria == "Fuente de alimentacion") {
            productos = productos.filter(fuente => {
                let capacidad = fuente.caracteristicas.capacidad;
                return capacidad >= tdp;
            });
        }

    } else { }
    return productos;
}



//función que ejecuta los filtros de producto
export const aplicarFiltros = (productos, categoria) => {
    productos = filtroProcesador(productos, categoria);
    productos = filtromotherboard(productos, categoria);
    productos = filtroRam(productos, categoria);
    productos = filtroFuente(productos, categoria);
    productos = filtroGabinete(productos, categoria);
    productos = filtroTDP(productos, categoria);
    return productos;
}

//**Función que verifica que se hayan seleccionado los productos necesarios al presionar pagar */

export const pagarCheck = () => {
    const botonPagar = document.getElementById("botonPagar");
    const tarjetaTotal = document.getElementById("tarjetaTotal");
    botonPagar.addEventListener("click", () => {
        const procesador = comprobarProductoSeleccionado("procesador");
        const mother = comprobarProductoSeleccionado("tarjeta madre");
        const ram = comprobarProductoSeleccionado("memoria RAM");
        const almacenamiento = comprobarProductoSeleccionado("almacenamiento");
        const gabinete = comprobarProductoSeleccionado("gabinete");
        const fuente = comprobarProductoSeleccionado("Fuente de alimentacion");

        if (!procesador) {

            tarjetaTotal.innerHTML =
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado un <strong>procesador</strong>, por favor selecciona uno para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        } else if (!mother) {
            tarjetaTotal.innerHTML =
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>tarjeta madre</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;

        } else if (!ram) {
            tarjetaTotal.innerHTML =
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>memoria RAM</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;

        } else if (!almacenamiento) {
            tarjetaTotal.innerHTML =
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>unidad de almacenamiento</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        } else if (!gabinete) {
            tarjetaTotal.innerHTML =
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado un <strong>gabinete</strong>, por favor selecciona uno para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        } else if (!fuente) {
            tarjetaTotal.innerHTML =
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>fuente de alimentación</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        } else if (!comprobarVentilaciónNecesaria()){
            tarjetaTotal.innerHTML =
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                 <strong>Cuidado!</strong> No has seleccionado un <strong>Sistema de ventilación</strong> y el procesador seleccionado necesita uno, por favor selecciona una para continuar.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else if(!comprobarGraficaNecesaria()){
            tarjetaTotal.innerHTML =
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                 <strong>Cuidado!</strong> No has seleccionado una <strong>tarjeta de video</strong> y el procesador seleccionado necesita una, por favor selecciona una para continuar.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
        } else {
         tarjetaTotal.removeChild(tarjetaTotal.firstChild);
         window.location.href = "/src/pages/carrito/carrito.html"
        }
    })
}