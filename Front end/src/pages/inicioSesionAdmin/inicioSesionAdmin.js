
// Función para verificar el inicio de sesión
document.getElementById("loginMain").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const correo = document.getElementById("correo").value;
    const contrasenia = document.getElementById("contraseña").value;
   

     traerUsuarios(`http://54.193.93.101:8080/api/v1/users/email?email=${correo}`,contrasenia);

    });
    const traerUsuarios = async (url,contrasenia) => {
        try {
            const response = await fetch(url);
            const usuario = await response.json();
            const rolUsuario = usuario.role.id
           
            if (usuario.password === contrasenia && rolUsuario === 1 ) {
                alert("Inicio de sesión exitoso:");
                alert("Bienvenido a la admistración de TechDepot"); //Mensaje de inicio de sesion correcto
                window.location.href = "/src/pages/agregarProductos/agregarP.html"; 
            } else {
                document.getElementById('error-inicio').classList.add('error-activo'); //Muestra mensaje de error
                setTimeout(() => {
                    document.getElementById('error-inicio').classList.remove('error-activo');
                }, 3000); //Borra el mensaje de error en 3 segundos
            }
        
        } catch (error) {
            console.error("Error al traer usuarios:", error);
        }
    };