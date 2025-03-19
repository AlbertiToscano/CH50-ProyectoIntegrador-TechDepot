import { iraACompras } from "./productosObj.js";

/* valriables Globales*/
let productosmemoria;
//let productosComprados=","

//localStorage.setItem("productosComprados","");



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
let superString;
     
    const cards = info.map( ( cadaobjeto )=> {
       descripcionCorta= acondicionarCadaObjeto( cadaobjeto );
    console.log(cadaobjeto);
      return productCard(cadaobjeto,descripcionCorta,superString);
    });
//regreso de un arreglo de tarjetas
   return cards.join("");

}
//Acondicionar informacion de tarjeta
export function acondicionarCadaObjeto(cadaobjeto){
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
export function expandirDescripcionProducto(cadaobjetoid){
   
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
export function contraerDescripcionProducto(cadaobjetoid){
   let IdescripcionE=document.getElementById("IDescripcionExpandida"+cadaobjetoid);
   let IdescripcionC=document.getElementById("IDescripcionContraida"+cadaobjetoid);
   let IdescripcionB=document.getElementById("IDescripcionContraidabase"+cadaobjetoid);

   // console.log(cadaobjetoid);
    //quitar descripcion larga
IdescripcionE.classList.add("descripcionExpandida");  
IdescripcionC.classList.remove("descripcionCorta"); 
IdescripcionB.classList.add("descripcionCortabase"); 

}
//funcion para alidear los acordeonesn 

/* temporal almacenamientointerno*/
document.getElementById("BotonBarraalmacenamientointerno").addEventListener("click",  () => {
    
    fes('componentes','almacenamientoInterno');
botonAgregarCarrito('almacenamientoInterno');
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
 botonAgregarCarrito('bocinas');
    
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
 botonAgregarCarrito('discoDuroExterno');
    
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
   botonAgregarCarrito('enfriamiento');
    
    });
/* temporal */
document.getElementById("BotonBarraFuente").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiFuenteDeAli");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('componentes','fuenteDeAlimentacion');
   botonAgregarCarrito('fuenteDeAlimentacion');
    
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
 botonAgregarCarrito('gabinete');
    
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
   botonAgregarCarrito('GPU');
    
    
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
 botonAgregarCarrito('impresoras');
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
   botonAgregarCarrito('laptops');
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
 botonAgregarCarrito('memoriaRAM');
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

    botonAgregarCarrito('monitores');
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

 botonAgregarCarrito('mouse');
   
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
   
  botonAgregarCarrito('motherboard');


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
   botonAgregarCarrito('procesadores');
    
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
 botonAgregarCarrito('teclados');
   
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
botonAgregarCarrito('tintas');

    
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
     
  botonAgregarCarrito('usb');
    
    });
//funcion
/* temporal web*/
document.getElementById("BotonBarraWeb").addEventListener("click",  () => {
    let barraSelecionada = document.getElementById("aquiwebcams");
    
    barraSelecionada.scrollIntoView({
        behavior: "smooth",  // Desplazamiento suave
        block: "start"      // Asegura que el contenido se vea en la parte superior
    });
    fes('perifericos','webcams');//llamado a la funcion que genera targetas

  /* Boton agregar a carrito */
 botonAgregarCarrito("webcams");
  

    });

    /* Funcion para el boton carrito */



export function botonAgregarCarrito(categoria){
        /* conteo de elementos en carrito  */
        
        /* Boton agregar a carrito  */
      let espaciodetarjetas = document.getElementById(categoria);
      espaciodetarjetas.addEventListener("click",function(evento){
          evento.preventDefault();
               
           if(evento.target.id==="addItem"){
            //console.log(evento.target.dataset.producto);
            let productoCompra=evento.target.dataset.producto;
  
            if(localStorage.getItem("productosComprados")){
              productosmemoria =localStorage.getItem("productosComprados");
           
              let  productosComprados =productosmemoria+","+productoCompra;
               console.log( productosComprados);
                localStorage.setItem("productosComprados",productosComprados);
              // console.log( productosComprados);
             let confirmacion = window.confirm('Elemento agregado a su carrito. Usted tiene ' + sumaCarrito() + ' Items. ¿Desea ir al carrito de compras?');
             if(confirmacion){
                iraACompras();
             }
            if(confirmacion){
               window.location.href="/src/pages/carrito/carrito.html";
             }
             
             //document.getElementById("flycar").innerText=sumaCarrito();
            }else{
              localStorage.setItem("productosComprados",productoCompra);
              let confirmacion = window.confirm('Elemento agregado a su carrito. Usted tiene ' + sumaCarrito() + ' Items. ¿Desea ir al carrito de compras?');
            }
          }     
      });
      
    }

    


 export function sumaCarrito(){
        let arrproductos=[];
        let conteo;
            if(localStorage.getItem("productosComprados")){
                let productosmemorias =localStorage.getItem("productosComprados");
                arrproductos= productosmemorias.split(",");
                 conteo=arrproductos.length;
                localStorage.setItem("conteo",conteo);
                
            }else{
                 
                localStorage.setItem("conteo",conteo);
            }
       return conteo;
       }
    
