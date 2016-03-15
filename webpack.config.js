var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app/index.js'),

  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'eval-source-map',
  devServer: { hot: true },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
