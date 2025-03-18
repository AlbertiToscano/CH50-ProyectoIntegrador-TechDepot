import"./footer-BO6_J53n.js";import{i as h}from"./productosObj-CGBnYCj_.js";let m=localStorage.getItem("titulo"),g=localStorage.getItem("precio"),u=localStorage.getItem("imagen"),p=localStorage.getItem("descripcion"),f=localStorage.getItem("categoria"),L=localStorage.getItem("caracteristicas"),n=localStorage.getItem("idProductoPaginaProductoTarjeta"),v=localStorage.getItem("Modelodetarjetagráfica"),k=localStorage.getItem("Recuentodenucleosdetarjetagráfica"),y=localStorage.getItem("Frecuenciadetarjetagráfica"),S=localStorage.getItem("USB");m&&g&&u&&p?document.getElementById("infoTarjetaCompleta").innerHTML=`
            
      <article class="row align-items-center">
            <!-- Imagen del producto -->


            <figure class="col-md-6 text-center">
                <img id="productImage" src="${u}" alt="${m}" class="img-fluid">
            </figure>

            <!-- Información del producto -->
            <section class="col-md-6">
                <h1 id="productName" class="product-title">${m}</h1>
                <p id="productPrice" class="price">$${g}</p>
                <hr>
                <p id="productDescription" class="description">${p}</p>
        
             

 <!-- Categoría y etiquetas -->
                <div class="category-container mt-3 text-start">
                    <p class="category"><strong>Categoría:</strong> <span id="productCategory">${f}</span></p>
                    
                </div>


                <hr>
   <!-- Botones de compra -->
                <div id="botoncillo" class="buttons mt-3 d-flex flex-column flex-md-row justify-content-md-start">
                   
                 <button id="addItemm" class="btn btn-primary me-md-2" data-producto="${n}" >Añadir al carrito</button> 
                    
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
                           
                            <li><strong>Categoría:</strong> ${f}</li>
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


                            <li><strong>Modelo de tarjeta gráfica:</strong> ${v}</li>
                            <li><strong>Recuento de núcleos de tarjeta gráfica:</strong> ${k}</li>
                            <li><strong>Frecuencia de tarjeta gráfica:</strong> ${y} MHz</li>
                            <li><strong>USB Type-C DisplayPort Alternate Mode:</strong> ${S}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse-features" aria-expanded="false" aria-controls="collapse-features">
                        Características 
                    </button>
                </h2>
                <div id="collapse-features" class="accordion-collapse collapse" data-bs-parent="#accordion-description">
                    <div class="accordion-body">
                        <p><strong>Tecnologías compatibles:</strong> ${L}</p>
                    </div>
                </div>
            </div>
        </section>
        `:console.log("No hay información en el localStorage");document.addEventListener("DOMContentLoaded",function(){document.getElementById("botoncillo").addEventListener("click",function(a){if(a.preventDefault(),a.target.id==="addItemm"){let r=a.target.dataset.producto;if(localStorage.getItem("productosComprados")){let o=localStorage.getItem("productosComprados")+","+r;console.log(o),localStorage.setItem("productosComprados",o);let i=window.confirm("Elemento agregado a su carrito. Usted tiene "+I()+" Items. ¿Desea ir al carrito de compras?");i&&h(),i&&(window.location.href="/src/pages/carrito/carrito.html")}else localStorage.setItem("productosComprados",r),window.confirm("Elemento agregado a su carrito. Usted tiene "+I()+" Items. ¿Desea ir al carrito de compras?")}})});function I(){let e=[],a;return localStorage.getItem("productosComprados")&&(e=localStorage.getItem("productosComprados").split(","),a=e.length),localStorage.setItem("conteo",a),a}const B=e=>` 
       <!-- aqui empiueza el bloque para mostrar la reseña del cliente -->
          <div class="recuadroAtras">
           <div class="reseña">
             <i class="icono bi bi-person-circle" >Usuario</i>
             <div class="estrellas">
               <i class="bi bi-star-fill text-warning "></i>
               <i class="bi bi-star-fill text-warning"></i>
               <i class="bi bi-star-fill text-warning"></i>
               <i class="bi bi-star-half text-warning"></i>
               <i class="bi bi-star text-warning"></i>
               <small class="textestrella">(3.5)</small>
               
                         </div><!-- ESTRELLAS -->
             
                    <p class="textReseña">${e}</p>
                  <div class="contenedorBoton" ><button id="idBotonVerMasComentario">Ver más</button></div>
 
           </div><!-- RESEÑA -->
          </div>`;document.getElementById("BotonEnviarComentario").addEventListener("click",()=>{let e=document.getElementById("textResenaUsuario").value;document.getElementById("colocarTarjetaResena").innerHTML+=B(e),document.getElementById("textResenaUsuario").value=""});document.addEventListener("DOMContentLoaded",function(){document.getElementById("estparacomentarios").innerHTML=` <i class="bi bi-star-fill starr ssttaarr"  id="estrella1${n}" onclick="funest1('${n}')" ></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella2${n}" onclick="funest2('${n}')"></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella3${n}" onclick="funest3('${n}')"></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella4${n}" onclick="funest4('${n}')"></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella5${n}" onclick="funest5('${n}')"></i>`});function E(e){let a=document.getElementById("estrella1"+e),r=document.getElementById("estrella2"+e),d=document.getElementById("estrella3"+e),o=document.getElementById("estrella4"+e),i=document.getElementById("estrella5"+e),t;if(a.classList.contains("checked"))a.classList.remove("checked"),r.classList.remove("checked"),d.classList.remove("checked"),o.classList.remove("checked"),i.classList.remove("checked");else{let s=!1,l=!1,c=!1;l=~s+l&&~c,c=s+c&&~l,s=l+s&&~c,s&&(a.classList.add("checked"),r.classList.remove("checked"),d.classList.remove("checked"),o.classList.remove("checked"),i.classList.remove("checked"),localStorage.getItem(e)?(t=localStorage.getItem(e),t+="1",localStorage.setItem(e,t)):(t="1",localStorage.setItem(e,t)))}}function C(e){let a=document.getElementById("estrella1"+e),r=document.getElementById("estrella2"+e),d=document.getElementById("estrella3"+e),o=document.getElementById("estrella4"+e),i=document.getElementById("estrella5"+e),t;if(r.classList.contains("checked"))r.classList.remove("checked"),d.classList.remove("checked"),o.classList.remove("checked"),i.classList.remove("checked");else{let s=!1,l=!1,c=!1;l=~s+l&&~c,c=s+c&&~l,s=l+s&&~c,s&&(a.classList.add("checked"),r.classList.add("checked"),d.classList.remove("checked"),o.classList.remove("checked"),i.classList.remove("checked"),localStorage.getItem(e)?(t=localStorage.getItem(e),t+="2",localStorage.setItem(e,t)):(t="2",localStorage.setItem(e,t)))}}function w(e){let a=document.getElementById("estrella1"+e),r=document.getElementById("estrella2"+e),d=document.getElementById("estrella3"+e),o=document.getElementById("estrella4"+e),i=document.getElementById("estrella5"+e),t;if(d.classList.contains("checked"))a.classList.add("checked"),r.classList.add("checked"),d.classList.remove("checked"),o.classList.remove("checked"),i.classList.remove("checked");else{let s=!1,l=!1,c=!1;l=~s+l&&~c,c=s+c&&~l,s=l+s&&~c,s&&(a.classList.add("checked"),r.classList.add("checked"),d.classList.add("checked"),o.classList.remove("checked"),i.classList.remove("checked"),localStorage.getItem(e)?(t=localStorage.getItem(e),t+="3",localStorage.setItem(e,t)):(t="3",localStorage.setItem(e,t)))}}function $(e){let a=document.getElementById("estrella1"+e),r=document.getElementById("estrella2"+e),d=document.getElementById("estrella3"+e),o=document.getElementById("estrella4"+e),i=document.getElementById("estrella5"+e),t;if(o.classList.contains("checked"))a.classList.add("checked"),r.classList.add("checked"),d.classList.add("checked"),o.classList.remove("checked"),i.classList.remove("checked");else{let s=!1,l=!1,c=!1;l=~s+l&&~c,c=s+c&&~l,s=l+s&&~c,s&&(a.classList.add("checked"),r.classList.add("checked"),d.classList.add("checked"),o.classList.add("checked"),i.classList.remove("checked"),localStorage.getItem(e)?(t=localStorage.getItem(e),t+="4",localStorage.setItem(e,t)):(t="4",localStorage.setItem(e,t)))}}function b(e){let a=document.getElementById("estrella1"+e),r=document.getElementById("estrella2"+e),d=document.getElementById("estrella3"+e),o=document.getElementById("estrella4"+e),i=document.getElementById("estrella5"+e),t;if(i.classList.contains("checked"))a.classList.add("checked"),r.classList.add("checked"),d.classList.add("checked"),o.classList.add("checked"),i.classList.remove("checked");else{let s=!1,l=!1,c=!1;l=~s+l&&~c,c=s+c&&~l,s=l+s&&~c,s&&(a.classList.add("checked"),r.classList.add("checked"),d.classList.add("checked"),o.classList.add("checked"),i.classList.add("checked"),localStorage.getItem(e)?(t=localStorage.getItem(e),t+="5",localStorage.setItem(e,t)):(t="5",localStorage.setItem(e,t)))}}window.funest1=E;window.funest2=C;window.funest3=w;window.funest4=$;window.funest5=b;window.botonAgregarCarritoT=botonAgregarCarritoT;