//funcion renderizar informacion de tarjeta en pagiuna individual
export function mostrarInfoTarjeta(id,titulo,precio,imagen,descripcion,categoria,caracteristicas){
 
 //localStorage.clear();
 console.log(titulo);
 console.log(precio);
 console.log(imagen);
 console.log(descripcion);
 //productosglobal
 //console.log(window.productosglobal);
 console.log(caracteristicas);
 let regexid=/pro/;
 let prueba= id;

 let regexidalm=/alm/;
 if(regexid.test(prueba) || regexidalm.test(prueba)){
   
   localStorage.setItem("Modelodetarjetagráfica","AMD Radeon Graphics");
   localStorage.setItem("Recuentodenucleosdetarjetagráfica","2");
   localStorage.setItem("Frecuenciadetarjetagráfica",2200);
   localStorage.setItem("USB","Sí");
 }else {
    localStorage.setItem("Modelodetarjetagráfica","No aplica");
    localStorage.setItem("Recuentodenucleosdetarjetagráfica","No aplica");
    localStorage.setItem("Frecuenciadetarjetagráfica","Noaplica");
    localStorage.setItem("USB","Sí");
 }
 localStorage.setItem("titulo",titulo);
 localStorage.setItem("precio",precio);
 localStorage.setItem("imagen",imagen);
 localStorage.setItem("descripcion",descripcion);
 localStorage.setItem("categoria",categoria);
 localStorage.setItem("caracteristicas",caracteristicas);
 localStorage.setItem("idProductoPaginaProductoTarjeta",id);

 window.location.href="./tarjeta.html";

}

/*  <a href="/src/pages/detallesProductos/detallesProductos.html"> */

const productCard=(cadaobjeto,descripcionCorta)=>{
const card= `<div class="card">
                            <a >
                            <img onclick="mostrarInfoTarjeta('${cadaobjeto.id}','${cadaobjeto.titulo}','${cadaobjeto.precio}','${cadaobjeto.imagen}','${cadaobjeto.descripcion}','${cadaobjeto.categoria=== undefined ?"varias":cadaobjeto.categoria.join()}','${cadaobjeto.caracteristicas=== undefined ?"consulte ficha de fabricante":Object.values(cadaobjeto.caracteristicas)}')" src="${cadaobjeto.imagen}" class="card-img-top" id="IdImagen${cadaobjeto.id}" alt="Imagen de producto TeachDepot">
                            </a>
                        
                            <div class="card-body">
                               <div >
                                        <h5 class="card-title">${cadaobjeto.titulo}</h5>
                                            <div id="contenedorDescripcion">
                                            <p class="card-text " id="IDescripcionContraidabase${cadaobjeto.id}">${descripcionCorta}</p>
                                            <p class="card-text descripcionExpandida" id="IDescripcionExpandida${cadaobjeto.id}">${cadaobjeto.descripcion}</p>
                                            <p class="card-text descripcionCorta" id="IDescripcionContraida${cadaobjeto.id}">${descripcionCorta}</p>
                                            </div>
                                        
                                        <i class="bi bi-arrow-down-square vabajo" onclick="expandirDescripcionProducto('${cadaobjeto.id}')" ></i>
                                        <i class="bi bi-arrow-up-square varriba" onclick="contraerDescripcionProducto('${cadaobjeto.id}')"></i>
                                </div>
                                    <div>
                                    
                                    </div>
                              
                                              
                                                <div class="d-flex justify-content-between align-items-center cardEstrellas">
                                                        <div >
                                                            <i class="bi bi-star-fill starr"  id="estrella1${cadaobjeto.id}" onclick="funest1('${cadaobjeto.id}')" ></i>
                                                            <i class="bi bi-star-fill starr"  id="estrella2${cadaobjeto.id}" onclick="funest2('${cadaobjeto.id}')"></i>
                                                            <i class="bi bi-star-fill starr"  id="estrella3${cadaobjeto.id}" onclick="funest3('${cadaobjeto.id}')"></i>
                                                            <i class="bi bi-star-fill starr"  id="estrella4${cadaobjeto.id}" onclick="funest4('${cadaobjeto.id}')"></i>
                                                            <i class="bi bi-star-fill starr"  id="estrella5${cadaobjeto.id}" onclick="funest5('${cadaobjeto.id}')"></i>
                                                             <small class="textestrella">(3.5)</small>
                                                            
                                                        </div>
                                                </div>
                                
                                   
                                                <div  class="d-flex justify-content-between align-items-center contPrice">
                                                        <span class="h5 mb-0 card-price">$${cadaobjeto.precio}</span>
                                                            <div>
                                                            
                                                        

 <a type="button" id="addItem" data-producto="${cadaobjeto.id}" class="btn">Añadir al carrito</a> 

                                                            </div>
                                                 </div>
                                         
                        </div>
          
          
          
                        </div>`;
return card;

};
/* Colocar la Tarjeta de reseña del usuario*/

