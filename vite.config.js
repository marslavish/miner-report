import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reportShare/',
  publicPath: '/reportShare/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.3.58:40003',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\//, ''),
      },
    },
  },
});
