import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': '"production"', // avoids 'process is undefined' error
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/js/bookStore.js'),
      formats: ['iife'], //can be es, cjs, umd or iife 
      name: 'bookStore',
      fileName: (format) => `bookStore.js`,
    },
    emptyOutDir: false,
    outDir: 'src/assets/js',
    sourcemap: true,
  }
});
