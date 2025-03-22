/* // Función para disminuir la cantidad
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
 */


//la siguiente funcion obtiene los valores del local storage
/* window.onload = function() { */
    // Recuperar los datos del localStorage
/*     let tit = localStorage.getItem("titulo");
    let precio = localStorage.getItem("precio");
    let imagen = localStorage.getItem("imagen");
    let descripcion = localStorage.getItem("descripcion");
    console.log("funciona");
 */
    // Asegúrate de que los datos no sean null antes de mostrarlos
    /* if (tit && precio && imagen && descripcion) { */
        // Mostrar los datos en la página
     /*    document.getElementById('infoTarjetaCompleta').innerHTML = `
            
        <article class="row align-items-center">
            <!-- Imagen del producto -->
           

            <figure class="col-md-6 text-center">
                <img id="productImage" src="${imagen}" alt="Producto" class="img-fluid">
            </figure>

            <!-- Información del producto -->

        
            <section class="col-md-6">
                <h1 id="productName" class="product-title">"${tit}"</h1>
                <p id="productPrice" class="price">$${precio}</p>
                <hr>
                <p id="productDescription" class="description">${descripcion}</p>

                <!-- Selección de cantidad -->
                <div class="quantity-container">
                    <label for="productQuantity" class="form-label">Cantidad:</label>
                    <div class="quantity-selector d-flex align-items-center">
                        <button class="btn btn-outline-secondary" onclick="decreaseQuantity()">-</button>
                        <input type="number" id="productQuantity" value="1" class="form-control text-center mx-2"
                            style="width: 60px;">
                        <button class="btn btn-outline-secondary" onclick="increaseQuantity()">+</button>
                    </div>
                </div>

                <!-- Botones de compra -->
                <div class="buttons mt-3 d-flex flex-column flex-md-row justify-content-md-start">
                    <button class="btn btn-primary me-md-2">Añadir al carrito</button>
                    <button class="btn btn-success">Comprar ahora</button>
                </div>

                <hr>

                <!-- Categoría y etiquetas -->
                <div class="category-container mt-3 text-start">
                    <p class="category"><strong>Categoría:</strong> <span id="productCategory">Procesadores</span></p>
                    <p class="tag"><strong>Etiqueta:</strong> <span id="productTag">Computadoras portátiles y de
                            escritorio</span></p>
                </div>
            </section>
        </article>

        <!-- Acordeón con detalles adicionales -->
        <section class="accordion" id="accordion-description">
            <!-- Variantes del producto -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-varieties" aria-expanded="false" aria-controls="collapse-varieties">
                        Variantes de productos
                    </button>
                </h2>
                <div id="collapse-varieties" class="accordion-collapse collapse"
                    data-bs-parent="#accordion-description">
                    <div class="accordion-body">
                        <ul>
                            <li><strong>Nombre:</strong> AMD Ryzen 5 7600X</li>
                            <li><strong>Familia:</strong> Ryzen</li>
                            <li><strong>Serie:</strong> Ryzen 7000 Series</li>
                            <li><strong>Categoría:</strong> Computadoras de escritorio, Procesador en caja</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-compatibility" aria-expanded="false"
                        aria-controls="collapse-compatibility">
                        Compatibilidad de la tarjeta gráfica
                    </button>
                </h2>
                <div id="collapse-compatibility" class="accordion-collapse collapse"
                    data-bs-parent="#accordion-description">
                    <div class="accordion-body">
                        <ul>
                            <li><strong>Modelo de tarjeta gráfica:</strong> AMD Radeon Graphics</li>
                            <li><strong>Recuento de núcleos de tarjeta gráfica:</strong> 2</li>
                            <li><strong>Frecuencia de tarjeta gráfica:</strong> 2200 MHz</li>
                            <li><strong>USB Type-C DisplayPort Alternate Mode:</strong> Sí</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-features" aria-expanded="false" aria-controls="collapse-features">
                        Características principales
                    </button>
                </h2>
                <div id="collapse-features" class="accordion-collapse collapse" data-bs-parent="#accordion-description">
                    <div class="accordion-body">
                        <p><strong>Tecnologías compatibles:</strong> AMD EXPO Technology, AMD Ryzen Technologies</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="product-reviews container mt-5">
            <h2 class="section-title">Opiniones del Producto</h2>
            <hr>

            <div class="reviews-summary row">
                <!-- Calificación general -->
                <div class="rating-overview">
                    <h3 class="overall-rating">4.7 <span class="stars">★★★★★</span></h3>
                    <p class="rating-count">28 calificaciones</p>

                    <div class="rating-bars">
                        <div class="rating-bar">
                            <span>5 ★</span>
                            <div class="bar-container">
                                <div class="bar" style="width: 80%;"></div>
                            </div>
                            <span class="stars-text">★</span>
                        </div>
                        <div class="rating-bar">
                            <span>4 ★</span>
                            <div class="bar-container">
                                <div class="bar" style="width: 15%;"></div>
                            </div>
                            <span class="stars-text">★</span>
                        </div>
                        <div class="rating-bar">
                            <span>3 ★</span>
                            <div class="bar-container">
                                <div class="bar" style="width: 3%;"></div>
                            </div>
                            <span class="stars-text">★</span>
                        </div>
                        <div class="rating-bar">
                            <span>2 ★</span>
                            <div class="bar-container">
                                <div class="bar" style="width: 1%;"></div>
                            </div>
                            <span class="stars-text">★</span>
                        </div>
                        <div class="rating-bar">
                            <span>1 ★</span>
                            <div class="bar-container">
                                <div class="bar" style="width: 1%;"></div>
                            </div>
                            <span class="stars-text">★</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    } else {
        console.log("No hay información en el localStorage");
    }
};


 */












