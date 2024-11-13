import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    base: '/', // Since you're deploying to the root
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        copyPublicDir: true
    }
})
