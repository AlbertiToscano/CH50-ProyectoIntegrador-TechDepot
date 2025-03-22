


const insertFooter = ()=>{
    const header = document.getElementById("footer");
    header.innerHTML = `
<!-- Pie de página -->
<footer class="text-center py-3 mt-0 footer">
  <p>&copy;2025 por TechDepot. Todos los derechos reservados</p>
  <nav>
      <a href="/src/pages/terminosCondiciones/terminosC.html">Términos y condiciones</a> | <a href="/src/pages/avisoPrivacidad/avisoPrivacidad.html">Aviso de privacidad</a>
  </nav>
</footer>
    
    `;
}

insertFooter();