const resenaCard=(texto)=>{
   const card=` 
      <!-- aqui empiueza el bloque para mostrar la reseña del cliente -->
         <div class="recuadroAtras">
          <div class="reseña">
            <i class="icono bi bi-person-circle" >Usuario</i>
            <div class="estrellas">
              <i class="bi bi-star-fill text-warning "></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-half text-warning"></i>
              <i class="bi bi-star text-warning"></i>
              <small class="textestrella">(3.5)</small>
              
                        </div><!-- ESTRELLAS -->
            
                   <p class="textReseña">${texto}</p>
                 <div class="contenedorBoton" ><button id="idBotonVerMasComentario">Ver más</button></div>

          </div><!-- RESEÑA -->
         </div>`

return card;
};

/* Capturar la reseña del usuario */
document.getElementById("BotonEnviarComentario").addEventListener("click",  () => {
   // let colocarReseña = document.getElementById("colocarTarjetaReseña");
  let texto=document.getElementById("textResenaUsuario").value;
    document.getElementById("colocarTarjetaResena").innerHTML+=resenaCard(texto);
    document.getElementById("textResenaUsuario").value = "";
    
    });

/* Codigo para estreellas */


 function funest1(cadaobjetoid){
    let start1=document.getElementById("estrella1"+cadaobjetoid);
    let start2=document.getElementById("estrella2"+cadaobjetoid);
    let start3=document.getElementById("estrella3"+cadaobjetoid);
    let start4=document.getElementById("estrella4"+cadaobjetoid);
    let start5=document.getElementById("estrella5"+cadaobjetoid);
    let score;
    
    
    if(start1.classList.contains("checked")){
        start1.classList.remove("checked"); 
        start2.classList.remove("checked"); 
        start3.classList.remove("checked"); 
        start4.classList.remove("checked"); 
        start5.classList.remove("checked"); 
     } else{
        let A=false;
        let B=false;
        let C=false;
        
        B=(~A+B) && ~C;
        C=(A+C) && ~B;
        A=(B+A) && ~C;
        
        if(A){
            start1.classList.add("checked");  
            start2.classList.remove("checked");  
            start3.classList.remove("checked");  
            start4.classList.remove("checked");  
            start5.classList.remove("checked"); 
    
            if(localStorage.getItem(cadaobjetoid)){
                score= localStorage.getItem(cadaobjetoid);
                score +="1";
                localStorage.setItem(cadaobjetoid,score);
    
               // calculoModa(cadaobjetoid,score);
            }else{
                score ="1";
                localStorage.setItem(cadaobjetoid,score);
            }
            
        }}
        /* let puntuacion=calculoModa(score);
        console.log("ww1111111ww");
        console.log(cadaobjetoid);
        console.log(cadaobjetoid,puntuacion);
        console.log("w1111111111w"); */
    }

  function funest2(cadaobjetoid){
    let start1=document.getElementById("estrella1"+cadaobjetoid);
    let start2=document.getElementById("estrella2"+cadaobjetoid);
    let start3=document.getElementById("estrella3"+cadaobjetoid);
    let start4=document.getElementById("estrella4"+cadaobjetoid);
    let start5=document.getElementById("estrella5"+cadaobjetoid);

    let score;
    
    if(start2.classList.contains("checked")){
        start2.classList.remove("checked"); 
        start3.classList.remove("checked"); 
        start4.classList.remove("checked"); 
        start5.classList.remove("checked"); 
     } else{
        let A=false;
        let B=false;
        let C=false;
        
        B=(~A+B) && ~C;
        C=(A+C) && ~B;
        A=(B+A) && ~C;
        
        if(A){
            start1.classList.add("checked");  
            start2.classList.add("checked");  
            start3.classList.remove("checked");  
            start4.classList.remove("checked");  
            start5.classList.remove("checked");  

            if(localStorage.getItem(cadaobjetoid)){
                score= localStorage.getItem(cadaobjetoid);
                score +="2";
                localStorage.setItem(cadaobjetoid,score);
               // calculoModa(cadaobjetoid,score);
            }else{
                score ="2";
                localStorage.setItem(cadaobjetoid,score);
            }
        }}
       /*  let puntuacion=calculoModa(score);
        console.log("w2222222");
        console.log(cadaobjetoid);
        console.log(cadaobjetoid,puntuacion);
        console.log("ww2222222w");*/
}
     

 function funest3(cadaobjetoid){
 
    let start1=document.getElementById("estrella1"+cadaobjetoid);
    let start2=document.getElementById("estrella2"+cadaobjetoid);
    let start3=document.getElementById("estrella3"+cadaobjetoid);
    let start4=document.getElementById("estrella4"+cadaobjetoid);
    let start5=document.getElementById("estrella5"+cadaobjetoid);
    let score;
    
    if(start3.classList.contains("checked")){
        start1.classList.add("checked"); 
        start2.classList.add("checked"); 
        start3.classList.remove("checked"); 
        start4.classList.remove("checked"); 
        start5.classList.remove("checked"); 
     } else{let A=false;
        let B=false;
        let C=false;
        
        B=(~A+B) && ~C;
        C=(A+C) && ~B;
        A=(B+A) && ~C;
        
        if(A){
            start1.classList.add("checked");  
            start2.classList.add("checked");  
            start3.classList.add("checked");  
            start4.classList.remove("checked");  
            start5.classList.remove("checked"); 
            if(localStorage.getItem(cadaobjetoid)){
                score= localStorage.getItem(cadaobjetoid);
                score +="3";
                localStorage.setItem(cadaobjetoid,score);
              // calculoModa(cadaobjetoid,score);
            }else{
                score ="3";
                localStorage.setItem(cadaobjetoid,score);
            }
        }}
    
    
        /* let puntuacion=calculoModa(score);
        console.log("w333333w");
        console.log(cadaobjetoid);
        console.log(cadaobjetoid,puntuacion);
        console.log("ww33333w");
 */

}


 function funest4(cadaobjetoid){
    
    let start1=document.getElementById("estrella1"+cadaobjetoid);
    let start2=document.getElementById("estrella2"+cadaobjetoid);
    let start3=document.getElementById("estrella3"+cadaobjetoid);
    let start4=document.getElementById("estrella4"+cadaobjetoid);
    let start5=document.getElementById("estrella5"+cadaobjetoid);
    let score;
    
    if(start4.classList.contains("checked")){
        start1.classList.add("checked"); 
        start2.classList.add("checked"); 
        start3.classList.add("checked"); 
        start4.classList.remove("checked"); 
        start5.classList.remove("checked"); 
     } else{
        let A=false;
        let B=false;
        let C=false;
        
        B=(~A+B) && ~C;
        C=(A+C) && ~B;
        A=(B+A) && ~C;
        
        if(A){
            start1.classList.add("checked");  
            start2.classList.add("checked");  
            start3.classList.add("checked");  
            start4.classList.add("checked");  
            start5.classList.remove("checked"); 

            if(localStorage.getItem(cadaobjetoid)){
                score= localStorage.getItem(cadaobjetoid);
                score +="4";
                localStorage.setItem(cadaobjetoid,score);
                
               // calculoModa(cadaobjetoid,score);

            }else{
                score ="4";
                localStorage.setItem(cadaobjetoid,score);
            }
        }
    }
    
      /*   let puntuacion=calculoModa(score);

        console.log("ww444444");
        console.log(cadaobjetoid);
        console.log(cadaobjetoid,puntuacion);
        console.log("www44444444ww");
 */


}


 function funest5(cadaobjetoid){
    let start1=document.getElementById("estrella1"+cadaobjetoid);
    let start2=document.getElementById("estrella2"+cadaobjetoid);
    let start3=document.getElementById("estrella3"+cadaobjetoid);
    let start4=document.getElementById("estrella4"+cadaobjetoid);
    let start5=document.getElementById("estrella5"+cadaobjetoid);
    let score;
    
    
    if(start5.classList.contains("checked")){
        start1.classList.add("checked"); 
        start2.classList.add("checked"); 
        start3.classList.add("checked"); 
        start4.classList.add("checked"); 
        start5.classList.remove("checked"); 

     } else{let A=false;
        let B=false;
        let C=false;
        
        B=(~A+B) && ~C;
        C=(A+C) && ~B;
        A=(B+A) && ~C;
        
        if(A){
            start1.classList.add("checked");  
            start2.classList.add("checked");  
            start3.classList.add("checked");  
            start4.classList.add("checked");  
            start5.classList.add("checked");  

            if(localStorage.getItem(cadaobjetoid)){
                score= localStorage.getItem(cadaobjetoid);
                score +="5";
                localStorage.setItem(cadaobjetoid,score);
               // calculoModa(cadaobjetoid,score);
            }else{
                score ="5";
                localStorage.setItem(cadaobjetoid,score);
            }
        }}
        
       // console.log("wwwwwwwwwwww");
        //console.log(cadaobjetoid);
        //console.log(cadaobjetoid,puntuacion);
        //console.log("wwwwwwwwwwww");

      //  document.getElementById("bloqueEstrellasComentario"+cadaobjetoid).innerHTML=`<small class="text-muted">${puntuacion}</small>`;
}

