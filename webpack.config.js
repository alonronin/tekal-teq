const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/index.js'],
        vendors: ['./vendors.js']
    },

    output: {
        path: path.resolve('./dist'),
        publicPath: '/'
    },

    context: path.resolve(__dirname, 'angular'),

    module: {
        loaders: [
            {test: /\.js$/, exclude: /(node_modules)/, loaders: ['ng-annotate', 'babel-loader']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less')},
            {test: /\.(woff2?|ttf|svg|eot)?(\?.+)?$/, loader: 'file?name=fonts/[name].[ext]'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.json$/, loader: 'json'},
            {test: require.resolve('jquery'), loader: 'expose?$'},
            {test: require.resolve('jquery'), loader: 'expose?jQuery'}
        ],

        noParse: [
            /^jquery(\-.*)?$/,
            /^bootstrap(\-.*)?$/,
            /^lodash$/,
            /^angular(\-.*)?$/,
            /^ng(\-.*)?$/
        ]
    },

    resolve: {
        alias: {
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tikal TEQ',
            template: 'index.ejs'
        })
    ]
};