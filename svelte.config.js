import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

const dev = process.env.npm_lifecycle_event === 'dev';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/variables.scss';`
		}
	}),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			ssr: false,
			trailingSlash: 'always'
		}),
		prerender: {
			default: true
		},
		// alias: {
		// 	'$components': path.resolve('./src/components'),
		// 	'$utils': path.resolve('./src/utils'),
		// 	'$stores': path.resolve('./src/stores')
		// },
		paths: {
			base: dev ? '' : '',
		}
	},
};

export default config;
