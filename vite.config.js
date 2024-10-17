import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // Explicitly enable HMR
    watch: {
      usePolling: true, // Use polling for file watching if HMR is not triggering changes
    }
  }
})
