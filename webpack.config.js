const path = require('path');
const webpack = require('webpack');

//entry= point at which to start (client's code), output = where we want it to go (dist folder), mode = what mode do we want it to run? (development or production). It runs at production automatically
module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  mode: 'development',
};
