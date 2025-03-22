
  document.addEventListener('DOMContentLoaded', function() {
    const idCarrito = this.getElementById("productosCarrito")
    

    cargarProductos("producto");
    cargarProductos("piezaDePC");
    

    function cargarProductos(key) {
      if(generarMemoria(key) != null){
        const productos = generarMemoria(key);
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
              <span id="cantidad${producto.id}"  class="cantidad">${producto.cantidad}</span>
              <button class="btn btn-outline-secondary" type="button" onclick="incrementarCantidad(this)">+</button>
            </div>
          </td>
          <td class="total${producto.id}">$${(producto.precio*producto.cantidad).toFixed(2)}</td>
          <td><button id="borrar${producto.id}" class="btn btn-link" onclick="eliminarProducto(event)">
            <img src="/icons/icono-basura.png" alt="Eliminar" style="width: 20px; height: 20px;">
          </button></td>
        `;
        tablaCarrito.appendChild(tr);
        totalCompra += producto.precio;
        botonSumar(producto,key);
        botonRestar(producto,key);
        botonBorrar(producto,key);
        
        
      });
  
      document.getElementById('totalCompra').textContent = `$${totalCompra.toFixed(2)}`;
    }
  

      }
      
    window.decrementarCantidad = function(button) {
      const inputCantidad = button.closest('tr').querySelector('.cantidad');
      if (inputCantidad.value > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
      }
    };
  
    window.incrementarCantidad = function(button) {
      const inputCantidad = button.closest('tr').querySelector('.cantidad');
      inputCantidad.value = parseInt(inputCantidad.value) + 1;
    };
  
    window.eliminarProducto = function(event) {
      const row = event.target.closest('tr');
      row.remove();
    };

    const boton = document.getElementById("botonPagar");
    boton.addEventListener("click", () => {
    window.location.href = "/src/pages/pagar/pagar.html"; //redirige al carrito 
      });
    
      actualizarTotal();
  });
  


  /**
 * función que extrae los elementos almacenados en el local storage a partir de una key
 * @returns 
 */
  const generarMemoria = (key) => {
    const memoria = JSON.parse(localStorage.getItem(key));
    return memoria;
  }

/**
 * Función que retorna la cantidad de unidades de un producto en el local storage
 * @param {*} producto 
 * @param {*} key 
 * @returns 
 */
function obtenerCantidad(producto, key) {
  const memoria = generarMemoria(key);
  if (!memoria) {
  } else {
      const indiceProducto = memoria.findIndex(pieza => pieza.id === producto.id)
      const nuevaMemoria = memoria;
      const cantidad = nuevaMemoria[indiceProducto].cantidad;
      return cantidad;
  }
}

/**
 * actualiza la cantidad de cada producto en el carrito al presionar un boton
 * @param {*} producto 
 * @param {*} key 
 */
function actualizarCantidad(producto, key){
  const contenedor = document.getElementById(`cantidad${producto.id}`)
  const cantidad = obtenerCantidad(producto, key);
  contenedor.textContent = cantidad;
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


/**
 * Función que resta uno a la cantidad de un objeto en el local storage
 * @param {*} producto 
 */

 function restarCarrito(producto, key) {
    const memoria = generarMemoria(key);
    if (!memoria) {
    } else {
        const indiceProducto = memoria.findIndex(pieza => pieza.id === producto.id)
        const nuevaMemoria = memoria;
        nuevaMemoria[indiceProducto].cantidad--;
        localStorage.setItem(key, JSON.stringify(nuevaMemoria));
        return nuevaMemoria[indiceProducto].cantidad;
    }


}

function actualizarTotal() {
  const memoriaConstruyeTuPc = generarMemoria("piezaDePC");
  const memoriaProductos = generarMemoria("producto");
  const memoria1 = memoriaConstruyeTuPc;
  const memoria2 = memoriaProductos;
  let total = 0;

  if(memoria1 != null){
    memoria1.forEach(producto =>{
      total += producto.cantidad*producto.precio;
    })
  }
    if(memoria2 != null){
      memoria2.forEach(producto =>{
        total += producto.cantidad*producto.precio;
      })
    }
   
   document.getElementById('totalCompra').textContent = `$${total.toFixed(2)}`;
 }





/////////////////// Funciones para los botones del carrito ////////////////////////////

/** función que permite alterar el objeto especifico en el local storage al presionar el boton sumar*/
const botonSumar = (producto, key) => {
    const contenedorBoton = document.getElementById(producto.id);
    const contenedorTotal = document.querySelector(`.total${producto.id}`);
    contenedorBoton.getElementsByClassName("btn")[1].addEventListener("click", () => {
         
            let cantidad = sumarCarrito(producto, key);
            let total = producto.precio*cantidad;
            contenedorTotal.textContent = "$"+total.toFixed(2);
            actualizarTotal();
            actualizarCantidad(producto,key);
        
    });
}

/** función que permite alterar el objeto especifico en el local storage al presionar el boton restar */
const botonRestar = (producto, key) => {
  const contenedorBoton = document.getElementById(producto.id);
  const contenedorTotal = document.querySelector(`.total${producto.id}`);
  contenedorBoton.getElementsByClassName("btn")[0].addEventListener("click", () => {
    let numero = obtenerCantidad(producto,key);
      if (numero > 1) {
          const cantidad = restarCarrito(producto, key);
          let total = producto.precio*cantidad;
          contenedorTotal.textContent = "$"+total.toFixed(2);
          actualizarTotal();
          actualizarCantidad(producto,key);
      }
  });
}

/**
 * función que elimina un producto del local storage
 * @param {} producto 
 */
function botonBorrar(producto, key) {
  const contenedorBoton = document.getElementById(`borrar${producto.id}`);
  let memoria = generarMemoria(key);
  if (!memoria) {
  } else {
    contenedorBoton.addEventListener("click", () => {
        memoria = generarMemoria(key);
        const indiceProducto = memoria.findIndex(pieza => pieza.id === producto.id)
        const nuevaMemoria = memoria.splice(indiceProducto,1);
        localStorage.setItem(key, JSON.stringify(memoria));
        borrarKeysProductoUnitario(producto);
        actualizarTotal();
  });  
  }
}


/**
 * función que elimina los elementos provenientes de la pagina de producto al presionar el bote de basura
 * @param {} producto 
 */
const borrarKeysProductoUnitario= (producto) =>{
    let productosComprados = localStorage.getItem("productosComprados");
    let unitario = localStorage.getItem ("unitario");
    productosComprados = productosComprados.split(",");
    unitario = unitario.split(",");
    console.log(productosComprados);
   /*  let arregloDeObjetosComprados=[];  */
   const newProductosComprados = productosComprados.length;

    if(productosComprados){
      
      for(let i = 0; i<=newProductosComprados; i++) {
        console.log(i);
      //////////////////////////////////////////////////////
        let indice = productosComprados.findIndex(elemento => elemento === producto.id)
        if (indice != -1){
          productosComprados.splice(indice,1);
        }
      /////////////////////////////////////////////////////
      }
      localStorage.setItem("productosComprados",(productosComprados));
    }

    if(unitario){
      let indice = unitario.findIndex(elemento => elemento === producto.id)
      unitario.splice(indice,1);
    }
    localStorage.setItem("unitario",(unitario));
}

