   // Obtener y mostrar los datos del usuario desde el localStorage
window.addEventListener("load", () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (usuario) {
      // Asigna los datos a los inputs usando .value
      document.getElementById("nombre-usuario").value = usuario.nombre;
      document.getElementById("correo-usuario").value = usuario.email;
      document.getElementById("telefono-usuario").value = usuario.telefono;
    } else {
      // Si no hay usuario logueado, redirige al login
      alert("No has iniciado sesión");
      window.location.href = "login.html"; // Ajusta la ruta si es necesario
    }
    });

// Llamar a la función cuando la página cargue
window.onload = cargarDatosUsuario();
