import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // this ensures Vite can handle environment variables
  },
  build: {
    outDir: 'dist',
  },
});

