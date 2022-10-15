import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://soymegh.github.io/gh-react/',
  plugins: [react()]
})
