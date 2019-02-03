const webpack = require('webpack');
const ExtracTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + 'public',
        filename: './app.js'
    }, devServer: {
        port: 8080,
        contentBase: './public',
    }, resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/plugins/js/bootstrap.js',
        }
    }, plugins: [
        new webpack.ProgressPlugin({
            $: 'query',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtracTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2012', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtracTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}