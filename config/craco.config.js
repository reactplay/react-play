const path = require('path');
const CracoEsbuildPlugin = require('craco-esbuild');
const externalWebpackConfig = require('./webpack.config.js');

const {
  compilerOptions: { paths, baseUrl },
} = require('../tsconfig.json');

module.exports = {
	plugins: [
	   { plugin: CracoEsbuildPlugin }
	],
  eslint: {
    mode: 'file',
	enable: true,
  },
  webpack: externalWebpackConfig,
};
