import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
      server: {
        port: 3000,
        host: '0.0.0.0',
        // Note: API calls in dev will fail - use Cloudflare Pages local dev (wrangler pages dev)
        // or deploy to preview environment for full API testing
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
});
