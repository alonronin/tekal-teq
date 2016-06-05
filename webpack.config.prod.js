var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.config');

config.output.filename = 'js/[name].[hash].bundle.js';

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({name: 'vendors', minChunks: Infinity}));
config.plugins.push(new ExtractTextPlugin('css/styles.[hash].css'));

module.exports = config;
