    // Obtener los datos del usuario del localStorage
    function cargarDatosUsuario() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        // Mostrar los datos en la página
        document.getElementById('nombre-usuario').textContent = usuario.nombre;
        document.getElementById('email-usuario').textContent = usuario.email;
        document.getElementById('telefono-usuario').textContent = usuario.telefono;
    } else {
        // Si no hay usuario logueado, redirigir al login
        alert('No has iniciado sesión');
        window.location.href = 'login.html';
    }
    };

// Llamar a la función cuando la página cargue
window.onload = cargarDatosUsuario;