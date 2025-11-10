import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Do not exclude lucide-react so Vite pre-bundles it correctly.
    // Excluding can cause ESM named export resolution errors in dev.
    exclude: [],
  },
});
