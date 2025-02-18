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
        terminos: resolve(__dirname, 'src/pages/terminosCondiciones/terminosC.html')
      },
    },
  },
})