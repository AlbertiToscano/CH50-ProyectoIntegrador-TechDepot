import"./footer-Cv0a1vcf.js";function t(e,a){fetch("/json/"+e+"/"+a+".json").then(i=>i.json()).then(i=>{document.getElementById(a).innerHTML=n(i)}).catch(i=>console.log(i))}const n=e=>{let a;return e.map(o=>(a=r(o),d(o,a))).join("")};function r(e){let a="";if(e.descripcion.length>100){for(let i=0;i<=50;i++)a+=e.descripcion[i];return a=a+"..."}}function c(e){let a=document.getElementById("IDescripcionExpandida"+e),i=document.getElementById("IDescripcionContraida"+e),o=document.getElementById("IDescripcionContraidabase"+e);a.classList.remove("descripcionExpandida"),i.classList.add("descripcionCorta"),o.classList.add("descripcionCortabase")}function s(e){let a=document.getElementById("IDescripcionExpandida"+e),i=document.getElementById("IDescripcionContraida"+e),o=document.getElementById("IDescripcionContraidabase"+e);console.log(e),a.classList.add("descripcionExpandida"),i.classList.remove("descripcionCorta"),o.classList.add("descripcionCortabase")}document.getElementById("BotonBarraalmacenamientointerno").addEventListener("click",()=>{t("componentes","almacenamientoInterno")});document.getElementById("BotonBarraBocina").addEventListener("click",()=>{document.getElementById("aquiBocina").scrollIntoView({behavior:"smooth",block:"start"}),t("perifericos","bocinas")});document.getElementById("BotonBarraDiscoDuro").addEventListener("click",()=>{document.getElementById("aquiDiscoDuroExt").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","discoDuroExterno")});document.getElementById("BotonBarraEnfiamiento").addEventListener("click",()=>{document.getElementById("aquiEnfriamiento").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","enfriamiento")});document.getElementById("BotonBarraFuente").addEventListener("click",()=>{document.getElementById("aquiFuenteDeAli").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","fuenteDeAlimentacion")});document.getElementById("BotonBarraGabinete").addEventListener("click",()=>{document.getElementById("aquiGabinete").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","gabinete")});document.getElementById("BotonBarraGpu").addEventListener("click",()=>{document.getElementById("aquiGpu").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","GPU")});document.getElementById("BotonBarraImpresoras").addEventListener("click",()=>{document.getElementById("aquiImpresora").scrollIntoView({behavior:"smooth",block:"start"}),t("oficina","impresoras")});document.getElementById("BotonBarraLaptops").addEventListener("click",()=>{document.getElementById("aquilaptops").scrollIntoView({behavior:"smooth",block:"start"}),t("oficina","laptops")});document.getElementById("BottonBarraMemoriaRam").addEventListener("click",()=>{document.getElementById("aquimemoriaRAM").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","memoriaRAM")});document.getElementById("BotonBarraMonitores").addEventListener("click",()=>{document.getElementById("aquimonitores").scrollIntoView({behavior:"smooth",block:"start"}),t("perifericos","monitores")});document.getElementById("BotonBarraMouse").addEventListener("click",()=>{document.getElementById("aquimouse").scrollIntoView({behavior:"smooth",block:"start"}),t("perifericos","mouse")});document.getElementById("BotonBarraMother").addEventListener("click",()=>{document.getElementById("aquimotherboard").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","motherboard")});document.getElementById("BotonBarraProcesadores").addEventListener("click",()=>{document.getElementById("aquiprocesadores").scrollIntoView({behavior:"smooth",block:"start"}),t("componentes","procesadores")});document.getElementById("BotonBarraTeclados").addEventListener("click",()=>{document.getElementById("aquiteclados").scrollIntoView({behavior:"smooth",block:"start"}),t("perifericos","teclados")});document.getElementById("BotonBarrasTintas").addEventListener("click",()=>{document.getElementById("aquitintas").scrollIntoView({behavior:"smooth",block:"start"}),t("oficina","tintas")});document.getElementById("BarraBotonUsb").addEventListener("click",()=>{document.getElementById("aquiusb").scrollIntoView({behavior:"smooth",block:"start"}),t("perifericos","usb")});document.getElementById("BotonBarraWeb").addEventListener("click",()=>{document.getElementById("aquiwebcams").scrollIntoView({behavior:"smooth",block:"start"}),t("perifericos","webcams")});const d=(e,a)=>`<div class="card"  >
                            <img src="${e.imagen}" class="card-img-top" alt="Imagen de producto TeachDepot">
                        
                        
                            <div class="card-body">
                               <div >
                                        <h5 class="card-title">${e.titulo}</h5>
                                            <div id="contenedorDescripcion">
                                            <p class="card-text " id="IDescripcionContraidabase${e.id}">${a}</p>
                                            <p class="card-text descripcionExpandida" id="IDescripcionExpandida${e.id}">${e.descripcion}</p>
                                            <p class="card-text descripcionCorta" id="IDescripcionContraida${e.id}">${a}</p>
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
          
          
          
                        </div>`,l=e=>` 
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
         </div>`;document.getElementById("BotonEnviarComentario").addEventListener("click",()=>{let e=document.getElementById("textResenaUsuario").value;document.getElementById("colocarTarjetaResena").innerHTML+=l(e),document.getElementById("textResenaUsuario").value=""});window.expandirDescripcionProducto=c;window.contraerDescripcionProducto=s;
