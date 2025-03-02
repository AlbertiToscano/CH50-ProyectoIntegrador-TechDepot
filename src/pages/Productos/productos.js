
/* Función que hace la peticion a los archivos Json  */
export function fes(carpeta,iddelHTML){
   
    //fetch("/public/json/componentes/almacenamientoInterno.json")
    fetch("/json/"+carpeta+"/"+iddelHTML+".json")
    .then((response)=>response.json())
    .then((info)=>{
        document.getElementById(iddelHTML).innerHTML=separarinfoObjetos(info);
    })
.catch((error)=>console.log(error));
} 

/* funcion que separa el array de objetos y envia uno a la vez */
const separarinfoObjetos = (info)=>{
let descripcionCorta;
let flechaAbajo;
let flechaArriba;
     
    // const cards = userArray.map( (element, index , array )=>  );
    const cards = info.map( ( cadaobjeto )=> {
       descripcionCorta= acondicionarCadaObjeto( cadaobjeto );

      


      return productCard(cadaobjeto,descripcionCorta);
    });
//regreso de un arreglo de tarjetas
   return cards.join("");

}
//Acondicionar informacion de tarjeta
function acondicionarCadaObjeto(cadaobjeto){
 //console.log(cadaobjeto.descripcion.length);
 let descripcionCorta="";
 if(cadaobjeto.descripcion.length>100){
   for(let i=0;i<=50;i++){
    descripcionCorta+=cadaobjeto.descripcion[i];
   }
   return descripcionCorta=(descripcionCorta+ "...")
}  
}

//Mostrar Descripcion completa de producto al presionar el boton vabajo
function expandirDescripcionProducto(cadaobjetoid){
   
    let IdescripcionE=document.getElementById("IDescripcionExpandida"+cadaobjetoid);
    let IdescripcionC=document.getElementById("IDescripcionContraida"+cadaobjetoid);
    let IdescripcionB=document.getElementById("IDescripcionContraidabase"+cadaobjetoid);
    //console.log("IDescripcionExpandida"+cadaobjeto);
    //quitar descripcion corta
    IdescripcionE.classList.remove("descripcionExpandida");  
    IdescripcionC.classList.add("descripcionCorta"); 
    IdescripcionB.classList.add("descripcionCortabase"); 

}

//Mostrar Descripcion corta de producto al presionar el boton varriba
function contraerDescripcionProducto(cadaobjetoid){
   let IdescripcionE=document.getElementById("IDescripcionExpandida"+cadaobjetoid);
   let IdescripcionC=document.getElementById("IDescripcionContraida"+cadaobjetoid);
   let IdescripcionB=document.getElementById("IDescripcionContraidabase"+cadaobjetoid);

    console.log(cadaobjetoid);
    //quitar descripcion larga
IdescripcionE.classList.add("descripcionExpandida");  
IdescripcionC.classList.remove("descripcionCorta"); 
IdescripcionB.classList.add("descripcionCortabase"); 

}
//funcion para alidear los acordeonesn 

/* temporal almacenamientointerno*/
document.getElementById("BotonBarraalmacenamientointerno").addEventListener("click",  () => {
    
    fes('componentes','almacenamientoInterno');
    
    
    });
/* temporal */



/* temporal bocinas*/
document.getElementById("BotonBarraBocina").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiBocina");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','bocinas');
    
    
    });
/* temporal */

/* temporal discosdurosExternos*/
document.getElementById("BotonBarraDiscoDuro").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiDiscoDuroExt");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','discoDuroExterno');
    
    
    });
/* temporal */

/* temporal Enfriamiento*/
document.getElementById("BotonBarraEnfiamiento").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiEnfriamiento");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','enfriamiento');
    
    
    });
/* temporal */
document.getElementById("BotonBarraFuente").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiFuenteDeAli");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','fuenteDeAlimentacion');
    
    
    });
/* temporal */

/* temporal */
document.getElementById("BotonBarraGabinete").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiGabinete");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes', 'gabinete');
    
    
    });
/* temporal */
/* temporal Gpu */
document.getElementById("BotonBarraGpu").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiGpu");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','GPU');
    
    
    });
/* temporal */

/* temporal Impresoras*/
document.getElementById("BotonBarraImpresoras").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiImpresora");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('oficina','impresoras');
    });
//funcion
/* temporal laptops*/
document.getElementById("BotonBarraLaptops").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquilaptops");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('oficina','laptops');
    });
//funcion

/* temporal ram*/
document.getElementById("BottonBarraMemoriaRam").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquimemoriaRAM");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','memoriaRAM');
    });
//funcion
/* temporal Monitores*/
document.getElementById("BotonBarraMonitores").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquimonitores");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','monitores');
    });
//funcion
/* temporal Mouse*/
document.getElementById("BotonBarraMouse").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquimouse");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','mouse');
    });
//funcion
/* temporal MotherBoard*/
document.getElementById("BotonBarraMother").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquimotherboard");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','motherboard');
    });
//funcion
/* temporal Procesadores*/
document.getElementById("BotonBarraProcesadores").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiprocesadores");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','procesadores');
    });
//funcion
/* temporal Teclados*/
document.getElementById("BotonBarraTeclados").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiteclados");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','teclados');
    });
//funcion
/* temporal Tintas*/
document.getElementById("BotonBarrasTintas").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquitintas");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('oficina','tintas');
    });
//funcion
/* temporal usb*/
document.getElementById("BarraBotonUsb").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiusb");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','usb');
    });
//funcion
/* temporal web*/
document.getElementById("BotonBarraWeb").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiwebcams");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','webcams');
    });
//funcion



/* LLenar las tarjetas con los datos */

const productCard=(cadaobjeto,descripcionCorta)=>{
const card= `<div class="card" style="width: 18rem;">
                            <img src="${cadaobjeto.imagen}" class="card-img-top" alt="Imagen de producto TeachDepot">
                            <div class="card-body">
                               <div>
                                <h5 class="card-title">${cadaobjeto.titulo}</h5>
                                <div id="contenedorDescripcion">
                                <p class="card-text " id="IDescripcionContraidabase${cadaobjeto.id}">${descripcionCorta}</p>
                                <p class="card-text descripcionExpandida" id="IDescripcionExpandida${cadaobjeto.id}">${cadaobjeto.descripcion}</p>
                                <p class="card-text descripcionCorta" id="IDescripcionContraida${cadaobjeto.id}">${descripcionCorta}</p>
                                </div>
                                
                                <i class="bi bi-arrow-down-square vabajo" onclick="expandirDescripcionProducto('${cadaobjeto.id}')" ></i>
                                <i class="bi bi-arrow-up-square varriba" onclick="contraerDescripcionProducto('${cadaobjeto.id}')"></i>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-half text-warning"></i>
                                        <i class="bi bi-star text-warning"></i>
                                        <small class="text-muted">(3.5)</small>
                                    </div>
                                </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="h5 mb-0 card-price">${cadaobjeto.precio}</span>
                                        <div>
                                            <a href="#" class="btn">Añadir al carrito</a>
                                        </div>
                                    </div>
                            </div>
                        </div>`;
return card;

};


//window.fes = fes;