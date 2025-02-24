import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Ensures Vite recognizes it
    },
  },
  resolve: {
    alias: {
      "react-router-dom": "react-router-dom",
    },
  },
  base: '/'


})
