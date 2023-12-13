/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig(({ mode }) => {
    return {
        build: {
            outDir: 'dist',
        },
        test: {
            setupFiles: './jest-setup.js',
            environment: 'jsdom',
            css: true,
            include: ['src/**/*.{js,jsx}'],
            globals: true,
            coverage: {
                reportsDirectory: 'vitest-coverage',
                include: [
                    'src/utils/**/*.{js,jsx}',
                    '!src/components/**/*.{js,jsx}',
                ],
                enabled: true,
                reporter: ['html'],
            },
        },
        plugins: [
            react(),
            resolve({
                extensions: ['.js', '.ts', 'jsx', 'tsx'],
            }),
        ],
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        css: {
            modules: {},
            postcss: {
                plugins: [require('postcss-preset-env')()],
            },
        },
        server: {
            port: 3000, // Adjust the port as needed
            open: true,
            hmr: { overlay: false },
        },
    };
});
