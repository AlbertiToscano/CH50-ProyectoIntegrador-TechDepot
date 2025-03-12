/* 
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (usuario) {
      // Asigna los datos a los inputs usando .value
      let nombre = usuario.datosUsuario.email; 
      document.getElementById('nombre-usuario').setAttribute('value', nombre);

      let email = usuario.datosUsuario.email; 
      document.getElementById('email-usuario').setAttribute('value', email);

      let telefono = usuario.datosUsuario.email; 
      document.getElementById('telefono-usuario').setAttribute('value', telefono);
    } else {
      // Si no hay usuario logueado, redirige al login
      alert("No has iniciado sesión");
      window.location.href = "login.html"; // Ajusta la ruta si es necesario
    } */


// Llamar a la función cuando la página cargue



function actualizarInfoUsuario() {
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
      
          
  }

 
}
window.onload = actualizarInfoUsuario();