var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './js/app/index/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].bundle.js',
    publicPath: __dirname + '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders:  ['babel'], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader'}
    ]
  }

}
