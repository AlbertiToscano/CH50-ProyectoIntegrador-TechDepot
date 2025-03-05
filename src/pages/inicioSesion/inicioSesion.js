
// Función para verificar el inicio de sesión
document.getElementById("formInicio").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    //Obtener objeto del local
    const usuariosLocal = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuariosLocal);

//Buscar y validar si la contrase;a y correo existen
    const usuarioEncontrado = usuariosLocal.find( usuario => correo === usuario.datosUsuario.correo && contraseña === usuario.datosUsuario.contraseña)
   
    //Si encuentra un correo y contra validos inicia sesion y manda al home
    if (usuarioEncontrado) {
        alert("Inicio de sesión correcto");
        window.location.href = "/index.html"; // Redirigir a la página de inicio
    } else {
        document.getElementById('error-inicio').classList.add('error-activo');//Si no sale aviso de error
    };

    setTimeout(() => {
        document.getElementById('error-inicio').classList.remove('error-activo');
    }, 3000); //Borra el mensaje en 3 segundos
});