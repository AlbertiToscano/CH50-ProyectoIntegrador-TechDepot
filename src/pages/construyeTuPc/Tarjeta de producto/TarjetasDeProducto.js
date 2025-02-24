

/*
función para dibujar las estrellas
**/

export const dibujarEstrellas = (rating) => {
   let textoHtml = "";
    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {
            textoHtml = textoHtml + `<i class="bi bi-star-fill text-warning"></i>
            `;
        } else if (i - 0.5 <= rating) {
            textoHtml = textoHtml + `<i class="bi bi-star-half text-warning"></i>
            `;
        } else {
            textoHtml = textoHtml + `<i class="bi bi-star text-warning"></i>
            `;
        }
    }
    return textoHtml;

};




/* Clase para crear la tarjeta de producto */

export class ProductCard {

    constructor(id, titulo, descripcion, precio, imagen, rating) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.rating = rating;
    }



    // Método para generar el HTML de la tarjeta
    generateHTML() {
        return `
            <div class="card" style="width: 18rem;">
                            <img src="${this.imagen}" class="card-img-top" alt="${this.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${this.titulo} </h5>
                                <p class="card-text">${this.descripcion} </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                    ${dibujarEstrellas(this.rating)}
                                        <small class="text-muted">(${this.rating})</small>
                                    </div>
                                </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="h5 mb-0 card-price">$${this.precio} </span>
                                        <div>
                                            <a href="#" class="btn">Añadir al carrito</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
        `;

    }

}


//función para generar las tarjetas a partir de objetos ProductCard

export const generateCardsOfProducts = (productos) => {
    const productosObj = productos.map((producto) => {
      const newProducto = new ProductCard(
        producto.id,
        producto.titulo,
        producto.descripcion,
        producto.precio,
        producto.imagen,
        producto.rating.valoracion
      );
  
      return newProducto.generateHTML();
    });
  
    return productosObj.join("");
  };
  

 //  función para extraer la referencia del DOM
export const insertCardsToHTML = ( cards, id = "cards" ) => {

    const section = document.getElementById( id );
    section.innerHTML = cards;
}




//función para obtener los productos desde los json

export const getProducts = async( id, url ) => {
    try {
        const response = await fetch( url );
        const productos = await response.json();
        console.log(productos[0].imagen);
        const cards = generateCardsOfProducts( productos );
        insertCardsToHTML( cards, id );            
    } catch (error) {
        console.error( error );
    }
}