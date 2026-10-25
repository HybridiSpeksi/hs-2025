import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
    plugins: [
        sveltekit(),
        Icons({
            compiler: 'svelte',
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
});
