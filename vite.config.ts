import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// export default defineConfig({
// 	plugins: [sveltekit()]
// });

const config: UserConfig = {
	plugins: [sveltekit(), mkcert()],
	server: {
		https: true,
		proxy: {} // TODO: Look up GH issue for this and fix before launch
	},
	css: {
		preprocessorOptions: {
			scss: { additionalData: `@use '$src/styles/design/mixins' as *;` }
		}
	}
};

export default config;
