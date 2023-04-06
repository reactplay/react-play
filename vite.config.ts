import { defineConfig, loadEnv } from 'vite';
import { splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import EnvironmentPlugin from 'vite-plugin-environment'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
//import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from "path";




export default defineConfig(({ command, mode }) => {
   // Load app-level env vars to node-level env vars.
   const localEnv = loadEnv(mode, process.cwd(), '')
	const { DEV_PORT = 3000 } = localEnv;
  	const isDevelopment = mode === "development";

	const htmlPlugin = () => {
        return {
            name: "html-transform",
            transformIndexHtml(html: string) {
                return html.replace(/%(.*?)%/g, function (match, p1) {
                    return localEnv[p1];
                });
            },
        };
    };


  return {
	plugins: [
		htmlPlugin(),
//		VitePWA({ registerType: 'autoUpdate' }),
		EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
		react(),
		viteTsconfigPaths(),
		svgrPlugin(),
		splitVendorChunkPlugin(),
		chunkSplitPlugin({
		// strategy: 'unbundle',
		// 	customSplitting: {
		// 		// All files in `src/container` will be merged together in `container` chunk
		// 		'plays': [/src\/playsr/]
		// 	}
		 })
	],
    resolve: {
      	alias: {
        "@": resolve(__dirname, "src"),
		common: resolve(__dirname, "src", "common"),
		ErrorBoundary: resolve(__dirname, "src", "ErrorBoundary"),
		images: resolve(__dirname, "src", "images"),
		meta: resolve(__dirname, "src", "meta"),
		plays: resolve(__dirname, "src", "plays"),

      	},
    },
	// https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
	envPrefix: 'REACT_APP_',
    define: {
		'process.env': localEnv
//      "process.env.NODE_ENV": `"${mode}"`
    },
	server: {
    port: DEV_PORT,
  },
//  envPrefix: 'VITE_',
	build: {
		chunkSizeWarningLimit: 1600,
	},
	 css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
	}

})
