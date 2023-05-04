import {
	defineConfig,
	loadEnv,
	splitVendorChunkPlugin
} from 'vite'
import react from '@vitejs/plugin-react';
//import react from 'vite-plugin-react-esbuild';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import EnvironmentPlugin from 'vite-plugin-environment';


import {
	chunkSplitPlugin
} from 'vite-plugin-chunk-split';
import {
	VitePWA
} from 'vite-plugin-pwa'
import {
	resolve
} from "path";


import viteImagemin from 'vite-plugin-imagemin'

import {
	dependencies
} from './package.json';

const devPort = 4000;

const moduleScript = new RegExp('<!-- daScript -->');

const renderChunks = (deps) => {
	let chunks = [];
	Object.keys(deps).forEach((key) => {
		// console.dir(key);
		chunks.push(key);
	});

	while (a.length > 0)
		arrays.push(a.splice(0, nb_split));

};

let arrFiles = [];

const manifestForPlugin = {
	srcDir: 'src',
	filename: 'service-worker.js',
	strategies: "injectManifest",
	//	register: "prompt",
	includeAssets: ["favicon.ico", "logo.png", "maskable_icon.png"],
	manifest: {
		"name": "React Play",
		"short_name": "React Play",
		"description": "ReactPlay is an opensource platform that helps you learn ReactJS faster with hands-on practice model. It is a collection of projects that you can use to learn ReactJS.",
		"icons": [{
				"src": "favicon.ico",
				"sizes": "64x64 32x32 24x24 16x16",
				"type": "image/x-icon"
			},
			{
				"src": "/logo192x192.png",
				"sizes": "192x192",
				"type": "image/png"
			},
			{
				"src": "/logo152x152.png",
				"sizes": "152x152",
				"type": "image/png"
			},
			{
				"src": "/logo256x256.png",
				"sizes": "256x256",
				"type": "image/png"
			},
			{
				"src": "/logo384x384.png",
				"sizes": "384x384",
				"type": "image/png"
			},
			{
				"src": "/logo512x512.png",
				"sizes": "512x512",
				"type": "image/png"
			},
			{
				"src": "/logo48x48.png",
				"sizes": "48x48",
				"type": "image/png"
			},
			{
				"src": "/logo32x32.png",
				"sizes": "32x32",
				"type": "image/png"
			},
			{
				"src": "/logo24x24.png",
				"sizes": "24x24",
				"type": "image/png"
			},
			{
				"src": "/logo16x16.png",
				"sizes": "16x16",
				"type": "image/png"
			},
			{
				"src": "maskable_icon.png",
				"sizes": "64x64 32x32 24x24 16x16 512x512 192x192",
				"type": "image/png",
				"purpose": "maskable"
			}
		],
		"theme_color": "#000000",
		"background_color": "#FFFFFF",
		"display": "standalone",
		"base": "/",
		"scope": "/",
		"id": "/?homescreen=1",
		"start_url": "/?homescreen=1",
		"orientation": "portrait"
	},
	// switch to "true" to enable sw on development
	devOptions: {
		enabled: true,
		type: 'module',
		navigateFallback: 'index.html',
	},
}




