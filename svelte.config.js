import preprocessor from 'svelte-preprocess';

const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `@use './src/styles/variables.scss' as *;`
		}
	}),
	kit: {
		adapter: adapter({
			edge: false,
			split: false,
			compress: true
		})
	}
};

export default config;
