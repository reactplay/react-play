// / <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import { splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import svgr from '@svgr/rollup';
// import svgr from 'vite-plugin-svgr'
import url from '@rollup/plugin-url';
import EnvironmentPlugin from 'vite-plugin-environment';
import { createHtmlPlugin } from 'vite-plugin-html';
import tsconfigPaths from 'vite-tsconfig-paths';
// import react from "@vitejs/plugin-react-swc";
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load app-level env vars to node-level env vars.
  const localEnv = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, localEnv);
  const { DEV_PORT = 3000 } = process.env;
  const isDevelopment = mode === 'development';

  const htmlPlugin = () => {
    return {
      name: 'html-transform',
      transformIndexHtml(html: string) {
        return html.replace(/%(.*?)%/g, function (match, p1) {
          return localEnv[p1];
        });
      }
    };
  };

  return {
    // define: {
    //   global: {},
    // //      "process.env.NODE_ENV": `"${mode}"`
    // },
    server: {
      host: true,
      port: DEV_PORT,
      open: true
      // proxy: {
      //   '/dev-api': {
      //     target: 'XXX.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/dev-api/, '')
      //   }
      // }
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        src: resolve(__dirname, './src'),
        App: resolve(__dirname, './src/App.jsx'),
        common: resolve(__dirname, './src/common'),
        constants: resolve(__dirname, './src/constants'),
        errorBondary: resolve(__dirname, './src/errorBondary'),
        images: resolve(__dirname, './src/images'),
        meta: resolve(__dirname, './src/meta'),
        plays: resolve(__dirname, './plays')
      },

      extensions: ['.jsx', '.tsx', '.js', '.ts', '.json']
    },
    envPrefix: 'REACT_APP_',
    plugins: [
      url(),
      svgr(),
      tsconfigPaths(),
      // react({ jsxImportSource: "@emotion/react" }),
      react(),
      htmlPlugin(),
      EnvironmentPlugin({ REACT_APP_DEV_PORT: DEV_PORT }),
      EnvironmentPlugin('all', { prefix: 'REACT_APP_' }),
      VitePWA({
        registerType: 'autoUpdate',
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'service-worker.js',
        // add this to cache all the imports
        workbox: {
          globPatterns: ['**/*']
        },
        // add this to cache all the
        // static assets in the public folder
        includeAssets: ['**/*'],
        devOptions: {
          enabled: true
          /* other options */
        }
      })
    ],

    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './src/setupTests.js',
      css: true,
      reporters: ['verbose'],
      coverage: {
        reporter: ['text', 'json', 'html'],
        include: [
          `./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`,
          `./plays/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`
        ],
        exclude: [
          '**/node_modules/**',
          '**/build/**',
          '**/dist/**',
          '**/cypress/**',
          '**/.{idea,git,cache,output,temp}/**',
          '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
        ]
      }
    },
    build: {
      outDir: 'build'
    }
  };
});
