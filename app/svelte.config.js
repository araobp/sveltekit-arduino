import adapter from '@sveltejs/adapter-node';

export default {
	compilerOptions: {
		customElement: true
		// other compiler options ...
	},
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