
function cerrarSesion(){
  const mensajeConfirmacion = confirm("Estas seguro de cerrar sesion?");
  if (mensajeConfirmacion){
  
    alert("Sesion Cerrada correctamente.");
    localStorage.removeItem("sesionIniciada"); 
    window.location.href = "/index.html";
  }else{}
  
  }
  
  
  document.getElementById("btn-cerrar").addEventListener("click", function(event) {
    event.preventDefault(); 
    cerrarSesion()});



/* export function actualizarInfoUsuario() {
  const sesionIniciada = localStorage.getItem('sesionIniciada');
  const usuario = JSON.parse(localStorage.getItem("usuarios"));
  const nombre = usuario.map(usuario=>usuario.datosUsuario.nombre)
  const email = usuario.map( usuario => usuario.datosUsuario.correo); 
  const telefono = usuario.map( usuario => usuario.datosUsuario.telefono); 

  switch (sesionIniciada) {
      case "true":
        document.getElementById('nombre-usuario').setAttribute('value', `    ${nombre}`);
        document.getElementById('correo-usuario').setAttribute('value',`    ${ email}`);
        document.getElementById('telefono-usuario').setAttribute('value',`    ${ telefono}`);
        
          break;

      default:
        document.getElementById('nombre-usuario').setAttribute('value', `    `);
        document.getElementById('correo-usuario').setAttribute('value',`  ` ); 
        document.getElementById('telefono-usuario').setAttribute('value',`   `);
          
  }

 
} */

/* window.onload = actualizarInfoUsuario(); */

document.getElementById("cambiar-foto").addEventListener("click", function () {
  document.getElementById("file-input").click(); // Activa la selección de archivos
});

document.getElementById("file-input").addEventListener("change", function (event) {
  const file = event.target.files[0]; // Obtener el archivo seleccionado
  const usuario = JSON.parse(localStorage.getItem("usuarios"));
  

  if (file) {
    const reader = new FileReader(); // Crear un lector de archivos
    reader.onload = function (e) {
      document.getElementById("imagen-usuario").src = e.target.result; // Cambiar la imagen
      
      const nombre = document.getElementById("nombre-usuario").value.trim();
      
  let usuarioImagen = usuario.find(usuario => usuario.datosUsuario.nombre === nombre);
  
  // Verifica si el producto fue encontrado
  if (usuarioImagen ) {
    // Agrega la propiedad "imagen" con la URL de la imagen
    usuarioImagen .imagen = e.target.result;
    localStorage.setItem("usuarios", JSON.stringify(usuario));
  } else {
    console.log("Usuario no encontrado");
  }
    };
    reader.readAsDataURL(file); // Leer la imagen como URL
  }
  
});

// Cargar la imagen guardada en localStorage al abrir la página
/* window.addEventListener("load", function () {
  const usuario = JSON.parse(localStorage.getItem("usuarios"));
  const imagenGuardada = usuario.map( usuario => usuario.imagen);
  if (imagenGuardada) {
    document.getElementById("imagen-usuario").src = imagenGuardada;
    
  
  }
}); */



 
