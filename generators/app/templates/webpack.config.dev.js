var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './examples/js/app'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'examples')]
    }]
  }
};