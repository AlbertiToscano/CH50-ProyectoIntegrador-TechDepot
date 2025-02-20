

const insertHeader = ()=>{
    const header = document.getElementById("header");
    header.innerHTML = `
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
                  <a class="nav-link dropdown-toggle" href="/src/pages/construye-tu-pc.html" data-bs-toggle="dropdown">Construye tu máquina
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Opción 1</a></li>
                      <li><a class="dropdown-item" href="#">Opción 2</a></li>
                      <li><a class="dropdown-item" href="#">Opción 3</a></li>
                      <li><a class="dropdown-item" href="#">Opción 4</a></li>
                      <li><a class="dropdown-item" href="#">Opción 5</a></li>
                  </ul>
              </li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/contacto/contacto.html">Contacto</a></li>
              <li class="nav-item"><a class="nav-link" href="/src/pages/about/about.html">Acerca de nosotros</a></li>
          </ul>
      </div>
  </div>
</nav>
    
    `;
}

insertHeader();