export default defineConfig(({
	command,
	mode
}) => {
	// Load app-level env vars to node-level env vars.
	const localEnv = loadEnv(mode, process.cwd(), '')
	const {
		DEV_PORT = devPort
	} = localEnv;
	const isDevelopment = mode === "development";

	const htmlPlugin = () => {
		return {
			name: "html-transform",
			transformIndexHtml(html: string) {
				return html.replace(/%(.*?)%/g, function(match, p1) {
					return localEnv[p1];
				});
				
				// return html.replace(moduleScript, function(match, p1) {
					// return '<script type="module" src="src/index.jsx"></script>';
				// });
				
			},
		};
	};

	const getVendorName = (id, nameStart = '', it = 0, lenMax = 3, prefix = 'vendor') => {
		let i = 65;
		while (i <= 90) {
			let letter = String.fromCharCode(i);
			if (id[it].toUpperCase() === letter) {
				return `${prefix}_${nameStart}_${letter}`;
			}
			i++;
		}
		if (it < lenMax) {
			nameStart += id[it].toUpperCase();
			it++;
			return getVendorName(id, nameStart, it, lenMax);
		}
		return prefix;
	}

	return {
		 test: {
			globals: true,
		},
		plugins: [
			VitePWA(manifestForPlugin),
			EnvironmentPlugin('all', {
				prefix: 'REACT_APP_'
			}),
			htmlPlugin(),
			react(),
			viteImagemin({
				gifsicle: {
					optimizationLevel: 7,
					interlaced: false,
				},
				optipng: {
					optimizationLevel: 7,
				},
				mozjpeg: {
					quality: 20,
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 4,
				},
				svgo: {
					plugins: [{
							name: 'removeViewBox',
						},
						{
							name: 'removeEmptyAttrs',
							active: false,
						},
					],
				},
			}),
			viteTsconfigPaths(),
			svgrPlugin(),
			//		splitVendorChunkPlugin(),
			chunkSplitPlugin({
				strategy: 'unbundle',
				customSplitting: {
					'common': [/src\/common/, /src\/meta/, /src\/ErrorBoundary/],
				},
				customChunk: (args) => {
					//	files into pages directory is export in single files
					let {
						file,
						id,
						moduleId,
						root
					} = args;
					if (file.startsWith('src/plays/')) {
						file = file.substring(10);
						let ext = '';
						if (file.endsWith('.css') || file.endsWith('.scss')) {
							ext = 'css';
						} else if (file.endsWith('.js') ||
							file.endsWith('.jsx') ||
							file.endsWith('.ts') ||
							file.endsWith('.tsx')
						) {
							ext = 'js';
						}
						file = file.replace(/\.[^.$]+$/, '').split('/')[0];
						return ext ? getVendorName(file, '', 0, 3, ext) : file;
					}

					if (id.includes('node_modules/')) {
						// let namedId = '';
						let nameId = (id.includes('node_modules/.pnpm')) ?
							id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString() :
							id.toString().split('node_modules/')[1].split('/')[0].toString();

						//	return nameId;
						if (nameId.includes('@tensorflow')) return nameId;
						if (nameId.includes('@tensorflow/tfjs')) return 'vendor_tensorflowTjs'
						if (nameId.includes('@tensorflow')) return 'vendor_tensorflow'
						if (nameId.includes('mathjs')) return 'vendor_mathjs'
						if (nameId.includes('jspdf')) return 'vendor_jspdf'
						if (nameId.includes('date-fns')) return 'vendor_date-fns'
						if (nameId.includes('react-p5')) return 'vendor_react-p5'
						if (nameId.includes('highlight.js')) return 'vendor_highlightJs'
						//		if(nameId.includes('redux')) return 'vendor_redux';

						if (nameId.includes('react@') ||
							nameId.includes('react-dom')
						) return 'vendor_react';

						return getVendorName(nameId, '', 0, 3);
					}
					return 'vendor'; // all other package goes here
				},
			}),

		],
		resolve: {
			alias: {
				// "@": resolve(__dirname, "src"),
				// common: resolve(__dirname, "src", "common"),
				// ErrorBoundary: resolve(__dirname, "src", "ErrorBoundary"),
				// images: resolve(__dirname, "src", "images"),
				// meta: resolve(__dirname, "src", "meta"),
				// plays: resolve(__dirname, "src", "plays"),

			},
		},
		// https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
		envPrefix: 'REACT_APP_',
		define: {
			'process.env': localEnv
		},
		server: {
			port: DEV_PORT,
		},
		build: {
			outDir: resolve(__dirname, 'build'),
			chunkSizeWarningLimit: 1600,
			sourcemap: false,
			cssCodeSplit: true
		},

		css: {
			modules: {
				generateScopedName: isDevelopment ?
					"[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
			},
		},
	}

})
