var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		index: [
			// 'webpack-dev-server/client?http://127.0.0.1:3000',
			// 'webpack/hot/only-dev-server',
			'./container/index.js' 
		],// Your appʼs entry point
		detailall: './container/detailall.js',
		report: './container/report.js'
	},
	output: {
		path: __dirname + '/dist/',
		filename: '[name].bundle.js',
		publicPath: __dirname + '/dist/'
	},
	module: {
		loaders: [
			// { test: /\.jsx?$/, loader: 'react-hot!jsx-loader?harmony', exclude: /node_modules/},
			{ test: /\.jsx?$/, loader: 'jsx-loader?harmony', exclude: /node_modules/},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
      		{ test: /\.(png|jpg)$/, loader: 'url-loader'}
    	]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin()
    ],
}