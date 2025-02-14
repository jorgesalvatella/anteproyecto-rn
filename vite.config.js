import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/anteproyecto-rn/',  // Asegura que los archivos se sirvan desde el subdirectorio adecuado
});
