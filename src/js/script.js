document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-chatbot");
    const inputMensaje = document.getElementById("mensaje");
    const resultadoDiv = document.getElementById("resultado");

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();
        const mensaje = inputMensaje.value.trim();
        if (!mensaje) return;

        try {
            const response = await fetch("http://localhost:3000/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mensaje }),
            });

            const data = await response.json();
            resultadoDiv.innerHTML = `<p>${data.respuesta}</p>`;
        } catch (error) {
            resultadoDiv.innerHTML = `<p style="color:red;">Error al obtener respuesta.</p>`;
        }
    });
});
//console.log("El script.js se está ejecutando correctamente");
