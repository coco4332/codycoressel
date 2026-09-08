import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` must match the GitHub Pages subfolder: coco4332.github.io/codycoressel/
export default defineConfig({
  base: '/codycoressel/',
  plugins: [react()],
})
