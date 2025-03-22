
export function actualizarNavBar() {
    const sesionIniciada = localStorage.getItem('sesionIniciada');
    const variantesPerfil = document.getElementById("icono-usuario");

    let perfil = "";


    switch (sesionIniciada) {
        case "true":
            perfil = "<button class='btn user-btn dropdown-toggle' type='button' data-bs-toggle='dropdown'> <a href='/src/pages/miCuenta/miCuenta.html' class='nav-link me-3 login-link'> <i class='bi bi-person-circle'></i> miCuenta</a></button><ul class='dropdown-menu'><li><a class='dropdown-item' href='/src/pages/miCuenta/miCuenta.html'>miCuenta</a></li> <li><a class='dropdown-item' href='/src/pages/miCuenta/mis pedidos/mis pedidos.html'>Mis pedidos</a></li> <li><a class='dropdown-item' href='/src/pages/inicioSesionAdmin/inicioSesionAdmin.html'>Administrador</a></li></ul>";
            break;

        default:
            perfil = "<button class='btn user-btn dropdown-toggle' type='button' data-bs-toggle='dropdown'> <a href='#' class='nav-link me-3 login-link'> <i class='bi bi-person-circle'></i> Iniciar Sesión</a></button><ul id='menu-perfil' class='dropdown-menu'><li><a class='dropdown-item' href='/src/pages/inicioSesion/inicioSesion.html'>Iniciar Sesion</a></li> <li><a class='dropdown-item' href='/src/pages/registro/registro.html'>Registrarse</a></li> <li><a class='dropdown-item' href='/src/pages/inicioSesionAdmin/inicioSesionAdmin.html'>Administrador</a></li></ul>";

    }

    variantesPerfil.innerHTML = perfil;


}