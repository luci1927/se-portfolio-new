import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/se-portfolio-new/', // Adjust this if deploying to a subdirectory
  plugins: [react()],
});
