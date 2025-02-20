(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const i=()=>{const s=document.getElementById("header");s.innerHTML=`
        <!-- Encabezado principal -->
    <!-- main-navbar.html -->
<nav class="navbar navbar-expand-lg bg-light py-3 shadow-sm">
  <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/index.html">
          <img src="/logo.png" alt="TechDepot Logo" class="logo" style="height: 35px; width: auto;">
      </a>
      <form class="d-flex flex-grow-1 mx-3">
          <input class="form-control search-bar me-2" type="search" placeholder="¿Qué estás buscando?">
          <button class="btn btn-primary search-btn" type="submit">
              <i class="bi bi-search"></i>
          </button>
      </form>

      <!-- Menú de usuario y carrito -->
      <div class="user-menu d-flex align-items-center">
          <!-- Dropdown para Iniciar Sesión -->
          <div class="dropdown">
              <button class="btn user-btn dropdown-toggle" type="button" data-bs-toggle="dropdown">

                  <a href="#" class="nav-link me-3 login-link">
                      <i class="bi bi-person-circle"></i> Iniciar Sesión
                  </a>
              </button>
              <ul class="dropdown-menu">
                  <!-- <li><a class="dropdown-item" href="#">Perfil</a></li>
-->
                  <li><a class="dropdown-item" href="#">Registrarse</a></li>
              </ul>
          </div>

          <!-- Carrito -->

          <a href="#" class="nav-link cart-link">
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
   
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categorías
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Opción 1</a></li>
                      <li><a class="dropdown-item" href="#">Opción 2</a></li>
                      <li><a class="dropdown-item" href="#">Opción 3</a></li>
                      <li><a class="dropdown-item" href="#">Opción 4</a></li>
                      <li><a class="dropdown-item" href="#">Opción 5</a></li>
                  </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/Productos/productos.html">Productos</a></li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Construye tu PC
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/src/pages/construyeTuPc/construyeTuPc.html">Constructor interactivo de PC</a></li>
                      <li><a class="dropdown-item" href="#">Opción 2</a></li>
                      <li><a class="dropdown-item" href="#">Opción 3</a></li>
                  </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/contacto/contacto.html">Contacto</a></li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/about/about.html">Acerca de nosotros</a></li>
          </ul>
      </div>
  </div>
</nav>
    
    `};i();const l=()=>{const s=document.getElementById("footer");s.innerHTML=`
<!-- Pie de página -->
<footer class="text-center py-3 mt-0 footer">
  <p>&copy;2025 por TechDepot. Todos los derechos reservados</p>
  <nav>
      <a href="/src/pages/terminosCondiciones/terminosC.html">Términos y condiciones</a> | <a href="#">Aviso de privacidad</a>
  </nav>
</footer>
    
    `};l();
