import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages answers unknown paths with 404.html. A copy of index.html there
// lets a reload on /react-router/about load the app, and the router takes it from there.
const pagesFallback = {
  name: 'pages-404-fallback',
  enforce: 'post',
  generateBundle(_, bundle) {
    const index = bundle['index.html']
    if (index) this.emitFile({ type: 'asset', fileName: '404.html', source: index.source })
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-router/',
  plugins: [react(), pagesFallback],
})
