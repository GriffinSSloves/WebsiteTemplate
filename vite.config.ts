/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    base: '/', // Since you're deploying to the root
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        copyPublicDir: true
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './src/tests/setup.ts',
        include: ['src/**/*.test.{ts,tsx}'],
        css: false
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