/* funcion que calcula la moda */
/* 
function calculoModa(cadenaRating){
    let uno=0,dos=0,tres=0,cuatro=0,cinco=0;
    let ar=[];
    
    
    let strCopy = cadenaRating.split("");
    let arrnum =strCopy.map((elemento)=>parseInt(elemento));
    console.log(arrnum);
    
    arrnum.forEach((element) => {
    
    switch(element){
      case 1:
          uno +=1;
          break;
      case 2:   
           dos +=1;
          break;
      case 3:
           tres +=1;
          break;
      case 4:  
           cuatro +=1;
          break;
      case 5:
           cinco +=1;
          break;
    }
      
    });
    ar.push(uno,dos,tres,cuatro,cinco);
   // console.log(ar);
    let maximo=Math.max(...ar);
   //console.log(ar.indexOf(maximo));
     let valorEstrella=ar.indexOf(maximo);
     valorEstrella++;
    return valorEstrella;
   //  localStorage.setItem("E"+cadaobjetoid,valorEstrella);
    
}


 */


   /* Codigo para las estrellas */
/* 
   let estrella =document.querySelectorAll('.starr');

   estrella.forEach(function(starr,index){
       starr.addEventListener('click',function(){
        for (let i=0; i<=index;i++){
           estrella[i].classList.add('checked');
        }
        for (let i=index+1; i<estrella.length;i++){
           estrella[i].classList.remove('checked');
        }
   
       })
   }) */
   

