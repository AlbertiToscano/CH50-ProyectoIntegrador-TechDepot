import"./footer-yo8OtmSv.js";function c(t){const e=t.categoria[0];if(!localStorage.getItem(e)){const i=t;i.cantidad=1,localStorage.setItem(e,JSON.stringify([i]))}}const r=t=>{let e="";for(let n=1;n<=5;n++)n<=t?e=e+`<i class="bi bi-star-fill text-warning"></i>
            `:n-.5<=t?e=e+`<i class="bi bi-star-half text-warning"></i>
            `:e=e+`<i class="bi bi-star text-warning"></i>
            `;return e},l=t=>`
                            <img src="${t.imagen}" class="card-img-top" alt="${t.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">
                                ${t.titulo.length>90?t.titulo.substring(0,87)+"...":t.titulo} 
                                </h5>
                                <p class="card-text">
                                ${t.descripcion.length>60?t.descripcion.substring(0,57)+"...":t.descripcion} 
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                    ${r(t.rating.valoracion)}
                                        <small class="text-muted">(${t.rating.valoracion})</small>
                                    </div>
                                </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="h5 mb-0 card-price">$${t.precio} </span>
                                        <div>
                                            <a  class="btn">Añadir al carrito</a>
                                        </div>
                                    </div>
                            </div>
        `,d=t=>`
                                   <img class="col-2 " src="${t.imagen}" alt="${t.titulo}">
                                    <!-- contenedor con titulo, descripcion, cantidad y borrar -->
                                    <div class="col-xxl-8 col-md-6 texto-botones">
                                        <h4>
                                        ${t.titulo.length>70?t.titulo.substring(0,67)+"...":t.titulo}
                                        </h4>
                                        <p>
                                        ${t.descripcion.length>60?t.descripcion.substring(0,57)+"...":t.descripcion}
                                        </p>
                                        <!-- Botones -->
                                        <div row-cols-4>
                                            <button type="button" class="btn btn-sm cuadro">-</button>
                                            <button type="button" class="btn btn-sm cuadro">1</button>
                                            <button type="button" class="btn btn-sm cuadro">+</button>
                                            <button id="bote-basura" type="button" class="bi bi-trash-fill btn btn-sm cuadro"> </button>
                                        </div>
                                    </div>
                                    <div class="col-2 container-fluid precio ">
                                        <h5 class="">Costo unitario</h5>
                                        <span class="">${t.precio}</span>
                                    </div>
    `,m=(t,e)=>{const n=document.createElement("div");return n.classList="card",n.style="width: 18rem",n.innerHTML=l(t),e.appendChild(n),n},b=(t,e)=>{t.innerHTML=d(e),t.classList="accordion-body  container-fluid row align-items-start producto-seleccionado"},u=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},g=(t,e,n)=>{e.getElementsByClassName("btn")[0].addEventListener("click",()=>{c(n),u(t),b(t,n)})};document.querySelector("button");const s=async(t,e)=>{const n=document.getElementById(t);try{(await(await fetch(e)).json()).forEach(o=>{const a=m(o,n);g(n,a,o)})}catch(i){console.error(i)}};document.querySelectorAll(".star-rating:not(.readonly) label").forEach(t=>{t.addEventListener("click",function(){this.style.transform="scale(1.2)",setTimeout(()=>{this.style.transform="scale(1)"},200)})});s("procesadores","/public/json/componentes/procesadores.json");s("motherboard","/public/json/componentes/motherboard.json");s("ram","/public/json/componentes/memoriaRAM.json");s("Almacenamiento","/public/json/componentes/almacenamientoInterno.json");s("enfriamiento","/public/json/componentes/enfriamiento.json");s("gpu","/public/json/componentes/GPU.json");s("gabinete","/public/json/componentes/gabinete.json");s("fuente","/public/json/componentes/fuenteDeAlimentacion.json");