window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    if (searchTerm) {
        // Obtener los productos encontrados desde localStorage
        const productosEncontrados = JSON.parse(localStorage.getItem("productosEncontrados"));

        if (productosEncontrados && productosEncontrados.length > 0) {
            const container = document.getElementById('infoTarjetaCompleta');
            container.innerHTML = ''; // Limpiar el contenedor

            productosEncontrados.forEach((producto, index) => {
                const productCard = `
                        <article class="row align-items-center mb-5">
                            <!-- Imagen del producto -->
                            <figure class="col-md-6 text-center">
                                <img src="${producto.imagen}" alt="${producto.titulo}" class="img-fluid">
                            </figure>
    
                            <!-- Información del producto -->
                            <section class="col-md-6">
                                <h1 class="product-title">${producto.titulo}</h1>
                                <p class="price">$${producto.precio}</p>
                                <hr>
                                <p class="description">${producto.descripcion}</p>
    
                                <!-- Selección de cantidad -->
                                <div class="quantity-container">
                                    <label for="productQuantity-${index}" class="form-label">Cantidad:</label>
                                    <div class="quantity-selector d-flex align-items-center">
                                        <button class="btn btn-outline-secondary" onclick="decreaseQuantity(${index})">-</button>
                                        <input type="number" id="productQuantity-${index}" value="1" class="form-control text-center mx-2" style="width: 60px;">
                                        <button class="btn btn-outline-secondary" onclick="increaseQuantity(${index})">+</button>
                                    </div>
                                </div>
    
                                <!-- Botones de compra -->
                                <div class="buttons mt-3 d-flex flex-column flex-md-row justify-content-md-start">
                                    <button class="btn btn-primary me-md-2">Añadir al carrito</button>
                                    <button class="btn btn-success">Comprar ahora</button>
                                </div>
    
                                <hr>
    
                                <!-- Categoría y etiquetas -->
                                <div class="category-container mt-3 text-start">
                                    <p class="category"><strong>Categoría:</strong> <span>${producto.categoria || "No especificado"}</span></p>
                                    <p class="tag"><strong>Etiqueta:</strong> <span>${producto.etiqueta || "No especificado"}</span></p>
                                </div>
                            </section>
                        </article>
    
                        <!-- Acordeón con detalles adicionales -->
                        <section class="accordion mb-5" id="accordion-${index}">
                            <!-- Variantes del producto -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-varieties-${index}" aria-expanded="false" aria-controls="collapse-varieties-${index}">
                                        Variantes de productos
                                    </button>
                                </h2>
                                <div id="collapse-varieties-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Nombre:</strong> ${producto.variantes?.nombre || "No especificado"}</li>
                                            <li><strong>Familia:</strong> ${producto.variantes?.familia || "No especificado"}</li>
                                            <li><strong>Serie:</strong> ${producto.variantes?.serie || "No especificado"}</li>
                                            <li><strong>Categoría:</strong> ${producto.variantes?.categoria || "No especificado"}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Compatibilidad de la tarjeta gráfica -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-compatibility-${index}" aria-expanded="false" aria-controls="collapse-compatibility-${index}">
                                        Compatibilidad de la tarjeta gráfica
                                    </button>
                                </h2>
                                <div id="collapse-compatibility-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Modelo de tarjeta gráfica:</strong> ${producto.compatibilidad?.modelo || "No especificado"}</li>
                                            <li><strong>Recuento de núcleos de tarjeta gráfica:</strong> ${producto.compatibilidad?.nucleos || "No especificado"}</li>
                                            <li><strong>Frecuencia de tarjeta gráfica:</strong> ${producto.compatibilidad?.frecuencia || "No especificado"}</li>
                                            <li><strong>USB Type-C DisplayPort Alternate Mode:</strong> ${producto.compatibilidad?.usbTypeC || "No especificado"}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Características principales -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-features-${index}" aria-expanded="false" aria-controls="collapse-features-${index}">
                                        Características principales
                                    </button>
                                </h2>
                                <div id="collapse-features-${index}" class="accordion-collapse collapse" data-bs-parent="#accordion-${index}">
                                    <div class="accordion-body">
                                        <p><strong>Tecnologías compatibles:</strong> ${producto.caracteristicas?.tecnologias || "No especificado"}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
    
                        <!-- Opiniones del producto -->
                        <section class="product-reviews container mt-5">
                            <h2 class="section-title">Opiniones del Producto</h2>
                            <hr>
    
                            <div class="reviews-summary row">
                                <!-- Calificación general -->
                                <div class="rating-overview">
                                    <h3 class="overall-rating">${producto.opiniones?.calificacion || "4.7"} <span class="stars">★★★★★</span></h3>
                                    <p class="rating-count">${producto.opiniones?.calificaciones || "28"} calificaciones</p>
    
                                    <div class="rating-bars">
                                        <div class="rating-bar">
                                            <span>5 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${producto.opiniones?.barra5 || "80%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>4 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${producto.opiniones?.barra4 || "15%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>3 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${producto.opiniones?.barra3 || "3%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>2 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${producto.opiniones?.barra2 || "1%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>1 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${producto.opiniones?.barra1 || "1%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `;
                container.innerHTML += productCard;
            });
        } else {
            console.log("No se encontraron productos");
        }
    } else {
        // Mantener la funcionalidad original para cuando se accede directamente a un producto
        let tit = localStorage.getItem("titulo");
        let precio = localStorage.getItem("precio");
        let imagen = localStorage.getItem("imagen");
        let descripcion = localStorage.getItem("descripcion");

        if (tit && precio && imagen && descripcion) {
            document.getElementById('infoTarjetaCompleta').innerHTML = `
                    <article class="row align-items-center">
                        <!-- Imagen del producto -->
                        <figure class="col-md-6 text-center">
                            <img id="productImage" src="${imagen}" alt="Producto" class="img-fluid">
                        </figure>
    
                        <!-- Información del producto -->
                        <section class="col-md-6">
                            <h1 id="productName" class="product-title">"${tit}"</h1>
                            <p id="productPrice" class="price">$${precio}</p>
                            <hr>
                            <p id="productDescription" class="description">${descripcion}</p>
    
                            <!-- Selección de cantidad -->
                            <div class="quantity-container">
                                <label for="productQuantity" class="form-label">Cantidad:</label>
                                <div class="quantity-selector d-flex align-items-center">
                                    <button class="btn btn-outline-secondary" onclick="decreaseQuantity()">-</button>
                                    <input type="number" id="productQuantity" value="1" class="form-control text-center mx-2" style="width: 60px;">
                                    <button class="btn btn-outline-secondary" onclick="increaseQuantity()">+</button>
                                </div>
                            </div>
    
                            <!-- Botones de compra -->
                            <div class="buttons mt-3 d-flex flex-column flex-md-row justify-content-md-start">
                                <button class="btn btn-primary me-md-2">Añadir al carrito</button>
                                <button class="btn btn-success">Comprar ahora</button>
                            </div>
    
                            <hr>
    
                            <!-- Categoría y etiquetas -->
                            <div class="category-container mt-3 text-start">
                                <p class="category"><strong>Categoría:</strong> <span id="productCategory">Procesadores</span></p>
                                <p class="tag"><strong>Etiqueta:</strong> <span id="productTag">Computadoras portátiles y de escritorio</span></p>
                            </div>
                        </section>
                    </article>
    
                    <!-- Acordeón con detalles adicionales -->
                    <section class="accordion" id="accordion-description">
                        <!-- Variantes del producto -->
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-varieties" aria-expanded="false" aria-controls="collapse-varieties">
                                    Variantes de productos
                                </button>
                            </h2>
                            <div id="collapse-varieties" class="accordion-collapse collapse" data-bs-parent="#accordion-description">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>Nombre:</strong> AMD Ryzen 5 7600X</li>
                                        <li><strong>Familia:</strong> Ryzen</li>
                                        <li><strong>Serie:</strong> Ryzen 7000 Series</li>
                                        <li><strong>Categoría:</strong> Computadoras de escritorio, Procesador en caja</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-compatibility" aria-expanded="false" aria-controls="collapse-compatibility">
                                    Compatibilidad de la tarjeta gráfica
                                </button>
                            </h2>
                            <div id="collapse-compatibility" class="accordion-collapse collapse" data-bs-parent="#accordion-description">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>Modelo de tarjeta gráfica:</strong> AMD Radeon Graphics</li>
                                        <li><strong>Recuento de núcleos de tarjeta gráfica:</strong> 2</li>
                                        <li><strong>Frecuencia de tarjeta gráfica:</strong> 2200 MHz</li>
                                        <li><strong>USB Type-C DisplayPort Alternate Mode:</strong> Sí</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-features" aria-expanded="false" aria-controls="collapse-features">
                                    Características principales
                                </button>
                            </h2>
                            <div id="collapse-features" class="accordion-collapse collapse" data-bs-parent="#accordion-description">
                                <div class="accordion-body">
                                    <p><strong>Tecnologías compatibles:</strong> AMD EXPO Technology, AMD Ryzen Technologies</p>
                                </div>
                            </div>
                        </div>
                    </section>
    
                    <section class="product-reviews container mt-5">
                        <h2 class="section-title">Opiniones del Producto</h2>
                        <hr>
    
                        <div class="reviews-summary row">
                            <!-- Calificación general -->
                            <div class="rating-overview">
                                <h3 class="overall-rating">4.7 <span class="stars">★★★★★</span></h3>
                                <p class="rating-count">28 calificaciones</p>
    
                                <div class="rating-bars">
                                    <div class="rating-bar">
                                        <span>5 ★</span>
                                        <div class="bar-container">
                                            <div class="bar" style="width: 80%;"></div>
                                        </div>
                                        <span class="stars-text">★</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>4 ★</span>
                                        <div class="bar-container">
                                            <div class="bar" style="width: 15%;"></div>
                                        </div>
                                        <span class="stars-text">★</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>3 ★</span>
                                        <div class="bar-container">
                                            <div class="bar" style="width: 3%;"></div>
                                        </div>
                                        <span class="stars-text">★</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>2 ★</span>
                                        <div class="bar-container">
                                            <div class="bar" style="width: 1%;"></div>
                                        </div>
                                        <span class="stars-text">★</span>
                                    </div>
                                    <div class="rating-bar">
                                        <span>1 ★</span>
                                        <div class="bar-container">
                                            <div class="bar" style="width: 1%;"></div>
                                        </div>
                                        <span class="stars-text">★</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
        } else {
            console.log("No hay información en el localStorage");
        }
    }
};

// Funciones para manejar la cantidad
function decreaseQuantity(index) {
    const input = document.getElementById(`productQuantity-${index}`);
    if (input.value > 1) input.value--;
}

function increaseQuantity(index) {
    const input = document.getElementById(`productQuantity-${index}`);
    input.value++;
}