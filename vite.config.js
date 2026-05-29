import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/resend': {
        target: 'https://api.resend.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/resend/, '/emails'),
        headers: {
          'Authorization': 'Bearer re_FpE1JMYZ_4UYTJ8KZLTLG3ST6GvtztCY4'
        }
      }
    }
  }
})