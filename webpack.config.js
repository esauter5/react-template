var webpack = require('webpack');

module.exports = {
  entry: "./main.js",

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  devServer: { hot: true },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
