import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    vite: {
        esbuild: {
            target: 'esnext',
        },
        build: {
            target: 'esnext',
        },
        optimizeDeps: {
            include: ['@project-serum/anchor', '@solana/web3.js', 'buffer'],
            esbuildOptions: {
                target: 'esnext'
            }
        },
        define: {
            'process.env.BROWSER': true
        }
    }
})