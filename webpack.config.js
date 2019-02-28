const path = require('path');
const webpack = require('webpack');
const ip = require('ip').address();
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prod              = process.env.NODE_ENV === 'production';
const isDevelopment     = process.env.NODE_ENV === 'development';

module.exports = {
    watch: isDevelopment,
    entry: path.resolve('./src/scripts/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/assets/',
    },

    devServer: {
        contentBase: 'dist',
        host: ip,
  	port: 9000,
        open: true,
    },
    resolve: {
        alias: {
            scripts: path.join(__dirname, '/src/scripts'),
            styles: path.join(__dirname, '/src/styles'),
            dev: path.join(__dirname, '/src/scripts/dev'),
        },
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
			 test: /\.js$/,
			 loader: 'babel-loader',
			 exclude: /node_modules/,
			 query: {
				 plugins: ['transform-runtime', 'add-module-exports'],
				 presets: ['es2015', 'stage-1'],
			 },
		 },
            { test: /\.(glsl|frag|vert)$/, loader: 'raw-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader?outputStyle=expanded'],
            },
        ],
    },
};
