// Función para verificar el inicio de sesión
document.getElementById("formInicio").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const correo = document.getElementById("correo").value;
    const contrasenia = document.getElementById("contraseña").value;
   
     traerUsuarios(`http://localhost:8080/api/v1/users/email?email=${correo}`,contrasenia);
    });
    const traerUsuarios = async (url,contrasenia) => {
        try {
            const response = await fetch(url);
            const usuario = await response.json();
           
            if (usuario.password === contrasenia) {
                alert("Inicio de sesión exitoso:");
                window.location.href = "/index.html"
                localStorage.setItem("sesionIniciada" , "true");
            } else {
                console.log("Contraseña incorrecta");
            }
        
        } catch (error) {
            console.error("Error al traer usuarios:", error);
        }
    };