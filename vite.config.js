import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/RMWD/' // 👈 rất quan trọng khi deploy lên GitHub Pages
})