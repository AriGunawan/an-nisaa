import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import netlify from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import Icons from 'unplugin-icons/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',

		vite: {
			plugins: [
				Icons({
					compiler: 'svelte'
				})
			]
		}
	}
};

export default config;
