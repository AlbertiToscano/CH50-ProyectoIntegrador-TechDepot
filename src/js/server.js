import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// 📌 Ruta al archivo de Términos y Condiciones
const archivoHTML = path.join(__dirname, "../pages/terminosCondiciones/terminosC.html");
const contenidoHTML = fs.readFileSync(archivoHTML, "utf8");

// 📌 Extraer secciones del HTML
const dom = new JSDOM(contenidoHTML);
const articulos = dom.window.document.querySelectorAll("article");

// 📌 Almacenar títulos y contenido en un array
const secciones = Array.from(articulos).map(articulo => ({
    titulo: articulo.querySelector("h2")?.textContent.trim().toLowerCase() || "Sin título",
    contenido: articulo.textContent.trim().toLowerCase(),
}));



// 📌 Función para buscar contenido relevante
const buscarTexto = (pregunta) => {
    const preguntaLimpia = pregunta.toLowerCase().trim();
    let mejorCoincidencia = null;
    let mayorRelevancia = 0;

    for (let seccion of secciones) {
        let coincidencias = 0;
        const contenidoLimpio = seccion.contenido.toLowerCase();
        const tituloLimpio = seccion.titulo.toLowerCase();

        // 🔹 Si la palabra clave está en el título, dar prioridad
        if (preguntaLimpia.includes("garantía") && tituloLimpio.includes("garantía")) {
            return `**${seccion.titulo.toUpperCase()}**\n\n${seccion.contenido}`;
        }

        // 🔹 Contar cuántas palabras clave coinciden en la sección
        preguntaLimpia.split(" ").forEach(palabra => {
            if (contenidoLimpio.includes(palabra)) {
                coincidencias++;
            }
        });

        // 🔹 Verificar si esta sección es más relevante que la anterior
        if (coincidencias > mayorRelevancia) {
            mejorCoincidencia = seccion;
            mayorRelevancia = coincidencias;
        }
    }

    if (!mejorCoincidencia) {
        return "No encontré información exacta en nuestros términos y condiciones.";
    }

    return `**${mejorCoincidencia.titulo.toUpperCase()}**\n\n${mejorCoincidencia.contenido}`;
};









// 📌 Endpoint para búsqueda en términos y condiciones
app.post("/chatbot", (req, res) => {
    try {
        const { mensaje } = req.body;
        const respuesta = buscarTexto(mensaje);
        res.json({ respuesta });
    } catch (error) {
        console.error("Error en búsqueda:", error);
        res.status(500).json({ error: "Error al procesar la solicitud" });
    }
});

// 📌 Iniciar el servidor
app.listen(3000, () => console.log("✅ Servidor corriendo en http://localhost:3000"));
/* console.log("Contenido HTML cargado correctamente:");
console.log(contenidoHTML.substring(0, 500)); // Muestra los primeros 500 caracteres
 */

/* console.log("Artículos extraídos:");
articulos.forEach((articulo, index) => {
    console.log(`Artículo ${index + 1}:`, articulo.querySelector("h2")?.textContent.trim());
}); */

/* console.log("Secciones extraídas correctamente:");
secciones.forEach((seccion, index) => {
    console.log(`Sección ${index + 1}: ${seccion.titulo} - ${seccion.contenido.substring(0, 300)}...\n`);
}); */


