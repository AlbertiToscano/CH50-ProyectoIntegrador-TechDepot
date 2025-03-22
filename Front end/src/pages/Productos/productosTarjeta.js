/*  import { funest1,funest2,funest1,funest3,funest4,funest5} from "./productos.js"; */

import { iraACompras } from "./productosObj.js";
//window.onload = function() {
    // Recuperar los datos del localStorage
    let tit = localStorage.getItem("titulo");
    let precio = localStorage.getItem("precio");
    let imagen = localStorage.getItem("imagen");
    let descripcion = localStorage.getItem("descripcion");
    let categoria = localStorage.getItem("categoria");
    let caracteristicas = localStorage.getItem("caracteristicas");
    let idProductoPaginaProductoTarjeta= localStorage.getItem("idProductoPaginaProductoTarjeta");

    let Modelodetarjetagráfica = localStorage.getItem("Modelodetarjetagráfica");
    let Recuentodenucleosdetarjetagráfica = localStorage.getItem("Recuentodenucleosdetarjetagráfica");
    let Frecuenciadetarjetagráfica = localStorage.getItem("Frecuenciadetarjetagráfica");
    let USB = localStorage.getItem("USB");



    // Asegúrate de que los datos no sean null antes de mostrarlos
    if (tit && precio && imagen && descripcion) {
        // Mostrar los datos en la página
        document.getElementById('infoTarjetaCompleta').innerHTML = `
            
      <article class="row align-items-center">
            <!-- Imagen del producto -->


            <figure class="col-md-6 text-center">
                <img id="productImage" src="${imagen}" alt="${tit}" class="img-fluid">
            </figure>

            <!-- Información del producto -->
            <section class="col-md-6">
                <h1 id="productName" class="product-title">${tit}</h1>
                <p id="productPrice" class="price">$${precio}</p>
                <hr>
                <p id="productDescription" class="description">${descripcion}</p>
        
             

 <!-- Categoría y etiquetas -->
                <div class="category-container mt-3 text-start">
                    <p class="category"><strong>Categoría:</strong> <span id="productCategory">${categoria}</span></p>
                    
                </div>


                <hr>
   <!-- Botones de compra -->
                <div id="botoncillo" class="buttons mt-3 d-flex flex-column flex-md-row justify-content-md-end">
                   
                 <button id="addItemm" class="btn btn-primary me-md-2" data-producto="${idProductoPaginaProductoTarjeta}" >Añadir al carrito</button> 
                    
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
                           
                            <li><strong>Categoría:</strong> ${categoria}</li>
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


                            <li><strong>Modelo de tarjeta gráfica:</strong> ${Modelodetarjetagráfica}</li>
                            <li><strong>Recuento de núcleos de tarjeta gráfica:</strong> ${Recuentodenucleosdetarjetagráfica}</li>
                            <li><strong>Frecuencia de tarjeta gráfica:</strong> ${Frecuenciadetarjetagráfica} MHz</li>
                            <li><strong>USB Type-C DisplayPort Alternate Mode:</strong> ${USB}</li>
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
                        <p><strong>Tecnologías compatibles:</strong> ${caracteristicas}</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    } else {
        console.log("No hay información en el localStorage");
    }
//};

/* ****** */


document.addEventListener('DOMContentLoaded', function() {

//function botonAgregarCarritoT(categoria){
        /* conteo de elementos en carrito  */
        
        /* Boton agregar a carrito  */
      let espaciodetarjetas = document.getElementById("botoncillo");
      espaciodetarjetas.addEventListener("click",function(evento){
          evento.preventDefault();
               
           if(evento.target.id==="addItemm"){
            //console.log(evento.target.dataset.producto);
            let productoCompra=evento.target.dataset.producto;
  
            if(localStorage.getItem("productosComprados")){
              let productosmemoria =localStorage.getItem("productosComprados");
           
              let  productosComprados =productosmemoria+","+productoCompra;
               console.log( productosComprados);
                localStorage.setItem("productosComprados",productosComprados);
              // console.log( productosComprados);
             let confirmacion = window.confirm('Elemento agregado a su carrito. Usted tiene ' + sumaCarritoT() + ' Items. ¿Desea ir al carrito de compras?');
             if(confirmacion){
                iraACompras();
             }
            if(confirmacion){
               window.location.href="/src/pages/carrito/carrito.html";
             }
             
             //document.getElementById("flycar").innerText=sumaCarrito();
            }else{
              localStorage.setItem("productosComprados",productoCompra);
              let confirmacion = window.confirm('Elemento agregado a su carrito. Usted tiene ' + sumaCarritoT() + ' Items. ¿Desea ir al carrito de compras?');
            }
          }     
      });
      
    //}

});



  function sumaCarritoT(){
        let arrproductos=[];
        let conteo;
            if(localStorage.getItem("productosComprados")){
                let productosmemorias =localStorage.getItem("productosComprados");
                arrproductos= productosmemorias.split(",");
                 conteo=arrproductos.length;
                localStorage.setItem("conteo",conteo);
                
            }else{
                 
                localStorage.setItem("conteo",conteo);
            }
       return conteo;
       }




/* codigo para las estrellas  */



/* Colocar la Tarjeta de reseña del usuario*/

const resenaCard=(texto)=>{
    const card=` 
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
             
                    <p class="textReseña">${texto}</p>
                  <div class="contenedorBoton" ><button id="idBotonVerMasComentario">Ver más</button></div>
 
           </div><!-- RESEÑA -->
          </div>`
 
 return card;
 };
 
 /* Capturar la reseña del usuario */
 document.getElementById("BotonEnviarComentario").addEventListener("click",  () => {
    // let colocarReseña = document.getElementById("colocarTarjetaReseña");
   let texto=document.getElementById("textResenaUsuario").value;
     document.getElementById("colocarTarjetaResena").innerHTML+=resenaCard(texto);
     document.getElementById("textResenaUsuario").value = "";
     
     });


     document.addEventListener('DOMContentLoaded', function() {


             document.getElementById("estparacomentarios").innerHTML=` <i class="bi bi-star-fill starr ssttaarr"  id="estrella1${idProductoPaginaProductoTarjeta}" onclick="funest1('${idProductoPaginaProductoTarjeta}')" ></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella2${idProductoPaginaProductoTarjeta}" onclick="funest2('${idProductoPaginaProductoTarjeta}')"></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella3${idProductoPaginaProductoTarjeta}" onclick="funest3('${idProductoPaginaProductoTarjeta}')"></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella4${idProductoPaginaProductoTarjeta}" onclick="funest4('${idProductoPaginaProductoTarjeta}')"></i>
                            <i class="bi bi-star-fill starr ssttaarr"  id="estrella5${idProductoPaginaProductoTarjeta}" onclick="funest5('${idProductoPaginaProductoTarjeta}')"></i>`


                        });



                        function funest1(cadaobjetoid){
                            let start1=document.getElementById("estrella1"+cadaobjetoid);
                            let start2=document.getElementById("estrella2"+cadaobjetoid);
                            let start3=document.getElementById("estrella3"+cadaobjetoid);
                            let start4=document.getElementById("estrella4"+cadaobjetoid);
                            let start5=document.getElementById("estrella5"+cadaobjetoid);
                            let score;
                            
                            
                            if(start1.classList.contains("checked")){
                                start1.classList.remove("checked"); 
                                start2.classList.remove("checked"); 
                                start3.classList.remove("checked"); 
                                start4.classList.remove("checked"); 
                                start5.classList.remove("checked"); 
                             } else{
                                let A=false;
                                let B=false;
                                let C=false;
                                
                                B=(~A+B) && ~C;
                                C=(A+C) && ~B;
                                A=(B+A) && ~C;
                                
                                if(A){
                                    start1.classList.add("checked");  
                                    start2.classList.remove("checked");  
                                    start3.classList.remove("checked");  
                                    start4.classList.remove("checked");  
                                    start5.classList.remove("checked"); 
                            
                                    if(localStorage.getItem(cadaobjetoid)){
                                        score= localStorage.getItem(cadaobjetoid);
                                        score +="1";
                                        localStorage.setItem(cadaobjetoid,score);
                            
                                       // calculoModa(cadaobjetoid,score);
                                    }else{
                                        score ="1";
                                        localStorage.setItem(cadaobjetoid,score);
                                    }
                                    
                                }}
                             
                            }
                        
                          function funest2(cadaobjetoid){
                            let start1=document.getElementById("estrella1"+cadaobjetoid);
                            let start2=document.getElementById("estrella2"+cadaobjetoid);
                            let start3=document.getElementById("estrella3"+cadaobjetoid);
                            let start4=document.getElementById("estrella4"+cadaobjetoid);
                            let start5=document.getElementById("estrella5"+cadaobjetoid);
                        
                            let score;
                            
                            if(start2.classList.contains("checked")){
                                start2.classList.remove("checked"); 
                                start3.classList.remove("checked"); 
                                start4.classList.remove("checked"); 
                                start5.classList.remove("checked"); 
                             } else{
                                let A=false;
                                let B=false;
                                let C=false;
                                
                                B=(~A+B) && ~C;
                                C=(A+C) && ~B;
                                A=(B+A) && ~C;
                                
                                if(A){
                                    start1.classList.add("checked");  
                                    start2.classList.add("checked");  
                                    start3.classList.remove("checked");  
                                    start4.classList.remove("checked");  
                                    start5.classList.remove("checked");  
                        
                                    if(localStorage.getItem(cadaobjetoid)){
                                        score= localStorage.getItem(cadaobjetoid);
                                        score +="2";
                                        localStorage.setItem(cadaobjetoid,score);
                                       // calculoModa(cadaobjetoid,score);
                                    }else{
                                        score ="2";
                                        localStorage.setItem(cadaobjetoid,score);
                                    }
                                }}
                              
                        }
                             
                        
                         function funest3(cadaobjetoid){
                         
                            let start1=document.getElementById("estrella1"+cadaobjetoid);
                            let start2=document.getElementById("estrella2"+cadaobjetoid);
                            let start3=document.getElementById("estrella3"+cadaobjetoid);
                            let start4=document.getElementById("estrella4"+cadaobjetoid);
                            let start5=document.getElementById("estrella5"+cadaobjetoid);
                            let score;
                            
                            if(start3.classList.contains("checked")){
                                start1.classList.add("checked"); 
                                start2.classList.add("checked"); 
                                start3.classList.remove("checked"); 
                                start4.classList.remove("checked"); 
                                start5.classList.remove("checked"); 
                             } else{let A=false;
                                let B=false;
                                let C=false;
                                
                                B=(~A+B) && ~C;
                                C=(A+C) && ~B;
                                A=(B+A) && ~C;
                                
                                if(A){
                                    start1.classList.add("checked");  
                                    start2.classList.add("checked");  
                                    start3.classList.add("checked");  
                                    start4.classList.remove("checked");  
                                    start5.classList.remove("checked"); 
                                    if(localStorage.getItem(cadaobjetoid)){
                                        score= localStorage.getItem(cadaobjetoid);
                                        score +="3";
                                        localStorage.setItem(cadaobjetoid,score);
                                      // calculoModa(cadaobjetoid,score);
                                    }else{
                                        score ="3";
                                        localStorage.setItem(cadaobjetoid,score);
                                    }
                                }}
                            
                            
                                /* let puntuacion=calculoModa(score);
                                console.log("w333333w");
                                console.log(cadaobjetoid);
                                console.log(cadaobjetoid,puntuacion);
                                console.log("ww33333w");
                         */
                        
                        }
                        
                        
                         function funest4(cadaobjetoid){
                            
                            let start1=document.getElementById("estrella1"+cadaobjetoid);
                            let start2=document.getElementById("estrella2"+cadaobjetoid);
                            let start3=document.getElementById("estrella3"+cadaobjetoid);
                            let start4=document.getElementById("estrella4"+cadaobjetoid);
                            let start5=document.getElementById("estrella5"+cadaobjetoid);
                            let score;
                            
                            if(start4.classList.contains("checked")){
                                start1.classList.add("checked"); 
                                start2.classList.add("checked"); 
                                start3.classList.add("checked"); 
                                start4.classList.remove("checked"); 
                                start5.classList.remove("checked"); 
                             } else{
                                let A=false;
                                let B=false;
                                let C=false;
                                
                                B=(~A+B) && ~C;
                                C=(A+C) && ~B;
                                A=(B+A) && ~C;
                                
                                if(A){
                                    start1.classList.add("checked");  
                                    start2.classList.add("checked");  
                                    start3.classList.add("checked");  
                                    start4.classList.add("checked");  
                                    start5.classList.remove("checked"); 
                        
                                    if(localStorage.getItem(cadaobjetoid)){
                                        score= localStorage.getItem(cadaobjetoid);
                                        score +="4";
                                        localStorage.setItem(cadaobjetoid,score);
                                        
                                       // calculoModa(cadaobjetoid,score);
                        
                                    }else{
                                        score ="4";
                                        localStorage.setItem(cadaobjetoid,score);
                                    }
                                }
                            }
                            
                              /*   let puntuacion=calculoModa(score);
                        
                                console.log("ww444444");
                                console.log(cadaobjetoid);
                                console.log(cadaobjetoid,puntuacion);
                                console.log("www44444444ww");
                         */
                        
                        
                        }
                        
                        
                         function funest5(cadaobjetoid){
                            let start1=document.getElementById("estrella1"+cadaobjetoid);
                            let start2=document.getElementById("estrella2"+cadaobjetoid);
                            let start3=document.getElementById("estrella3"+cadaobjetoid);
                            let start4=document.getElementById("estrella4"+cadaobjetoid);
                            let start5=document.getElementById("estrella5"+cadaobjetoid);
                            let score;
                            
                            
                            if(start5.classList.contains("checked")){
                                start1.classList.add("checked"); 
                                start2.classList.add("checked"); 
                                start3.classList.add("checked"); 
                                start4.classList.add("checked"); 
                                start5.classList.remove("checked"); 
                        
                             } else{let A=false;
                                let B=false;
                                let C=false;
                                
                                B=(~A+B) && ~C;
                                C=(A+C) && ~B;
                                A=(B+A) && ~C;
                                
                                if(A){
                                    start1.classList.add("checked");  
                                    start2.classList.add("checked");  
                                    start3.classList.add("checked");  
                                    start4.classList.add("checked");  
                                    start5.classList.add("checked");  
                        
                                    if(localStorage.getItem(cadaobjetoid)){
                                        score= localStorage.getItem(cadaobjetoid);
                                        score +="5";
                                        localStorage.setItem(cadaobjetoid,score);
                                       // calculoModa(cadaobjetoid,score);
                                    }else{
                                        score ="5";
                                        localStorage.setItem(cadaobjetoid,score);
                                    }
                                }}
                                
                               // console.log("wwwwwwwwwwww");
                                //console.log(cadaobjetoid);
                                //console.log(cadaobjetoid,puntuacion);
                                //console.log("wwwwwwwwwwww");
                        
                              //  document.getElementById("bloqueEstrellasComentario"+cadaobjetoid).innerHTML=`<small class="text-muted">${puntuacion}</small>`;
                        }




                        window.funest1=funest1;
                        window.funest2=funest2;
                        window.funest3=funest3;
                        window.funest4=funest4;
                        window.funest5=funest5;


window.botonAgregarCarritoT=botonAgregarCarritoT;