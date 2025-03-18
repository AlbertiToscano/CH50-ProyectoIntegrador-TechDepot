// https://vitejs.dev/guide/build.html#multi-page-app

import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/about/about.html'),
        contact: resolve(__dirname, 'src/pages/contacto/contacto.html'),
        terminos: resolve(__dirname, 'src/pages/terminosCondiciones/terminosC.html'),
        productos: resolve(__dirname, 'src/pages/productos/productos.html'),
        construyePc: resolve(__dirname, 'src/pages/construyeTuPc/construyeTuPc.html'),
        pagAdmin: resolve(__dirname, 'src/pages/agregarProductos/agregarP.html'),
        pagRegistro: resolve(__dirname, `src/pages/registro/registro.html`),
        pagInicioSesion: resolve(__dirname, `src/pages/inicioSesion/inicioSesion.html`),
        pagCarrito: resolve(__dirname, `src/pages/carrito/carrito.html`),
        registro: resolve(__dirname, 'src/pages/registro/registro.html'),
        miCuenta: resolve(__dirname, 'src/pages/miCuenta/miCuenta.html'),
        producto: resolve(__dirname, 'src/pages/detallesProductos/detallesProductos.html'),
        direcciones: resolve(__dirname, 'src/pages/miCuenta/direcciones/direcciones.html'),
        misPedidos: resolve(__dirname, 'src/pages/miCuenta/misPedidos/misPedidos.html'),
        misPedidos2: resolve(__dirname, 'src/pages/miCuenta/misPedidos/misPedidospag2.html'),
        metodosPago: resolve(__dirname, 'src/pages/miCuenta/metodosPago/metodosPago.html'),
        pagar: resolve(__dirname, 'src/pages/pagar/pagar.html')
      },
    },
  },
})