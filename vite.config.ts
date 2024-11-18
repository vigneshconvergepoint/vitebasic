import { defineConfig } from 'vite';
import path from 'path';
import mkcert from 'vite-plugin-mkcert';

(globalThis as { fetch: typeof fetch }).fetch = fetch;
export default defineConfig({
  plugins: [mkcert()], // Automatically generates the certificate with vite-plugin-mkcert
  server: {
    https: {
      key: undefined,
      cert: undefined,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Path alias for your project
    },
  },
});
