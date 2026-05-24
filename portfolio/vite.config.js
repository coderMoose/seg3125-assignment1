import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/seg3125-assignment1/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})