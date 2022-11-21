const node_externals = require("webpack-node-externals");

module.exports = {
  externals: [node_externals()],
};
