const path = require('path');
const webpack = require('webpack');
const ip = require('ip').address();
module.exports = {
	watch: true,
	entry: path.resolve('./src/scripts/index.js'),
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js',
		publicPath: "/assets/"
	},
	devServer: {
		contentBase: 'dist',
		host:ip,
  	port: 9000,
		open: true,
	},
	resolve: {
		alias: {
			'scripts': path.join(__dirname, '/src/scripts'),
			'styles': path.join(__dirname, '/src/styles'),
		}
	},
	module: {
		loaders: [
			{
			 test: /\.js$/,
			 loader: 'babel-loader',
			 exclude: /node_modules/,
			 query: {
				 plugins: ['transform-runtime', 'add-module-exports'],
				 presets: ['es2015', 'stage-1']
			 }
		 },
			{ test: /\.(glsl|frag|vert)$/, loader: 'raw-loader', exclude: /node_modules/ },
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss/,
				loaders: ['style-loader', 'css-loader', 'sass-loader?outputStyle=expanded']
			},
		]
	}
}
