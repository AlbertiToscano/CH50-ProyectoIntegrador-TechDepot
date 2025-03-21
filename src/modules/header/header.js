import { actualizarNavBar } from "../sesion/sesionIniciada";
const insertHeader = () => {
    const header = document.getElementById("header");
    header.innerHTML = `
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
    
    `;


    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
        if (searchTerm) {
            buscarProductoOSection(searchTerm);
        }
    });

    function buscarProductoOSection(searchTerm) {
        const sections = {
            'almacenamiento interno': 'BotonBarraalmacenamientointerno',
            'bocinas': 'BotonBarraBocina',
            'discos duros externos': 'BotonBarraDiscoDuro',
            'enfriamiento': 'BotonBarraEnfiamiento',
            'fuente de alimentacion': 'BotonBarraFuente',
            'gabinetes': 'BotonBarraGabinete',
            'gpu': 'BotonBarraGpu',
            'impresoras': 'BotonBarraImpresoras',
            'laptops': 'BotonBarraLaptops',
            'memoria ram': 'BottonBarraMemoriaRam',
            'monitores': 'BotonBarraMonitores',
            'mouse': 'BotonBarraMouse',
            'motherboard': 'BotonBarraMother',
            'procesadores': 'BotonBarraProcesadores',
            'teclados': 'BotonBarraTeclados',
            'tintas': 'BotonBarrasTintas',
            'usb': 'BarraBotonUsb',
            'webcams': 'BotonBarraWeb'
        };

        const sectionId = sections[searchTerm.toLowerCase()];
        if (sectionId) {
            window.location.href = `/src/pages/Productos/productos.html?search=${encodeURIComponent(searchTerm)}`;
        } else {
            buscarProducto(searchTerm);
        }
    }

    function buscarProducto(searchTerm) {
        const jsonFiles = [
            '/json/componentes/almacenamientoInterno.json',
            '/json/componentes/discoDuroExterno.json',
            '/json/componentes/enfriamiento.json',
            '/json/componentes/fuenteDeAlimentacion.json',
            '/json/componentes/gabinete.json',
            '/json/componentes/GPU.json',
            '/json/componentes/memoriaRAM.json',
            '/json/componentes/motherboard.json',
            '/json/componentes/procesadores.json',
            '/json/oficina/impresoras.json',
            '/json/oficina/laptops.json',
            '/json/oficina/tintas.json',
            '/json/perifericos/bocinas.json',
            '/json/perifericos/monitores.json',
            '/json/perifericos/mouse.json',
            '/json/perifericos/teclados.json',
            '/json/perifericos/usb.json',
            '/json/perifericos/webcams.json'
        ];

        Promise.all(jsonFiles.map(file =>
            fetch(file).then(response => response.json())
        ))
            .then(results => {
                const allProducts = results.flat();
                const productosEncontrados = allProducts.filter(producto =>
                    producto.titulo.toLowerCase().includes(searchTerm)
                );

                if (productosEncontrados.length > 0) {
                    localStorage.setItem("productosEncontrados", JSON.stringify(productosEncontrados));
                    window.location.href = `/src/pages/Productos/productostarjetas.html?search=${encodeURIComponent(searchTerm)}`;
                } else {
                    alert("Producto no encontrado");
                }
            })
            .catch((error) => console.log(error));
    }

    // Manejar la búsqueda cuando se carga la página de productos
    if (window.location.pathname.includes('productos.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search');

        if (searchTerm) {
            const sections = {
                'almacenamiento interno': 'BotonBarraalmacenamientointerno',
                'bocinas': 'BotonBarraBocina',
                'discos duros externos': 'BotonBarraDiscoDuro',
                'enfriamiento': 'BotonBarraEnfiamiento',
                'fuente de alimentacion': 'BotonBarraFuente',
                'gabinetes': 'BotonBarraGabinete',
                'gpu': 'BotonBarraGpu',
                'impresoras': 'BotonBarraImpresoras',
                'laptops': 'BotonBarraLaptops',
                'memoria ram': 'BottonBarraMemoriaRam',
                'monitores': 'BotonBarraMonitores',
                'mouse': 'BotonBarraMouse',
                'motherboard': 'BotonBarraMother',
                'procesadores': 'BotonBarraProcesadores',
                'teclados': 'BotonBarraTeclados',
                'tintas': 'BotonBarrasTintas',
                'usb': 'BarraBotonUsb',
                'webcams': 'BotonBarraWeb'
            };

            const sectionId = sections[searchTerm.toLowerCase()];
            if (sectionId) {
                const button = document.getElementById(sectionId);
                if (button) {
                    button.click();
                    const section = document.getElementById(`aqui${searchTerm.replace(/ /g, '')}`);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        }
    }
}

insertHeader();
window.onload = actualizarNavBar();