/* dddd */
/* Codigo Para mostrar elementos comprados 

 /*  
  let callback = function (entries) {
   let entradas=entries[0];
        if(entradas.isIntersecting){
            console.log("visible");
        let flycar=document.querySelector("#flycar");
        flycar.classList.remove("fijo");
        flycar.classList.add("fcar");

        }else{
            console.log("invisible");
            flycar.classList.add("fijo");
            flycar.classList.remove("fcar");
        }
    
  };
/* Observador del carrucel para aparecer boton ir a carrito 
  let observer = new IntersectionObserver(callback);
  let carouselBoxplace = document.querySelector("#carouselBoxplace");
  observer.observe(carouselBoxplace);

  //iraACompras();


document.getElementById("#flycar").addEventListener("click",{


});


 */


window.expandirDescripcionProducto = expandirDescripcionProducto;
window.contraerDescripcionProducto = contraerDescripcionProducto;
window.mostrarInfoTarjeta=mostrarInfoTarjeta;
//window.productoComprado=productoComprado;
window.funest1=funest1;
window.funest2=funest2;
window.funest3=funest3;
window.funest4=funest4;
window.funest5=funest5;
//window.calculoModa=calculoModa;
window.sumaCarrito=sumaCarrito;
window.iraACompras=iraACompras;

window.botonAgregarCarrito=botonAgregarCarrito;