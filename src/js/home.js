
    function cambiarEstado(){
      let boton= document.getElementById ("botónExploraAhora");
      boton.classList.toggle ("activo");
      boton.classList.toggle ("inactivo");
    }
    const imagenesAnimadas = document.querySelectorAll('.imagen-animada');

    imagenesAnimadas.forEach(imagen => {
      imagen.addEventListener('mouseover', () => {
        imagen.style.transform = 'scale(1.5)'; // Aumenta el tamaño al 110%
        imagen.style.transition = 'transform 0.3s ease'; // Transición suave
      });
    
      imagen.addEventListener('mouseout', () => {
        imagen.style.transform = 'scale(1)'; // Restablece el tamaño original
        imagen.style.transition = 'transform 0.3s ease'; // Transición suave
      });
    });

//BotónExploraAhora
function irAPagina() {
  window.location.href = "pages/contacto.html"; // Cambia por la URL deseada
}
  
//testimonios
const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination:{
    el:'.js-testimonials-pagination',
    clickable: true
  },
  breakpoints:{
    767:{
      slidesPerView: 1,
    },
  },
});