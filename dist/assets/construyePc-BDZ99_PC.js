import"./footer-7pUEtbEA.js";const r=()=>JSON.parse(localStorage.getItem("piezaDePC")),c=t=>{const n=r();if(n)return n.findIndex(o=>o.id===t.id)},i=t=>r()[t],m=t=>{const n=t;return n.cantidad=1,n};function u(t){const n=r();if(n){const e=c(t),o=n;e===-1?o.push(m(t)):o[e].cantidad++,localStorage.setItem("piezaDePC",JSON.stringify(o))}else{const e=m(t);localStorage.setItem("piezaDePC",JSON.stringify([e]))}}function f(t){const n=r();if(n){const e=c(t),o=n;o[e].cantidad--,localStorage.setItem("piezaDePC",JSON.stringify(o))}}const l=()=>{const t=JSON.parse(localStorage.getItem("piezaDePC")),n=document.getElementById("costo-total");let e=0,o=0;t&&t.length>0&&(t.forEach(s=>{e+=s.cantidad,o+=s.precio*s.cantidad}),n.innerText="$ "+o)},p=t=>{let n="";for(let e=1;e<=5;e++)e<=t?n=n+`<i class="bi bi-star-fill text-warning"></i>
            `:e-.5<=t?n=n+`<i class="bi bi-star-half text-warning"></i>
            `:n=n+`<i class="bi bi-star text-warning"></i>
            `;return n},v=t=>`
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
                                    ${p(t.rating.valoracion)}
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
        `,h=t=>`
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
                                        <div id="${t.id}" class= "row-cols-4">
                                            <button type="button" class="btn btn-sm cuadro">-</button>
                                            <span id="cantidad" class="cuadro">${t.cantidad}</span>
                                            <button type="button" class="btn btn-sm cuadro">+</button>
                                            <button id="bote-basura" type="button" class="bi bi-trash-fill btn btn-sm cuadro"> </button>
                                        </div>
                                    </div>
                                    <div class="col-2 container-fluid precio ">
                                        <h5 class="">Costo unitario</h5>
                                        <span class="">${t.precio}</span>
                                    </div>
    `,y=(t,n)=>{const e=document.createElement("div");return e.classList="card",e.style="width: 18rem",e.innerHTML=v(t),n.appendChild(e),e},j=(t,n)=>{const e=i(n);t.innerHTML=h(e),t.classList="accordion-body  container-fluid row align-items-start producto-seleccionado",S(e),P(e)},E=(t,n,e)=>{n.getElementsByClassName("btn")[0].addEventListener("click",()=>{u(e);const o=c(e);j(t,o),l()})},g=()=>document.getElementById("cantidad"),P=t=>{const n=c(t);let e=i(n);const o=document.getElementById(t.id),s=g();o.getElementsByClassName("btn")[0].addEventListener("click",()=>{e.cantidad>1&&(f(t),l()),e=i(n),console.log(e.cantidad),s.innerText=e.cantidad})},S=t=>{const n=c(t);let e=i(n);const o=document.getElementById(t.id),s=g();o.getElementsByClassName("btn")[1].addEventListener("click",()=>{e.cantidad>=1&&(u(t),l()),e=i(n),console.log(e.cantidad),s.innerText=e.cantidad})},a=async(t,n)=>{const e=document.getElementById(t);try{(await(await fetch(n)).json()).forEach(d=>{const b=y(d,e);E(e,b,d)})}catch(o){console.error(o)}};document.querySelectorAll(".star-rating:not(.readonly) label").forEach(t=>{t.addEventListener("click",function(){this.style.transform="scale(1.2)",setTimeout(()=>{this.style.transform="scale(1)"},200)})});a("procesadores","/json/componentes/procesadores.json");a("motherboard","/json/componentes/motherboard.json");a("ram","/json/componentes/memoriaRAM.json");a("Almacenamiento","/json/componentes/almacenamientoInterno.json");a("enfriamiento","/json/componentes/enfriamiento.json");a("gpu","/json/componentes/GPU.json");a("gabinete","/json/componentes/gabinete.json");a("fuente","/json/componentes/fuenteDeAlimentacion.json");l();
