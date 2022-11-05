import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

// NOTE: fix __dirname not defined
const __dirname =
	typeof __dirname !== 'undefined'
		? __dirname
		: dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},

	resolve: {
		alias: {
			app: resolve(__dirname, 'src', 'app'),
			components: resolve(__dirname, 'src', 'components'),
			contexts: resolve(__dirname, 'src', 'contexts'),
			helpers: resolve(__dirname, 'src', 'helpers'),
			hooks: resolve(__dirname, 'src', 'hooks'),
			interfaces: resolve(__dirname, 'src', 'interfaces'),
			pages: resolve(__dirname, 'src', 'pages'),
		},
	},
});
