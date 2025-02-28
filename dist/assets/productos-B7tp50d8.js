import"./footer-CkzLowea.js";function a(e,t){fetch("/json/"+e+"/"+t+".json").then(i=>i.json()).then(i=>{document.getElementById(t).innerHTML=r(i)}).catch(i=>console.log(i))}const r=e=>{let t;return e.map(n=>(t=o(n),c(n,t))).join("")};function o(e){let t="";if(e.descripcion.length>100){for(let i=0;i<=50;i++)t+=e.descripcion[i];return t=t+"..."}}document.getElementById("BotonBarraGabinete").addEventListener("click",()=>{document.getElementById("aquiGabinetes").scrollIntoView({behavior:"smooth",block:"start"})});document.getElementById("BotonBarraBocina").addEventListener("click",()=>{document.getElementById("aquiBocina").scrollIntoView({behavior:"smooth",block:"start"}),a("perifericos","bocinas")});document.getElementById("BotonBarraDiscoDuro").addEventListener("click",()=>{document.getElementById("aquiDiscoDuroExt").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","discoDuroExterno")});document.getElementById("BotonBarraEnfiamiento").addEventListener("click",()=>{document.getElementById("aquiEnfriamiento").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","enfriamiento")});document.getElementById("BotonBarraFuente").addEventListener("click",()=>{document.getElementById("aquiFuenteDeAli").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","fuenteDeAlimentacion")});document.getElementById("BotonBarraGabinete").addEventListener("click",()=>{document.getElementById("aquiGabinete").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","gabinete")});document.getElementById("BotonBarraGpu").addEventListener("click",()=>{document.getElementById("aquiGpu").scrollIntoView({behavior:"smooth",block:"start"}),a("componentes","GPU")});document.getElementById("BotonBarraImpresoras").addEventListener("click",()=>{document.getElementById("aquiImpresora").scrollIntoView({behavior:"smooth",block:"start"}),a("oficina","impresoras")});const c=(e,t)=>`<div class="card" style="width: 18rem;">
                            <img src="${e.imagen}" class="card-img-top" alt="Imagen de producto TeachDepot">
                            <div class="card-body">
                               <div>
                                <h5 class="card-title">${e.titulo}</h5>
                                <div id="contenedorDescripcion">
                                <p class="card-text " id="IDescripcionContraidabase${e.id}">${t}</p>
                                <p class="card-text descripcionExpandida" id="IDescripcionExpandida${e.id}">${e.descripcion}</p>
                                <p class="card-text descripcionCorta" id="IDescripcionContraida${e.id}">${t}</p>
                                </div>
                                
                                <i class="bi bi-arrow-down-square vabajo" onclick="expandirDescripcionProducto('${e.id}')" ></i>
                                <i class="bi bi-arrow-up-square varriba" onclick="contraerDescripcionProducto('${e.id}')"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-half text-warning"></i>
                                        <i class="bi bi-star text-warning"></i>
                                        <small class="text-muted">(3.5)</small>
                                    </div>
                                </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="h5 mb-0 card-price">${e.precio}</span>
                                        <div>
                                            <a href="#" class="btn">Añadir al carrito</a>
                                        </div>
                                    </div>
                            </div>
                        </div>`;
