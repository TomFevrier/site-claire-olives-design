import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';

const dev = process.env.npm_lifecycle_event === 'dev';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import './src/variables.scss';`
			}	
		}),
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			ssr: false,
			trailingSlash: 'always'
		}),
		alias: {
			'$lib': path.resolve('./src/lib')
		},
		// paths: {
		// 	base: dev ? '' : '',
		// }
	},
};

export default config;
