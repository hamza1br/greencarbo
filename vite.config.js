import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      buildDirectory: 'build',
      refresh: true,
      esbuild: {
        loader: {
          '.js': 'jsx', // Force JSX pour les fichiers .js
          '.jsx': 'jsx' // Configuration explicite pour JSX
        }
      }
    }),
    react({
      babel: {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    })
  ],
  resolve: {
    alias: {
      '@': '/resources/js'
    },
    extensions: ['.js', '.jsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx' // Double vérification pour ESBuild
      }
    }
  }
});