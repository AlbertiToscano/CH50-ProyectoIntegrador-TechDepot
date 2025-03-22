import"./footer-DaZsVk3c.js";window.onload=function(){if(new URLSearchParams(window.location.search).get("search")){const t=JSON.parse(localStorage.getItem("productosEncontrados"));if(t&&t.length>0){const i=document.getElementById("infoTarjetaCompleta");i.innerHTML="",t.forEach((a,s)=>{var e,c,o,n,l,r,d,p,b,g,v,u,m,y,f,h;const $=`
                        <article class="row align-items-center mb-5">
                            <!-- Imagen del producto -->
                            <figure class="col-md-6 text-center">
                                <img src="${a.imagen}" alt="${a.titulo}" class="img-fluid">
                            </figure>
    
                            <!-- Información del producto -->
                            <section class="col-md-6">
                                <h1 class="product-title">${a.titulo}</h1>
                                <p class="price">$${a.precio}</p>
                                <hr>
                                <p class="description">${a.descripcion}</p>
    
                                <!-- Selección de cantidad -->
                                <div class="quantity-container">
                                    <label for="productQuantity-${s}" class="form-label">Cantidad:</label>
                                    <div class="quantity-selector d-flex align-items-center">
                                        <button class="btn btn-outline-secondary" onclick="decreaseQuantity(${s})">-</button>
                                        <input type="number" id="productQuantity-${s}" value="1" class="form-control text-center mx-2" style="width: 60px;">
                                        <button class="btn btn-outline-secondary" onclick="increaseQuantity(${s})">+</button>
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
                                    <p class="category"><strong>Categoría:</strong> <span>${a.categoria||"No especificado"}</span></p>
                                    <p class="tag"><strong>Etiqueta:</strong> <span>${a.etiqueta||"No especificado"}</span></p>
                                </div>
                            </section>
                        </article>
    
                        <!-- Acordeón con detalles adicionales -->
                        <section class="accordion mb-5" id="accordion-${s}">
                            <!-- Variantes del producto -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-varieties-${s}" aria-expanded="false" aria-controls="collapse-varieties-${s}">
                                        Variantes de productos
                                    </button>
                                </h2>
                                <div id="collapse-varieties-${s}" class="accordion-collapse collapse" data-bs-parent="#accordion-${s}">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Nombre:</strong> ${((e=a.variantes)==null?void 0:e.nombre)||"No especificado"}</li>
                                            <li><strong>Familia:</strong> ${((c=a.variantes)==null?void 0:c.familia)||"No especificado"}</li>
                                            <li><strong>Serie:</strong> ${((o=a.variantes)==null?void 0:o.serie)||"No especificado"}</li>
                                            <li><strong>Categoría:</strong> ${((n=a.variantes)==null?void 0:n.categoria)||"No especificado"}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Compatibilidad de la tarjeta gráfica -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-compatibility-${s}" aria-expanded="false" aria-controls="collapse-compatibility-${s}">
                                        Compatibilidad de la tarjeta gráfica
                                    </button>
                                </h2>
                                <div id="collapse-compatibility-${s}" class="accordion-collapse collapse" data-bs-parent="#accordion-${s}">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><strong>Modelo de tarjeta gráfica:</strong> ${((l=a.compatibilidad)==null?void 0:l.modelo)||"No especificado"}</li>
                                            <li><strong>Recuento de núcleos de tarjeta gráfica:</strong> ${((r=a.compatibilidad)==null?void 0:r.nucleos)||"No especificado"}</li>
                                            <li><strong>Frecuencia de tarjeta gráfica:</strong> ${((d=a.compatibilidad)==null?void 0:d.frecuencia)||"No especificado"}</li>
                                            <li><strong>USB Type-C DisplayPort Alternate Mode:</strong> ${((p=a.compatibilidad)==null?void 0:p.usbTypeC)||"No especificado"}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Características principales -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-features-${s}" aria-expanded="false" aria-controls="collapse-features-${s}">
                                        Características principales
                                    </button>
                                </h2>
                                <div id="collapse-features-${s}" class="accordion-collapse collapse" data-bs-parent="#accordion-${s}">
                                    <div class="accordion-body">
                                        <p><strong>Tecnologías compatibles:</strong> ${((b=a.caracteristicas)==null?void 0:b.tecnologias)||"No especificado"}</p>
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
                                    <h3 class="overall-rating">${((g=a.opiniones)==null?void 0:g.calificacion)||"4.7"} <span class="stars">★★★★★</span></h3>
                                    <p class="rating-count">${((v=a.opiniones)==null?void 0:v.calificaciones)||"28"} calificaciones</p>
    
                                    <div class="rating-bars">
                                        <div class="rating-bar">
                                            <span>5 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${((u=a.opiniones)==null?void 0:u.barra5)||"80%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>4 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${((m=a.opiniones)==null?void 0:m.barra4)||"15%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>3 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${((y=a.opiniones)==null?void 0:y.barra3)||"3%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>2 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${((f=a.opiniones)==null?void 0:f.barra2)||"1%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                        <div class="rating-bar">
                                            <span>1 ★</span>
                                            <div class="bar-container">
                                                <div class="bar" style="width: ${((h=a.opiniones)==null?void 0:h.barra1)||"1%"}"></div>
                                            </div>
                                            <span class="stars-text">★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `;i.innerHTML+=$})}else console.log("No se encontraron productos")}else{let t=localStorage.getItem("titulo"),i=localStorage.getItem("precio"),a=localStorage.getItem("imagen"),s=localStorage.getItem("descripcion");t&&i&&a&&s?document.getElementById("infoTarjetaCompleta").innerHTML=`
                    <article class="row align-items-center">
                        <!-- Imagen del producto -->
                        <figure class="col-md-6 text-center">
                            <img id="productImage" src="${a}" alt="Producto" class="img-fluid">
                        </figure>
    
                        <!-- Información del producto -->
                        <section class="col-md-6">
                            <h1 id="productName" class="product-title">"${t}"</h1>
                            <p id="productPrice" class="price">$${i}</p>
                            <hr>
                            <p id="productDescription" class="description">${s}</p>
    
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
                `:console.log("No hay información en el localStorage")}};
