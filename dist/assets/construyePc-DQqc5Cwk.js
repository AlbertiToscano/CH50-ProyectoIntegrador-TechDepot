import"./footer-DaZsVk3c.js";const u=()=>JSON.parse(localStorage.getItem("piezaDePC")),g=e=>{const a=u();if(a)return a.findIndex(n=>n.id===e.id)},l=e=>u()[e],v=e=>{const a=e;return a.cantidad=1,a};function A(e){const a=u();if(a){const t=g(e),n=a;t===-1?n.push(v(e)):n[t].cantidad++,localStorage.setItem("piezaDePC",JSON.stringify(n))}else{const t=v(e);localStorage.setItem("piezaDePC",JSON.stringify([t]))}}function M(e){const a=u();if(a){const t=g(e),n=a;n[t].cantidad--,localStorage.setItem("piezaDePC",JSON.stringify(n))}}function C(e){const a=u();if(a){const t=g(e);a.splice(t,1),localStorage.setItem("piezaDePC",JSON.stringify(a))}}const b=()=>{const e=JSON.parse(localStorage.getItem("piezaDePC")),a=document.getElementById("costo-total");let t=0,n=0;e&&e.length>0?(e.forEach(i=>{t+=i.cantidad,n+=i.precio*i.cantidad}),a.innerText="$ "+n):a.innerText="$ 0"},d=e=>{const a=u();let t;return a?t=a.findIndex(n=>n.categoria[0]==e):t=-1,t},c=e=>{const a=d(e);let t;return a!=-1?t=!0:t=!1,t},p=()=>{let e=!0;const a=d("procesador"),t=l(a),n=c("enfriamiento");return t.caracteristicas.disipador=="si"||n?e=!0:e=!1,e},j=()=>{let e=!0;const a=d("procesador"),t=l(a),n=c("tarjeta de video");return t.caracteristicas.graficos_integrados=="si"||n?e=!0:e=!1,e},D=(e,a)=>{if(a!=="procesador"){if(c("procesador")){const t=d("procesador"),i=l(t).caracteristicas.socket;let s;i=="AM5"||i=="LGA 1700"?s="DDR5":s="DDR4",e[0].categoria[0]==="tarjeta madre"&&(e=e.filter(r=>r.caracteristicas.socket==i)),e[0].categoria[0]==="memoria RAM"&&(e=e.filter(r=>r.caracteristicas.DDR==s))}}return e},y=(e,a)=>{if(a!=="tarjeta madre"){if(c("tarjeta madre")){const t=d("tarjeta madre"),n=l(t),i=n.caracteristicas.socket,s=n.caracteristicas.tamaño;let r;i=="AM5"||i=="LGA 1700"?r="DDR5":r="DDR4",e[0].categoria[0]==="procesador"&&(e=e.filter(m=>m.caracteristicas.socket==i)),e[0].categoria[0]==="memoria RAM"&&(e=e.filter(m=>m.caracteristicas.DDR==r)),e[0].categoria[0]==="gabinete"&&(e=e.filter(m=>{const o=m.caracteristicas.tamaño;if(s=="ATX")return o=="ATX"||o=="E-ATX";if(s=="Micro-ATX")return o=="ATX"||o=="E-ATX"||o=="Micro-ATX";if(s=="Mini-ITX")return o=="ATX"||o=="E-ATX"||o=="Micro-ATX"||o=="Mini-ITX"})),e[0].categoria[0]==="Fuente de alimentacion"&&(e=e.filter(m=>{const o=m.caracteristicas.tamaño;if(s=="ATX")return o=="ATX";if(s=="Micro-ATX")return o=="ATX"||o=="Micro-ATX";if(s=="Mini-ITX")return o=="ATX"||o=="Micro-ATX"||o=="Mini-ITX"}))}}return e},P=(e,a)=>{if(a!=="memoria RAM"){if(c("memoria RAM")){const t=d("memoria RAM"),n=l(t);e[0].categoria[0]==="procesador"&&(e=e.filter(i=>{const s=i.caracteristicas.socket;let r;return s=="AM5"||s=="LGA 1700"?r="DDR5":r="DDR4",r==n.caracteristicas.DDR})),e[0].categoria[0]==="tarjeta madre"&&(e=e.filter(i=>{const s=i.caracteristicas.socket;let r;return s=="AM5"||s=="LGA 1700"?r="DDR5":r="DDR4",r==n.caracteristicas.DDR}))}}return e},E=(e,a)=>{if(a!=="Fuente de alimentacion"){if(c("Fuente de alimentacion")){const t=d("Fuente de alimentacion"),n=l(t),i=n.caracteristicas.tamaño;e[0].categoria[0]==="procesador"&&(e=e.filter(s=>s.caracteristicas.TDP<=n.caracteristicas.capacidad)),e[0].categoria[0]==="tarjeta de video"&&(e=e.filter(s=>s.caracteristicas.TDP<=n.caracteristicas.capacidad)),e[0].categoria[0]==="gabinete"&&(e=e.filter(s=>{const r=s.caracteristicas.tamaño;if(i=="ATX")return r=="ATX"||r=="E-ATX";if(i=="Micro-ATX")return r=="ATX"||r=="E-ATX"||r=="Micro-ATX";if(i=="Mini-ITX")return r=="ATX"||r=="E-ATX"||r=="Micro-ATX"||r=="Mini-ITX"})),e[0].categoria[0]==="tarjeta madre"&&(e=e.filter(s=>{const r=s.caracteristicas.tamaño;if(i=="ATX")return r=="ATX";if(i=="Micro-ATX")return r=="ATX"||r=="Micro-ATX";if(i=="Mini-ITX")return r=="ATX"||r=="Micro-ATX"||r=="Mini-ITX"}))}}return e},I=(e,a)=>{if(a!=="gabinete"){if(c("gabinete")){const t=d("gabinete"),i=l(t).caracteristicas.tamaño;e[0].categoria[0]==="Fuente de alimentacion"&&(e=e.filter(s=>{const r=s.caracteristicas.tamaño;if(i=="ATX")return r=="ATX";if(i=="Micro-ATX")return r=="ATX"||r=="Micro-ATX";if(i=="Mini-ITX")return r=="ATX"||r=="Micro-ATX"||r=="Mini-ITX"})),e[0].categoria[0]==="tarjeta madre"&&(e=e.filter(s=>{const r=s.caracteristicas.tamaño;if(i=="ATX"||i=="E-ATX")return!0;if(i=="Micro-ATX")return r=="Micro-ATX";if(i=="Mini-ITX")return r=="Mini-ITX"}))}}return e},w=(e,a)=>{const t=JSON.parse(localStorage.getItem("piezaDePC"));let n=0;return t&&t.length>0&&(t.forEach(i=>{let s=i.categoria[0];(s=="procesador"||s=="tarjeta de video")&&(n+=i.caracteristicas.TDP)}),n=n+50,a=="Fuente de alimentacion"&&(e=e.filter(i=>i.caracteristicas.capacidad>=n))),e},L=(e,a)=>(e=D(e,a),e=y(e,a),e=P(e,a),e=E(e,a),e=I(e,a),e=w(e,a),e),S=()=>{const e=document.getElementById("botonPagar"),a=document.getElementById("tarjetaTotal");e.addEventListener("click",()=>{const t=c("procesador"),n=c("tarjeta madre"),i=c("memoria RAM"),s=c("almacenamiento"),r=c("gabinete"),m=c("Fuente de alimentacion");t?n?i?s?r?m?p()?j()?(a.removeChild(a.firstChild),window.location.href="/src/pages/carrito/carrito.html"):a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                 <strong>Cuidado!</strong> No has seleccionado una <strong>tarjeta de video</strong> y el procesador seleccionado necesita una, por favor selecciona una para continuar.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                 <strong>Cuidado!</strong> No has seleccionado un <strong>Sistema de ventilación</strong> y el procesador seleccionado necesita uno, por favor selecciona una para continuar.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>fuente de alimentación</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado un <strong>gabinete</strong>, por favor selecciona uno para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>unidad de almacenamiento</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>memoria RAM</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado una <strong>tarjeta madre</strong>, por favor selecciona una para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`:a.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Cuidado!</strong> No has seleccionado un <strong>procesador</strong>, por favor selecciona uno para continuar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`})},x=e=>{let a="";for(let t=1;t<=5;t++)t<=e?a=a+`<i class="bi bi-star-fill text-warning"></i>
            `:t-.5<=e?a=a+`<i class="bi bi-star-half text-warning"></i>
            `:a=a+`<i class="bi bi-star text-warning"></i>
            `;return a},R=e=>`
                       
                            <img src="${e.imagen}" class="card-img-top" alt="${e.titulo}">
                            <div class="card-body container-fluid ">
                                <h5 class="card-title">
                                ${e.titulo.length>65?e.titulo.substring(0,62)+"...":e.titulo} 
                                </h5>
                                <p class="card-text">
                                ${e.descripcion.length>55?e.descripcion.substring(0,52)+"...":e.descripcion} 
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                    ${x(e.rating.valoracion)}
                                        <small class="text-muted">(${e.rating.valoracion})</small>
                                    </div>
                                </div>
                                    <div id="precio-btn" class="d-flex justify-content-between align-items-center ">
                                        <span class="h5 mb-0 card-price">$${e.precio} </span>
                                        <div>
                                            <a  class="btn">Añadir al carrito</a>
                                        </div>
                                    </div>
                            </div>
                        
        `,N=(e,a)=>{const t=document.createElement("div");return t.classList="card col-xxl-2 col-md-3 col-sm-5",t.innerHTML=R(e),a.appendChild(t),t},$=e=>`<img class="col-xxl-2 col col-sm-12" src="${e.imagen}" alt="${e.titulo}">
                                    <!-- contenedor con titulo, descripcion, cantidad y borrar -->
                                    <div class="col-xxl-8 col-md-6 texto-botones">
                                        <h4>
                                        ${e.titulo.length>70?e.titulo.substring(0,67)+"...":e.titulo}
                                        </h4>
                                        <p>
                                        ${e.descripcion.length>60?e.descripcion.substring(0,57)+"...":e.descripcion}
                                        </p>
                                        <!-- Botones -->
                                        <div id="${e.id}" class= "container-fluid">
                                            <button type="button" class="btn btn-sm cuadro">-</button>
                                            <span id="cantidad${e.id}" class="cuadro numeroCantidad">${e.cantidad}</span>
                                            <button type="button" class="btn btn-sm cuadro">+</button>
                                            
                                        </div>
                                    </div>
                                    <div class="col-xxl-2 col-sm-12 container-fluid precio">
                                        <h5 class="">Costo unitario</h5>
                                        <span class="">$${e.precio}</span>
                                        <button id="bote-basura" type="button" class="${e.id} bi bi-trash-fill btn btn-sm cuadro"> </button>
                                    </div>
                                </div>`,k=(e,a,t)=>{const n=d(t),i=l(n);e.innerHTML=$(i),e.classList="accordion-body  container-fluid row  producto-seleccionado",F(i),H(i),z(i,e)},X=e=>{for(;e.firstChild;)e.classList="accordion-body  container-fluid row align-items-start",e.removeChild(e.firstChild)},B=(e,a,t,n,i)=>{a.getElementsByClassName("btn")[0].addEventListener("click",()=>{A(t),T(),b()})},h=e=>document.getElementById(`cantidad${e.id}`),H=e=>{const a=g(e);let t=l(a);const n=document.getElementById(e.id),i=h(e);n.getElementsByClassName("btn")[0].addEventListener("click",()=>{t.cantidad>1&&(M(e),b()),t=l(a),i.innerText=t.cantidad})},F=e=>{const a=g(e);let t=l(a);const n=document.getElementById(e.id),i=h(e);n.getElementsByClassName("btn")[1].addEventListener("click",()=>{t.cantidad>=1&&(A(e),b()),t=l(a),i.innerText=t.cantidad})},z=(e,a,t,n)=>{const i=g(e);let s=l(i);a.getElementsByClassName("btn")[2].addEventListener("click",()=>{s.cantidad>=1&&(C(e),b(),X(a),T())})},G=(e,a,t)=>{d(t)!=-1?k(a,e,t):(e=L(e,t),e.forEach(n=>{const i=N(n,a);B(a,i,n)}))},f=async(e,a)=>{const t=document.getElementById(e);X(t);try{const i=await(await fetch(a)).json();G(i,t,e)}catch(n){console.error(n)}},T=()=>{f("procesador","/json/componentes/procesadores.json"),f("tarjeta madre","/json/componentes/motherboard.json"),f("memoria RAM","/json/componentes/memoriaRAM.json"),f("almacenamiento","/json/componentes/almacenamientoInterno.json"),f("enfriamiento","/json/componentes/enfriamiento.json"),f("tarjeta de video","/json/componentes/GPU.json"),f("gabinete","/json/componentes/gabinete.json"),f("Fuente de alimentacion","/json/componentes/fuenteDeAlimentacion.json")};T();b();S();
