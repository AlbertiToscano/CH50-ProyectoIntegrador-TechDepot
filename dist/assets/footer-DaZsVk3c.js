(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(o){if(o.ep)return;o.ep=!0;const e=a(o);fetch(o.href,e)}})();function d(){const s=localStorage.getItem("sesionIniciada"),t=document.getElementById("icono-usuario");let a="";switch(s){case"true":a="<button class='btn user-btn dropdown-toggle' type='button' data-bs-toggle='dropdown'> <a href='/src/pages/miCuenta/miCuenta.html' class='nav-link me-3 login-link'> <i class='bi bi-person-circle'></i> miCuenta</a></button><ul class='dropdown-menu'><li><a class='dropdown-item' href='/src/pages/miCuenta/miCuenta.html'>miCuenta</a></li> <li><a class='dropdown-item' href='/src/pages/miCuenta/mis pedidos/mis pedidos.html'>Mis pedidos</a></li> <li><a class='dropdown-item' href='/src/pages/inicioSesionAdmin/inicioSesionAdmin.html'>Administrador</a></li></ul>";break;default:a="<button class='btn user-btn dropdown-toggle' type='button' data-bs-toggle='dropdown'> <a href='#' class='nav-link me-3 login-link'> <i class='bi bi-person-circle'></i> Iniciar Sesión</a></button><ul id='menu-perfil' class='dropdown-menu'><li><a class='dropdown-item' href='/src/pages/inicioSesion/inicioSesion.html'>Iniciar Sesion</a></li> <li><a class='dropdown-item' href='/src/pages/registro/registro.html'>Registrarse</a></li> <li><a class='dropdown-item' href='/src/pages/inicioSesionAdmin/inicioSesionAdmin.html'>Administrador</a></li></ul>"}t.innerHTML=a}const m=()=>{const s=document.getElementById("header");s.innerHTML=`
        <!-- Encabezado principal -->
    <!-- main-navbar.html -->
<nav class="navbar navbar-expand-lg bg-light py-3 shadow-sm">
  <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/index.html">
          <img src="/logo.png" alt="TechDepot Logo" class="logo" style="height: 35px; width: auto;">
      </a>
      <form id="searchForm" class="d-flex flex-grow-1 mx-3">
          <input id="searchInput" class="form-control search-bar me-2" type="search" placeholder="¿Qué estás buscando?" list="searchOptions">
              <datalist id="searchOptions">
        <!-- Opciones predeterminadas -->
        <option value="almacenamiento interno">
        <option value="bocinas">
        <option value="discos duros externos">
        <option value="enfriamiento">
        <option value="fuente de alimentacion">
        <option value="gabinetes">
        <option value="gpu">
        <option value="impresoras">
        <option value="laptops">
        <option value="memoria ram">
        <option value="monitores">
        <option value="mouse">
        <option value="motherboard">
        <option value="procesadores">
        <option value="teclados">
        <option value="tintas">
        <option value="usb">
        <option value="webcams">
    </datalist>
          <button class="btn btn-primary search-btn" type="submit">
              <i class="bi bi-search"></i>
          </button>
      </form>

      <!-- Menú de usuario y carrito -->
      <div class="user-menu d-flex align-items-center">
          <!-- Dropdown para Iniciar Sesión -->
          <div id='icono-usuario' class="dropdown">
              <button class="btn user-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                
                  <a href="" class="nav-link me-3 login-link">
                      <i class="bi bi-person-circle"></i> Iniciar Sesión
                  </a>
              </button>
              <ul id='menu-perfil' class="dropdown-menu">
                    <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </div>

          <!-- Carrito -->

          <a href="/src/pages/carrito/carrito.html" class="nav-link cart-link">
              <i class="bi bi-cart3"></i> Mi Carrito
          </a>

      </div>
  </div>
</nav>


  <!-- secondary-navbar.html -->
<nav class="navbar navbar-expand-lg secondary-navbar">
  <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#secondaryNav">
          <span class="navbar-toggler-icon"><i class="bi-list-nav bi-list"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="secondaryNav">
          <ul class="navbar-nav w-100 justify-content-between">
   
              
              <li class="nav-item"><a class="nav-link" href="/src/pages/Productos/productos.html">Productos</a></li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/construyeTuPc/construyeTuPc.html">Construye tu PC</a></li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/contacto/contacto.html">Contacto</a></li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/about/about.html">Acerca de nosotros</a></li>
          </ul>
      </div>
  </div>
</nav>
    
    `,document.getElementById("searchForm").addEventListener("submit",function(o){o.preventDefault();const e=document.getElementById("searchInput").value.trim().toLowerCase();e&&a(e)});function a(o){({"almacenamiento interno":"BotonBarraalmacenamientointerno",bocinas:"BotonBarraBocina","discos duros externos":"BotonBarraDiscoDuro",enfriamiento:"BotonBarraEnfiamiento","fuente de alimentacion":"BotonBarraFuente",gabinetes:"BotonBarraGabinete",gpu:"BotonBarraGpu",impresoras:"BotonBarraImpresoras",laptops:"BotonBarraLaptops","memoria ram":"BottonBarraMemoriaRam",monitores:"BotonBarraMonitores",mouse:"BotonBarraMouse",motherboard:"BotonBarraMother",procesadores:"BotonBarraProcesadores",teclados:"BotonBarraTeclados",tintas:"BotonBarrasTintas",usb:"BarraBotonUsb",webcams:"BotonBarraWeb"})[o.toLowerCase()]?window.location.href=`/src/pages/Productos/productos.html?search=${encodeURIComponent(o)}`:c(o)}function c(o){const e=["/json/componentes/almacenamientoInterno.json","/json/componentes/discoDuroExterno.json","/json/componentes/enfriamiento.json","/json/componentes/fuenteDeAlimentacion.json","/json/componentes/gabinete.json","/json/componentes/GPU.json","/json/componentes/memoriaRAM.json","/json/componentes/motherboard.json","/json/componentes/procesadores.json","/json/oficina/impresoras.json","/json/oficina/laptops.json","/json/oficina/tintas.json","/json/perifericos/bocinas.json","/json/perifericos/monitores.json","/json/perifericos/mouse.json","/json/perifericos/teclados.json","/json/perifericos/usb.json","/json/perifericos/webcams.json"];Promise.all(e.map(n=>fetch(n).then(r=>r.json()))).then(n=>{const i=n.flat().filter(l=>l.titulo.toLowerCase().includes(o));i.length>0?(localStorage.setItem("productosEncontrados",JSON.stringify(i)),window.location.href=`/src/pages/Productos/productostarjetas.html?search=${encodeURIComponent(o)}`):alert("Producto no encontrado")}).catch(n=>console.log(n))}if(window.location.pathname.includes("productos.html")){const e=new URLSearchParams(window.location.search).get("search");if(e){const r={"almacenamiento interno":"BotonBarraalmacenamientointerno",bocinas:"BotonBarraBocina","discos duros externos":"BotonBarraDiscoDuro",enfriamiento:"BotonBarraEnfiamiento","fuente de alimentacion":"BotonBarraFuente",gabinetes:"BotonBarraGabinete",gpu:"BotonBarraGpu",impresoras:"BotonBarraImpresoras",laptops:"BotonBarraLaptops","memoria ram":"BottonBarraMemoriaRam",monitores:"BotonBarraMonitores",mouse:"BotonBarraMouse",motherboard:"BotonBarraMother",procesadores:"BotonBarraProcesadores",teclados:"BotonBarraTeclados",tintas:"BotonBarrasTintas",usb:"BarraBotonUsb",webcams:"BotonBarraWeb"}[e.toLowerCase()];if(r){const i=document.getElementById(r);if(i){i.click();const l=document.getElementById(`aqui${e.replace(/ /g,"")}`);l&&l.scrollIntoView({behavior:"smooth",block:"start"})}}}}};m();window.onload=d();const u=()=>{const s=document.getElementById("footer");s.innerHTML=`
<!-- Pie de página -->
<footer class="text-center py-3 mt-0 footer">
  <p>&copy;2025 por TechDepot. Todos los derechos reservados</p>
  <nav>
      <a href="/src/pages/terminosCondiciones/terminosC.html">Términos y condiciones</a> | <a href="/src/pages/avisoPrivacidad/avisoPrivacidad.html">Aviso de privacidad</a>
  </nav>
</footer>
    
    `};u();
