import"./footer-Cv0a1vcf.js";function a(e,t){fetch("/json/"+e+"/"+t+".json").then(o=>o.json()).then(o=>{document.getElementById(t).innerHTML=n(o)}).catch(o=>console.log(o))}const n=e=>{let t;return e.map(i=>(t=r(i),d(i,t))).join("")};function r(e){let t="";if(e.descripcion.length>100){for(let o=0;o<=50;o++)t+=e.descripcion[o];return t=t+"..."}}function c(e){let t=document.getElementById("IDescripcionExpandida"+e),o=document.getElementById("IDescripcionContraida"+e),i=document.getElementById("IDescripcionContraidabase"+e);t.classList.remove("descripcionExpandida"),o.classList.add("descripcionCorta"),i.classList.add("descripcionCortabase")}function s(e){let t=document.getElementById("IDescripcionExpandida"+e),o=document.getElementById("IDescripcionContraida"+e),i=document.getElementById("IDescripcionContraidabase"+e);console.log(e),t.classList.add("descripcionExpandida"),o.classList.remove("descripcionCorta"),i.classList.add("descripcionCortabase")}document.getElementById("BotonBarraalmacenamientointerno").addEventListener("click",()=>{a("componentes","almacenamientoInterno")});document.getElementById("BotonBarraBocina").addEventListener("click",()=>{document.getElementById("aquiBocina").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","bocinas")});document.getElementById("BotonBarraDiscoDuro").addEventListener("click",()=>{document.getElementById("aquiDiscoDuroExt").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","discoDuroExterno")});document.getElementById("BotonBarraEnfiamiento").addEventListener("click",()=>{document.getElementById("aquiEnfriamiento").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","enfriamiento")});document.getElementById("BotonBarraFuente").addEventListener("click",()=>{document.getElementById("aquiFuenteDeAli").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","fuenteDeAlimentacion")});document.getElementById("BotonBarraGabinete").addEventListener("click",()=>{document.getElementById("aquiGabinete").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","gabinete")});document.getElementById("BotonBarraGpu").addEventListener("click",()=>{document.getElementById("aquiGpu").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","GPU")});document.getElementById("BotonBarraImpresoras").addEventListener("click",()=>{document.getElementById("aquiImpresora").scrollIntoView({behavior:"smooth",block:"start"}),a("oficina","impresoras")});document.getElementById("BotonBarraLaptops").addEventListener("click",()=>{document.getElementById("aquilaptops").scrollIntoView({behavior:"smooth",block:"start"}),a("oficina","laptops")});document.getElementById("BottonBarraMemoriaRam").addEventListener("click",()=>{document.getElementById("aquimemoriaRAM").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","memoriaRAM")});document.getElementById("BotonBarraMonitores").addEventListener("click",()=>{document.getElementById("aquimonitores").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","monitores")});document.getElementById("BotonBarraMouse").addEventListener("click",()=>{document.getElementById("aquimouse").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","mouse")});document.getElementById("BotonBarraMother").addEventListener("click",()=>{document.getElementById("aquimotherboard").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","motherboard")});document.getElementById("BotonBarraProcesadores").addEventListener("click",()=>{document.getElementById("aquiprocesadores").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","procesadores")});document.getElementById("BotonBarraTeclados").addEventListener("click",()=>{document.getElementById("aquiteclados").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","teclados")});document.getElementById("BotonBarrasTintas").addEventListener("click",()=>{document.getElementById("aquitintas").scrollIntoView({behavior:"smooth",block:"start"}),a("oficina","tintas")});document.getElementById("BarraBotonUsb").addEventListener("click",()=>{document.getElementById("aquiusb").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","usb")});document.getElementById("BotonBarraWeb").addEventListener("click",()=>{document.getElementById("aquiwebcams").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","webcams")});function l(e){localStorage.setItem("tarjeta",e);let t=JSON.parse(localStorage.getItem("tarjeta"));console.log(t)}const d=(e,t)=>`<div class="card">
                            <a href="/src/pages/Productos/tarjeta.html">
                            <img onclick="mostrarInfoTarjeta('${e}')" src="${e.imagen}" class="card-img-top" id="IdImagen${e.id}" alt="Imagen de producto TeachDepot">
                             </a>
                        
                            <div class="card-body">
                               <div >
                                        <h5 class="card-title">${e.titulo}</h5>
                                            <div id="contenedorDescripcion">
                                            <p class="card-text " id="IDescripcionContraidabase${e.id}">${t}</p>
                                            <p class="card-text descripcionExpandida" id="IDescripcionExpandida${e.id}">${e.descripcion}</p>
                                            <p class="card-text descripcionCorta" id="IDescripcionContraida${e.id}">${t}</p>
                                            </div>
                                        
                                        <i class="bi bi-arrow-down-square vabajo" onclick="expandirDescripcionProducto('${e.id}')" ></i>
                                        <i class="bi bi-arrow-up-square varriba" onclick="contraerDescripcionProducto('${e.id}')"></i>
                                </div>
                                    <div>
                                    
                                    </div>
                              
                                              
                                                <div class="d-flex justify-content-between align-items-center cardEstrellas">
                                                        <div>
                                                            <i class="bi bi-star-fill text-warning"></i>
                                                            <i class="bi bi-star-fill text-warning"></i>
                                                            <i class="bi bi-star-fill text-warning"></i>
                                                            <i class="bi bi-star-half text-warning"></i>
                                                            <i class="bi bi-star text-warning"></i>
                                                            <small class="text-muted">(3.5)</small>
                                                        </div>
                                                </div>
                                
                                   
                                                <div  class="d-flex justify-content-between align-items-center contPrice">
                                                        <span class="h5 mb-0 card-price">$${e.precio}</span>
                                                            <div>
                                                                <a href="#" class="btn">Añadir al carrito</a>
                                                            </div>
                                                 </div>
                                         
                        </div>
          
          
          
                        </div>`,m=e=>` 
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
         </div>`;document.getElementById("BotonEnviarComentario").addEventListener("click",()=>{let e=document.getElementById("textResenaUsuario").value;document.getElementById("colocarTarjetaResena").innerHTML+=m(e),document.getElementById("textResenaUsuario").value=""});window.expandirDescripcionProducto=c;window.contraerDescripcionProducto=s;window.mostrarInfoTarjeta=l;
