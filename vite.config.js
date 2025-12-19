import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Rollup optimization options
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor libraries in separate chunk
          'vendor-react': ['react', 'react-dom'],
          'vendor-supabase': ['@supabase/supabase-js']
        }
      }
    },
    // Chunk size warning limit (in KB)
    chunkSizeWarningLimit: 1000,
    // Minify using terser for best compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    // CSS minification
    cssMinify: true,
    // Target modern browsers for better optimization
    target: 'es2015',
    // Source maps for debugging (can disable for faster builds)
    sourcemap: false
  },
  // Server options for dev
  server: {
    port: 5173
  }
})
