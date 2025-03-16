document.getElementById("loginMain").addEventListener("submit", function(event){
    event.preventDefault();
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
 
    //Credenciales de administrador
    const correoAdministrador = "admintechdepot@gmail.com";
    const contraseñaAdministrador = "TechAdmin";

    //Funcion para verificar las credenciales
    if(correo === correoAdministrador && contraseña === contraseñaAdministrador){
        alert("Bienvenido a la admistración de TechDepot"); //Mensaje de inicio de sesion correcto
        window.location.href = "/src/pages/agregarProductos/agregarP.html"; //Redirecciona a la pagina de agregar productos
    } else {
        document.getElementById('error-inicio').classList.add('error-activo'); //Muestra mensaje de error
    };
    setTimeout(() => {
        document.getElementById('error-inicio').classList.remove('error-activo');
    }, 3000); //Borra el mensaje de error en 3 segundos
});