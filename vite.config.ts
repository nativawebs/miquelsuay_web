import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        novio: resolve(__dirname, 'novio/index.html'),
        mujer: resolve(__dirname, 'mujer/index.html')
      }
    }
  }
})
