const argumentos=[
{
    idBotonAcordeon:"BotonBarraalmacenamientointerno",
    idLugarTarjeta:"almacenamientoInterno",
    ubicacionCarpeta:"componentes"
},
{
    idBotonAcordeon:"BotonBarraBocina",
    idLugarTarjeta:"bocinas",
    ubicacionCarpeta:"perifericos"
},
{
    idBotonAcordeon:"BotonBarraDiscoDuro",
    idLugarTarjeta:"discoDuroExterno",
    ubicacionCarpeta:"componentes"
},
{
    idBotonAcordeon:"BotonBarraEnfiamiento",
    idLugarTarjeta:"enfriamiento",
    ubicacionCarpeta:"componentes"
},
{
    idBotonAcordeon:"BotonBarraFuente",
    idLugarTarjeta:"fuenteDeAlimentacion",
    ubicacionCarpeta:"componentes"
},
{
    idBotonAcordeon:"BotonBarraGabinete",
    idLugarTarjeta:"gabinete",
    ubicacionCarpeta:"componentes"
},
{
    idBotonAcordeon:"BotonBarraGpu",
    idLugarTarjeta:"componentes",
    ubicacionCarpeta:"GPU"
},
{
    idBotonAcordeon:"BotonBarraImpresoras",
    idLugarTarjeta:"impresoras",
    ubicacionCarpeta:"oficina"
},
{
    idBotonAcordeon:"BotonBarraLaptops",
    idLugarTarjeta:"laptops",
    ubicacionCarpeta:"oficina"
},
{
    idBotonAcordeon:"BotonBarraMemoriaRam",
    idLugarTarjeta:"memoriaRAM",
    ubicacionCarpeta:"componentes"
},
{
    idBotonAcordeon:"BottonBarraMonitores",
    idLugarTarjeta:"monitores",
    ubicacionCarpeta:"perifericos"
}];
 argumentos.forEach(({idBotonAcordeon,idLugarTarjeta,ubicacionCarpeta})=>{
console.log(idBotonAcordeon,idLugarTarjeta,ubicacionCarpeta);

document.getElementById(idBotonAcordeon).addEventListener("click",  () => {
    
    fes('ubicacionCarpeta','idLugarTarjeta');
    
    
    });
 });