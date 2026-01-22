import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessor untuk fitur-fitur canggih Svelte
	preprocess: vitePreprocess(),

	kit: {
		// Menggunakan adapter-static untuk hosting biasa
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // PENTING: Mencegah error 404 saat refresh page
			precompress: false,
			strict: true
		})
	}
};

export default config;