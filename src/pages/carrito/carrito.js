/* 
document.addEventListener('DOMContentLoaded', function() {
    // Rutas al archivo JSON con productos
    Promise.all([
      fetch("/public/json/componentes/almacenamientoInterno.json"),
      fetch("/public/json/componentes/discoDuroExterno.json"),
      fetch("/public/json/componentes/fuenteDeAlimentacion.json"),
      fetch("/public/json/componentes/gabinete.json"),
      fetch("/public/json/componentes/GPU.json"),
      fetch("/public/json/componentes/memoriaRAM.json"),
      fetch("/public/json/componentes/motherboard.json"),
      fetch("/public/json/componentes/procesadores.json"),
      fetch("/public/json/oficina/impresoras.json"),
      fetch("/public/json/oficina/laptops.json"),
      fetch("/public/json/oficina/tintas.json"),
      fetch("/public/json/perifericos/bocinas.json"),
      fetch("/public/json/perifericos/monitores.json"),
      fetch("/public/json/perifericos/mouse.json"),
      fetch("/public/json/perifericos/teclados.json"),
      fetch("/public/json/perifericos/usb.json"),
      fetch("/public/json/perifericos/webcams.json")
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => cargarProductos(data.flat()));  // .flat() para aplanar el array de respuestas de múltiples JSONs
  
    function cargarProductos(productos) {
      const tablaCarrito = document.getElementById('productosCarrito');
      let totalCompra = 0;
  
      productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><img src="${producto.imagen}" alt="${producto.titulo}" class="img-fluid imgProducto"></td>
          <td>${producto.titulo.length > 40 ? producto.titulo.substring(0, 37) + "..." : producto.titulo}</td>
          <td class="precio">$${producto.precio.toFixed(2)}</td>
          <td>
            <div class="input-group">
              <button class="btn btn-outline-secondary" type="button" onclick="decrementarCantidad(this)">-</button>
              <input type="number" class="form-control cantidad" value="1" min="1">
              <button class="btn btn-outline-secondary" type="button" onclick="incrementarCantidad(this)">+</button>
            </div>
          </td>
          <td class="total">$${producto.precio.toFixed(2)}</td>
          <td><button class="btn btn-link" onclick="eliminarProducto(event)">
            <img src="/public/icons/icono-basura.png" alt="Eliminar" style="width: 20px; height: 20px;">
          </button></td>
        `;
        console.log(tr);
        tablaCarrito.appendChild(tr);
        totalCompra += producto.precio;
      });
  
      document.getElementById('totalCompra').textContent = `$${totalCompra.toFixed(2)}`;
    }
  
    window.decrementarCantidad = function(button) {
      const inputCantidad = button.closest('tr').querySelector('.cantidad');
      if (inputCantidad.value > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
        actualizarTotal();
      }
    };
  
    window.incrementarCantidad = function(button) {
      const inputCantidad = button.closest('tr').querySelector('.cantidad');
      inputCantidad.value = parseInt(inputCantidad.value) + 1;
      actualizarTotal();
    };
  
    window.eliminarProducto = function(event) {
      const row = event.target.closest('tr');
      row.remove();
      actualizarTotal();
    };
  
    function actualizarTotal() {
      let total = 0;
      document.querySelectorAll('.total').forEach(totalElemento => {
        total += parseFloat(totalElemento.textContent.replace('$', ''));
      });
      document.getElementById('totalCompra').textContent = `$${total.toFixed(2)}`;
    }
  });
   */

  document.addEventListener('DOMContentLoaded', function() {
    const idCarrito = this.getElementById("productosCarrito")
    

    cargarProductos("piezaDePC");

    function cargarProductos(key) {
      productos = generarMemoria(key);
      const tablaCarrito = document.getElementById('productosCarrito');
      let totalCompra = 0;
      productos.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><img src="${producto.imagen}" alt="${producto.titulo}" class="img-fluid imgProducto"></td>
          <td>${producto.titulo.length > 40 ? producto.titulo.substring(0, 37) + "..." : producto.titulo}</td>
          <td class="precio">$${producto.precio.toFixed(2)}</td>
          <td>
            <div id="${producto.id}" class="input-group">
              <button class="btn btn-outline-secondary" type="button" onclick="decrementarCantidad(this)">-</button>
              <input type="number" class="form-control cantidad" value="${producto.cantidad}" min="1">
              <button class="btn btn-outline-secondary" type="button" onclick="incrementarCantidad(this)">+</button>
            </div>
          </td>
          <td class="total${producto.id}">$${(producto.precio*producto.cantidad).toFixed(2)}</td>
          <td><button class="btn btn-link" onclick="eliminarProducto(event)">
            <img src="/public/icons/icono-basura.png" alt="Eliminar" style="width: 20px; height: 20px;">
          </button></td>
        `;
        tablaCarrito.appendChild(tr);
        totalCompra += producto.precio;
        botonSumar(producto,key);
      });
  
      document.getElementById('totalCompra').textContent = `$${totalCompra.toFixed(2)}`;
    }
  
    window.decrementarCantidad = function(button) {
      const inputCantidad = button.closest('tr').querySelector('.cantidad');
      if (inputCantidad.value > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
        actualizarTotal();
      }
    };
  
    window.incrementarCantidad = function(button) {
      const inputCantidad = button.closest('tr').querySelector('.cantidad');
      inputCantidad.value = parseInt(inputCantidad.value) + 1;
      actualizarTotal();
    };
  
    window.eliminarProducto = function(event) {
      const row = event.target.closest('tr');
      row.remove();
      actualizarTotal();
    };
  
    function actualizarTotal() {
      let total = sumarTotalCarrito();
      document.querySelectorAll('.total').forEach(totalElemento => {
        total += parseFloat(totalElemento.textContent.replace('$', ''));
      });
      document.getElementById('totalCompra').textContent = `$${total.toFixed(2)}`;
    }
  });
  


  /**
 * función que extrae los elementos almacenados en el local storage a partir de una key
 * @returns 
 */
  const generarMemoria = (key) => {
    const memoria = JSON.parse(localStorage.getItem(key));
    return memoria;
  }



/*  const generarListaCarrito = (key, idTabla) => {
    const tablaCarrito = idTabla;
    let totalCompra = 0;
    const productosEnCarrito = generarMemoria(key);

    if (productosEnCarrito && productosEnCarrito.length > 0) {
      productosEnCarrito.forEach(producto => {
        const etiqueta = document.createElement('tr');
        etiqueta.innerHTML = `
          <td><img src="${producto.imagen}" alt="${producto.titulo}" class="img-fluid imgProducto"></td>
          <td>${producto.titulo.length > 40 ? producto.titulo.substring(0, 37) + "..." : producto.titulo}</td>
          <td class="precio">$${producto.precio.toFixed(2)}</td>
          <td>
            <div class="input-group">
              <button class="btn btn-outline-secondary" type="button" onclick="decrementarCantidad(this)">-</button>
              <input type="number" class="form-control cantidad" value="1" min="1">
              <button class="btn btn-outline-secondary" type="button" onclick="incrementarCantidad(this)">+</button>
            </div>
          </td>
          <td class="total">$${producto.precio.toFixed(2)}</td>
          <td><button class="btn btn-link" onclick="eliminarProducto(event)">
            <img src="/public/icons/icono-basura.png" alt="Eliminar" style="width: 20px; height: 20px;">
          </button></td>
        `;

        tablaCarrito.appendChild(etiqueta);
        totalCompra += producto.precio;
      });
      document.getElementById('totalCompra').textContent = `$${totalCompra.toFixed(2)}`;
  }
} */

  /* generarListaCarrito("piezaDePC"); */


  /**
 * función que calcula el total de costo acumulado de los productos almacenados en el local Storage
 */

const sumarTotalCarrito = (key) => {
    const productosEnCarrito = JSON.parse(localStorage.getItem(key));
    let unidades = 0;
    let precio = 0;
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        productosEnCarrito.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
        return precio;
    } else {
        return precio;
    }
}

/**
 * función que elimina un producto del local storage
 * @param {} producto 
 */
 function deleteElementToLocalStorage(producto) {
    const memoria = memoriaLocalStorage();

    if (!memoria) {
    } else {
        const indiceProducto = verificarLocalStorage(producto);
        const nuevaMemoria = memoria.splice(indiceProducto,1);
        localStorage.setItem("piezaDePC", JSON.stringify(memoria));
        
    }


}



/**
 * Función que toma un producto y lo añade al local storage
 * @param {*} producto 
 */

function sumarCarrito(producto, key) {
    const memoria = generarMemoria(key);
    if (!memoria) {
    } else {
        const indiceProducto = memoria.findIndex(pieza => pieza.id === producto.id)

        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {

            nuevaMemoria.push(getProducto(producto));

        } else {
            nuevaMemoria[indiceProducto].cantidad++;
        }

        localStorage.setItem(key, JSON.stringify(nuevaMemoria));
        return nuevaMemoria[indiceProducto].cantidad;
    }

}

/** función que permite alterar el objeto especifico en el local storage al presionar el boton */
const botonSumar = (producto, key) => {
    const contenedorBoton = document.getElementById(producto.id);
    const contenedorTotal = document.querySelector(`.total${producto.id}`);
    contenedorBoton.getElementsByClassName("btn")[1].addEventListener("click", () => {
        if (producto.cantidad >= 1) {
            let cantidad = sumarCarrito(producto, key);
            let total = producto.precio*cantidad;
            contenedorTotal.textContent = "$"+total.toFixed(2);
        }
    });
}