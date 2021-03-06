var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    resolve: {
        extensions: [".jsx", ".json", ".js"],
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html',
        },
    },
};
