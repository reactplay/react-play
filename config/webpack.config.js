const path = require('path');
const { ProvidePlugin } = require('webpack');

const {
  compilerOptions: { paths, baseUrl },
} = require('../tsconfig.json');


const config = {
    // Set them your alias in the tsconfig.json
    alias: Object.keys(paths).reduce(
      (all, alias) => ({
        ...all,
        [alias.replace('/*', '')]: path.resolve(
          __dirname, '../' + baseUrl,
          paths[alias][0].replace('/*', '')
        ),
      }),
      {}
    ),
	plugins: [
        new ProvidePlugin({
          React: 'react',
        })
    ],
	configure: {
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("node_modules") ||
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ],
    },
  }
  
  
module.exports = config;