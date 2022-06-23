import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({ extensions: ['.md', '.svx'] }),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),

		prerender: {
			default: true,
		},

		alias: {
			$components: 'src/components',
			$utils: 'src/lib/utils',
			$lib: 'src/lib/'
		},
		
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	}
};

export default config;
