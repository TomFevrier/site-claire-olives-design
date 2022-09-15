import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';
import { mdsvex } from 'mdsvex'

const dev = process.env.npm_lifecycle_event === 'dev';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import './src/variables.scss';`
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				animations: 'src/routes/animations/layout.svelte',
				objets: 'src/routes/objets/layout.svelte'
			}
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
		paths: {
			base: dev ? '' : '',
		}
	},
};

export default config;
