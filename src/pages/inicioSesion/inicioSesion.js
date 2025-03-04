document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del formulario
    const form = document.querySelector('form');
    const correoInput = document.getElementById('correo');
    const contraseñaInput = document.getElementById('contraseña');
    const errorCorreo = document.getElementById('error-correo');
    const errorContraseña = document.getElementById('error-contraseña');

    // Datos de usuario de prueba (almacenados en localStorage)
    const usuarios = [
        { correo: 'techdepot@gmail.com', contraseña: 'TechDepot123' }
    ];

    // Guardar datos de prueba en localStorage si no existen
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    // Evento para enviar el formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar envío del formulario

        console.log('Correo ingresado:', correoInput.value);
        console.log('Contraseña ingresada:', contraseñaInput.value);

        // Validar campos
        const esCorreoValido = validarCorreo(correoInput.value);
        const esContraseñaValida = validarContraseña(contraseñaInput.value);

        if (esCorreoValido && esContraseñaValida) {
            // Verificar credenciales
            const usuarios = JSON.parse(localStorage.getItem('usuarios'));
            const usuario = usuarios.find(
                (user) => user.correo === correoInput.value && user.contraseña === contraseñaInput.value
            );

            if (usuario) {
                alert('Inicio de sesión exitoso.');
                window.location.href = 'https://www.google.com'; // Redirigir a la página de inicio
            } else {
                alert('Correo electrónico o contraseña incorrectos.');
            }
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });

    // Validar correo en tiempo real
    correoInput.addEventListener('input', function () {
        if (!correoInput.value.trim()) {
            mostrarError(correoInput, errorCorreo, 'El correo electrónico es requerido.');
        } else if (!validarCorreo(correoInput.value)) {
            mostrarError(correoInput, errorCorreo, 'Formato de correo electrónico no válido.');
        } else {
            ocultarError(correoInput, errorCorreo);
        }
    });

    // Validar contraseña en tiempo real
    contraseñaInput.addEventListener('input', function () {
        if (!contraseñaInput.value.trim()) {
            mostrarError(contraseñaInput, errorContraseña, 'La contraseña es requerida.');
        } else if (contraseñaInput.value.length < 8) {
            mostrarError(contraseñaInput, errorContraseña, 'La contraseña debe tener al menos 8 caracteres.');
        } else {
            ocultarError(contraseñaInput, errorContraseña);
        }
    });

    // Función para mostrar errores y aplicar estilos
    function mostrarError(input, errorElement, mensaje) {
        errorElement.textContent = mensaje;
        errorElement.classList.add('error-activo');
        input.classList.remove('campo-valido');
        input.classList.add('campo-invalido');
    }

    // Función para ocultar errores y aplicar estilos
    function ocultarError(input, errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('error-activo');
        input.classList.remove('campo-invalido');
        input.classList.add('campo-valido');
    }

    // Función para validar el formato del correo electrónico
    function validarCorreo(correo) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(correo).toLowerCase());
    }

    // Función para validar la contraseña
    function validarContraseña(contraseña) {
        return contraseña.length >= 8;
    }
});