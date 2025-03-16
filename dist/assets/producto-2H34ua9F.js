import"./footer-BO6_J53n.js";window.onload=function(){let a=localStorage.getItem("titulo"),t=localStorage.getItem("precio"),s=localStorage.getItem("imagen"),i=localStorage.getItem("descripcion");console.log("funciona"),a&&t&&s&&i?document.getElementById("infoTarjetaCompleta").innerHTML=`
            
        <article class="row align-items-center">
            <!-- Imagen del producto -->
           

            <figure class="col-md-6 text-center">
                <img id="productImage" src="${s}" alt="Producto" class="img-fluid">
            </figure>

            <!-- Información del producto -->

        
            <section class="col-md-6">
                <h1 id="productName" class="product-title">"${a}"</h1>
                <p id="productPrice" class="price">$${t}</p>
                <hr>
                <p id="productDescription" class="description">${i}</p>

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
        `:console.log("No hay información en el localStorage")};
