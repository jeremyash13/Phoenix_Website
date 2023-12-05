import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex).MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
};

export default {
	extensions: ['.svelte', '.md'],
	preprocess: mdsvex(mdsvexOptions),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};
