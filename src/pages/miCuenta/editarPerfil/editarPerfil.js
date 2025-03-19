

const usuario = JSON.parse(localStorage.getItem("usuarios"));


const nombre = usuario.map(usuario=>usuario.datosUsuario.nombre)
const email = usuario.map( usuario => usuario.datosUsuario.correo); 
const telefono = usuario.map( usuario => usuario.datosUsuario.telefono); 



// Al enviar el formulario, guardar los cambios en localStorage y redirigir a "miCuenta"


function actualizarUsuario( nuevoNombre, nuevoCorreo, nuevoTelefono) {
    
    let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioActivo = nombre[0]
    
    let usuario = usuariosStorage.find(usuario => usuario.datosUsuario.nombre === usuarioActivo);

    // Verificar si el usuario fue encontrado
    if (usuario) {
        // Actualizar las propiedades del usuario
        usuario.datosUsuario.nombre = nuevoNombre;
        usuario.datosUsuario.correo = nuevoCorreo;
        usuario.datosUsuario.telefono = nuevoTelefono;

        // Guardar el arreglo actualizado en el localStorage
        console.log(usuariosStorage);
        localStorage.setItem("usuarios", JSON.stringify(usuariosStorage));

        alert("Perfil actualizado exitosamente");
        window.location.href = "src/pages/miCuenta/miCuenta.html";
    } else {
        console.log("Usuario no encontrado.");
    }
}

document.getElementById("cambios").addEventListener("click", () =>  {
    const nuevoNombre = document.getElementById("nombre-nuevo").value;
    const nuevoCorreo = document.getElementById("correo-nuevo").value;
    const nuevoTelefono = document.getElementById("telefono-nuevo").value;
    actualizarUsuario(nuevoNombre,nuevoCorreo,nuevoTelefono);
});



